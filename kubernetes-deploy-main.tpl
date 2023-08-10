apiVersion: apps/v1
kind: Deployment
metadata:
    name: moj-prototype-${BRANCH}
spec:
    replicas: 1
    selector:
        matchLabels:
            app: prototype-${BRANCH}
    template:
        metadata:
            labels:
                app: prototype-${BRANCH}
        spec:
            containers:
              - name: prototype
                image: ${REGISTRY}/${REPOSITORY}:${IMAGE_TAG}
                env:
                  - name: USERNAME
                    valueFrom:
                        secretKeyRef:
                            name: basic-auth
                            key: username
                  - name: PASSWORD
                    valueFrom:
                        secretKeyRef:
                            name: basic-auth
                            key: password
                ports:
                  - containerPort: 3000

---

apiVersion: v1
kind: Service
metadata:
    name: prototype-service-${BRANCH}
    labels:
        app: prototype-service-${BRANCH}
spec:
    ports:
      - port: 3000
        name: http
        targetPort: 3000
    selector:
        app: prototype-${BRANCH}

---

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
    name: prototype-ingress-${BRANCH}
    annotations:
        nginx.ingress.kubernetes.io/whitelist-source-range: 35.176.93.186/32,81.134.202.29/32,51.149.250.0/24,51.149.251.0/24,51.149.249.0/29,194.33.248.0/29,194.33.249.0/29,51.149.249.32/29,51.149.250.206/32,194.33.192.6/32,84.66.96.124/32
        external-dns.alpha.kubernetes.io/set-identifier: prototype-ingress-${BRANCH}-${KUBE_NAMESPACE}-green
        external-dns.alpha.kubernetes.io/aws-weight: "100"
spec:
    ingressClassName: default
    tls:
      - hosts:
          - ${KUBE_NAMESPACE}-${BRANCH}.apps.live.cloud-platform.service.justice.gov.uk
    rules:
      - host: ${KUBE_NAMESPACE}-${BRANCH}.apps.live.cloud-platform.service.justice.gov.uk
        http:
            paths:
              - path: /
                pathType: ImplementationSpecific
                backend:
                    service:
                        name: prototype-service-${BRANCH}
                        port:
                            number: 3000

---
