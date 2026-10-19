var resumeData = {
    profile: {
        name: "iamywl",
        headline: "Designing Low-Latency Kernel Observability & Scalable Cloud Native Systems",
        status: "Production Ready · Open for Senior SRE & Platform Roles",
        keyword: "Linux Kernel 6.x & eBPF · Kubernetes Multi-Cluster · Cloud Native & DevSecOps",
        title: "Infrastructure & Security Architect",
        email: "yongdev1919@gmail.com",
        github: "iamywl",
        summary: "Linux Kernel 6.x와 eBPF 기반의 초저지연 런타임 보안 관측 및 Apple Silicon 기반 엔터프라이즈 K8s 오케스트레이션을 연구·설계합니다.",
        fullIntro: `
        공유 커널 구조의 컨테이너 환경에서 런타임 위협을 최소화하기 위해 Linux Kernel 6.x와 eBPF를 활용한 무복사(Zero-Copy) 동적 모니터링 아키텍처를 연구했습니다. Ptrace 대비 오버헤드를 1.8% 미만으로 억제하며 99% F1-Score로 비인가 시스템 콜 및 Race Condition 공격을 실시간 방어합니다.
        더불어 모든 인프라는 완전한 선언적 코드(IaC)로 제어되어야 한다는 철학으로, Apple Silicon ARM64 가상화(Tart VM) 기반 4-Node 멀티클러스터 K8s 자동화부터 ArgoCD GitOps, Trivy 및 Falco 기반 Shift-Left DevSecOps 파이프라인을 구축해 오고 있습니다.`
    },

    stats: [
        { value: "99%", label: "Race Condition 탐지 F1-Score" },
        { value: "< 1.8%", label: "eBPF 커널 런타임 CPU 오버헤드" },
        { value: "5건", label: "공식 기술 수상 & 학회 우수논문" },
        { value: "< 1.2μs", label: "Kernel Hook 실행 지연시간" }
    ],

    techBento: [
        {
            category: "Core / Production-Ready",
            roleDescription: "프로덕션 레벨에서 아키텍처를 직접 설계하고 튜닝 가능한 핵심 스택",
            icon: "fas fa-microchip",
            badgeColor: "emerald",
            items: [
                { name: "Linux Kernel 6.x", context: "kprobe/sys_enter 실시간 트레이싱", tag: "Production" },
                { name: "eBPF (libbpf / BCC)", context: "무복사 링버퍼 이벤트 스트리밍", tag: "Core" },
                { name: "Kubernetes", context: "멀티클러스터 설계 & HPA 오토스케일링", tag: "Production" },
                { name: "C / C++", context: "초저지연 시스템 프로그래밍 & epoll WAS", tag: "Production" },
                { name: "Go / Python", context: "클라우드 네이티브 오퍼레이터 & ML 파이프라인", tag: "Production" }
            ]
        },
        {
            category: "Infrastructure & Cloud Native",
            roleDescription: "격리된 하이퍼바이저 가상화 및 서비스 메시, 네트워크 인프라",
            icon: "fas fa-cloud",
            badgeColor: "cyan",
            items: [
                { name: "Tart VM (ARM64)", context: "Apple Silicon 가상화 클러스터", tag: "Infra" },
                { name: "Cilium CNI", context: "eBPF 기반 L3/L4/L7 고속 패킷 라우팅", tag: "Network" },
                { name: "ArgoCD", context: "선언적 GitOps & 프로그레시브 카나리 배포", tag: "GitOps" },
                { name: "Istio Service Mesh", context: "mTLS 상호인증 & 트래픽 트래픽 제어", tag: "Mesh" },
                { name: "MetalLB / containerd", context: "온프레미스 L2 로드밸런싱 & 컨테이너 런타임", tag: "Infra" }
            ]
        },
        {
            category: "SecOps & Shift-Left IaC",
            roleDescription: "코드 기반 선언적 프로비저닝 및 제로트러스트 런타임 방어 체계",
            icon: "fas fa-shield-halved",
            badgeColor: "violet",
            items: [
                { name: "Terraform", context: "100% 선언적 VM 생애주기 오토메이션", tag: "IaC" },
                { name: "Ansible", context: "클러스터 부트스트랩 & 구성 관리 자동화", tag: "Automation" },
                { name: "Falco Runtime", context: "커널 시스템 콜 비인가 침입 실시간 차단", tag: "Security" },
                { name: "Trivy & Cosign", context: "CI/CD 취약점 스캐닝 & 이미지 서명 검증", tag: "Shift-Left" },
                { name: "HashiCorp Vault", context: "엔터프라이즈 분산 시크릿 암호화", tag: "Zero-Trust" }
            ]
        },
        {
            category: "Observability & Distributed Data",
            roleDescription: "고가용성 분산 캐싱 및 마이크로서비스 텔레메트리 관제",
            icon: "fas fa-chart-line",
            badgeColor: "amber",
            items: [
                { name: "Prometheus", context: "노드/파드 시계열 메트릭 수집 & 알림", tag: "Metrics" },
                { name: "Grafana", context: "실시간 SRE 통합 대시보드 구축", tag: "Telemetry" },
                { name: "Redis", context: "다계층 분산 캐싱 (히트율 94%+)", tag: "Cache" },
                { name: "PostgreSQL", context: "고가용성 RDBMS & 쿼리 실행계획 최적화", tag: "Database" },
                { name: "Docker", context: "멀티스테이지 경량 컨테이너 패키징", tag: "Container" }
            ]
        }
    ],

    projects: [
        {
            title: "ebpf_NSR · eBPF & ML Kernel Defense",
            domain: "Kernel Security",
            role: "Lead Systems Architect · Individual Research",
            period: "2024.01 - 2024.12",
            badge: "Kernel Security",
            headline: "국가보안기술연구소 연구과제: eBPF 기반 커널 런타임 침해 탐지 및 머신러닝 방어 엔진",
            terminalSnippet: `# Attach in-kernel eBPF ring-buffer probe
$ sudo ./ebpf_nsr --hook sys_enter --tracepoint race_condition
[INFO] eBPF bytecode verified (insns: 412, JIT: OK)
[TRACE] Attached to kprobe:do_sys_openat2 (latency: 1.18μs)
[METRIC] Saturation test: 100,000 SYN/s -> Mitigated (CPU: 1.76%)`,
            problem: "기존의 정적 도구(Seccomp)나 Ptrace 기반 유저스페이스 침입탐지 시스템은 15% 이상의 과도한 CPU 컨텍스트 스위칭 오버헤드를 유발하고, 실시간 시스템 콜 변조 및 Race Condition 공격에 즉각 대응하지 못하는 한계가 있었습니다.",
            points: [
                "Linux Kernel eBPF(kprobe/sys_enter) 기반 무복사(Zero-Copy) 링버퍼 이벤트 스트리밍 파이프라인 설계",
                "시스템 콜 인자 유사도 및 호출 빈도 분석으로 컨테이너 Race Condition 탐지 F1-Score 99% 달성",
                "Strace/Ptrace 대비 획기적으로 낮은 오버헤드(CPU 1.8% 이내)로 실시간 ML 침해 탐지 모델 연동",
                "커널 훅 실행 지연시간 < 1.2μs 보증 및 100,000+ SYN/s 대규모 패킷 공격 포화 방어 검증"
            ],
            metrics: [
                { label: "Hook Latency", value: "< 1.2μs" },
                { label: "F1-Score", value: "99%" },
                { label: "CPU Overhead", value: "< 1.8%" },
                { label: "Throughput", value: "100k+ SYN/s" }
            ],
            link: "https://github.com/iamywl/ebpf_NSR"
        },
        {
            title: "service_infra · Tart VM Multi-Cluster K8s",
            domain: "Cloud Native",
            role: "Infrastructure Lead · 4-Node Cluster",
            period: "2026.03 - 2026.06",
            badge: "Cloud Native",
            headline: "Apple Silicon 가상화 기반 4-Node 프로덕션급 멀티클러스터 쿠버네티스 인프라",
            terminalSnippet: `# Tart virtualization cluster bootstrap
$ kubectl get nodes -o wide
NAME           STATUS   ROLES           AGE   VERSION   INTERNAL-IP
tart-cp-01     Ready    control-plane   84d   v1.29.2   192.168.64.10
tart-worker-01 Ready    <none>          84d   v1.29.2   192.168.64.11
tart-worker-02 Ready    <none>          84d   v1.29.2   192.168.64.12
tart-worker-03 Ready    <none>          84d   v1.29.2   192.168.64.13
[STATUS] Cilium eBPF CNI: OK | ArgoCD GitOps: Synced (SLA: 99.9%)`,
            problem: "엔터프라이즈 환경 테스트를 위한 클라우드 멀티클러스터 인프라는 막대한 비용이 발생하며, 로컬 환경에서는 실제 운영망과 동일한 네트워크 정책 및 고가용성 장애 복구 검증이 어려웠습니다.",
            points: [
                "Apple Virtualization.framework(Tart) 기반 4-Node ARM64 가상화 클러스터(1 CP + 3 Workers) 구축",
                "Cilium eBPF CNI + MetalLB L2 로드밸런싱 + Istio 서비스 메시 연동 7계층 엔터프라이즈 아키텍처 완성",
                "ArgoCD GitOps 엔진을 통한 프로그레시브 카나리 배포 및 무중단 롤링 업데이트로 99.9% 가용성 SLA 달성",
                "Prometheus & Grafana 텔레메트리 연동으로 노드 장애 시 3초 이내 자동 감지 및 셀프힐링 파이프라인 구현"
            ],
            metrics: [
                { label: "Cluster Nodes", value: "4 Nodes" },
                { label: "Uptime SLA", value: "99.9%" },
                { label: "Deployment", value: "Zero Downtime" },
                { label: "Failover Detection", value: "< 3.0s" }
            ],
            link: "https://github.com/iamywl/service_infra"
        },
        {
            title: "IaC_apple_sillicon · Apple Silicon Native K8s IaC",
            domain: "IaC Automation",
            role: "Platform Engineer · Terraform/Ansible",
            period: "2026.03 - 2026.06",
            badge: "IaC Platform",
            headline: "맥북 환경에서 엔터프라이즈 멀티클러스터 K8s를 단일 스크립트로 전자동 프로비저닝하는 IaC",
            terminalSnippet: `# Zero-drift Terraform cluster provisioning
$ ./demo.sh --env enterprise-prod --nodes 4
[TERRAFORM] tart_instance.nodes: Creating... [id=tart-cluster-arm64]
[ANSIBLE] TASK [bootstrap : install containerd & cilium] ***
[SUCCESS] 4-Cluster Multi-tenant environment ready in 41.8s!
[VERIFY] Zero configuration drift confirmed (100% declarative)`,
            problem: "로컬 스테이징 클러스터 구축 시 수십 회의 SSH 접속과 수백 줄의 수동 명령어 실행으로 인해 환경 파편화(Configuration Drift)가 발생하고 평균 1~2시간 이상의 개발자 리소스가 낭비되었습니다.",
            points: [
                "100% 선언적 Terraform 모듈 + Ansible 플레이북으로 Tart VM 생애주기 전자동화 (42초 이내 프로비저닝)",
                "수작업 1~2시간 소요되던 4개 독립 클러스터 구성을 단일 ./demo.sh 명령어로 15분 만에 오차 없이 자동 배포",
                "VirtIO-net 및 VirtIO-blk 가속 패치를 적용한 커스텀 초경량 ARM64 Linux 커널 이미지 빌드 파이프라인 통합",
                "DHCP IP 변동 시 API 서버 인증서·kubelet·CNI 자동 갱신 무중단 재부팅 지원 및 SRE 대시보드 제공"
            ],
            metrics: [
                { label: "Provisioning Speed", value: "< 42s" },
                { label: "Deploy Time", value: "15m (vs 2h)" },
                { label: "Declarative Coverage", value: "100%" },
                { label: "Config Drift", value: "0%" }
            ],
            link: "https://github.com/iamywl/IaC_apple_sillicon"
        },
        {
            title: "devsecops · 4-Cluster Homelab & GitOps Platform",
            domain: "DevSecOps",
            role: "DevSecOps Architect · CI/CD Security",
            period: "2025.10 - 2026.02",
            badge: "DevSecOps",
            headline: "Dev → Staging → Prod → Ops 4중 격리 토폴로지 기반 엔터프라이즈 DevSecOps 플랫폼",
            terminalSnippet: `# Shift-left CVE gating & Falco runtime dispatch
$ trivy image --severity HIGH,CRITICAL registry.corp/api:v2.4
[TRIVY] Vulnerabilities: 0 CRITICAL, 0 HIGH (PASSED)
[COSIGN] Image signature verified against KMS key
[FALCO] Kernel syscall alert: Non-root enforcement -> Dispatched in 380ms`,
            problem: "컨테이너 이미지 내 검증되지 않은 의존성 취약점, 빌드 타임 시크릿 유출, 프로덕션 런타임 권한 상승 공격 등 소프트웨어 공급망 보안의 취약점이 심각한 위협으로 대두되었습니다.",
            points: [
                "CI/CD 파이프라인 내 Trivy 정적 취약점 스캐닝 및 Cosign 이미지 서명 검증을 통한 Shift-Left 보안 게이팅",
                "Falco 런타임 커널 에이전트를 통한 비인가 시스템 콜 실시간 모니터링 (< 500ms 경보 디스패치)",
                "Kyverno Admission Controller 기반 비루트(Non-root) 컨테이너 실행 및 최소 권한 RBAC 강제",
                "Sealed Secrets 및 HashiCorp Vault 연동을 통한 분산 시크릿 암호화 관리"
            ],
            metrics: [
                { label: "CVE Gate", value: "100% Gated" },
                { label: "Alert Latency", value: "< 500ms" },
                { label: "Environments", value: "4-Tier Isolated" },
                { label: "Root Containers", value: "0 Allowed" }
            ],
            link: "https://github.com/iamywl/devsecops"
        },
        {
            title: "Middleware_Hello · High-Concurrency Linux WAS",
            domain: "Systems & WAS",
            role: "Core Systems Engineer · C/C++ & Network",
            period: "2025.03 - 2025.08",
            badge: "Systems & WAS",
            headline: "Linux epoll Reactor 패턴 기반 비동기 논블로킹 고성능 웹 애플리케이션 서버",
            terminalSnippet: `# C10K concurrency load testing with wrk
$ wrk -t8 -c10000 -d30s http://127.0.0.1:8080/benchmark
Running 30s test @ http://127.0.0.1:8080/benchmark
  8 threads and 10000 connections
  Requests/sec: 142,857.14 | Latency p99: 4.82ms
  Transfer/sec: 24.50MB (Socket Ring-Buffer: Zero-Copy)`,
            problem: "기존의 Thread-per-Connection 방식 서버(기본 톰캣/아파치 풀)는 C10K(1만 동시 연결) 환경에서 극심한 스레드 경합과 메모리 오버헤드로 인해 응답 지연이 급격히 증가하는 병목이 존재했습니다.",
            points: [
                "기존 블로킹 I/O 한계를 극복하기 위해 Edge-Triggered epoll 이벤트 루프 및 Reactor 패턴 자체 구현",
                "10,000+ 동시 연결(C10K) 부하 상황에서도 Sub-5ms p99 응답 지연시간 유지 및 메모리 풋프린트 최소화",
                "논블로킹 소켓 링버퍼 할당자 및 Zero-Copy 패킷 디스패칭 구조를 통한 CPU 컨텍스트 스위칭 제거",
                "POSIX 소켓 및 HTTP/1.1 규격을 완벽히 준수하는 커스텀 네트워크 프레임워크 개발"
            ],
            metrics: [
                { label: "Concurrent Conns", value: "10,000+ (C10K)" },
                { label: "p99 Latency", value: "< 5.0ms" },
                { label: "Req Throughput", value: "140k+ req/s" },
                { label: "Socket Buffer", value: "Zero-Copy" }
            ],
            link: "https://github.com/iamywl/Middleware_Hello"
        },
        {
            title: "ROMA · Scalable Roommate Matching Backend",
            domain: "Distributed Backend",
            role: "Backend Architect · Microservices",
            period: "2025.07 - 2025.12",
            badge: "Distributed Backend",
            headline: "대규모 실시간 트래픽 처리를 위한 마이크로서비스 아키텍처 및 분산 캐싱 백엔드",
            terminalSnippet: `# Distributed Cache Hit Rate & Query SLA
$ redis-cli info stats | grep keyspace_hits
keyspace_hits: 2,841,920 (Cache Hit Ratio: 94.6%)
$ k6 run --vus 2000 load_test_matching.js
[HTTP] p95 Response Time: 36.4ms (SLA target < 100ms: PASSED)`,
            problem: "학기 초 기숙사 룸메이트 매칭 신청 트래픽 집중 시, 복잡한 성향 매칭 및 지리정보 RDBMS 쿼리로 인한 커넥션 풀 고갈과 데이터베이스 락업(Lock-up) 위험이 발생했습니다.",
            points: [
                "Kubernetes HPA 기반 트래픽 급증 시 포드 자동 스케일아웃 아키텍처 설계",
                "Redis 다계층 분산 캐싱 전략 도입으로 RDBMS 읽기 부하 분산 및 캐시 히트율 94%+ 달성",
                "지리정보 및 성향 매칭 알고리즘 쿼리 튜닝으로 p95 응답 지연시간 38ms 이하 유지",
                "Jenkins & ArgoCD 기반 무중단 배포 파이프라인 구축"
            ],
            metrics: [
                { label: "Cache Hit Rate", value: "94.6%" },
                { label: "p95 Latency", value: "< 38ms" },
                { label: "Auto-Scaling", value: "K8s HPA" },
                { label: "Availability", value: "99.9%" }
            ],
            link: "https://github.com/iamywl/ROMA"
        }
    ],

    awards: [
        {
            date: "2026.06.05",
            title: "Google AI Agent Challenge 2026 — 우수상 (2nd Place)",
            org: "소프트웨어교육원 주관 (제SEI-2026-086호)",
            badge: "🏆 2nd Place · 우수상",
            featured: true,
            desc: "자율형 AI Agent 아키텍처 설계, 멀티에이전트 협업 파이프라인 및 고신뢰성 도구 호출(Tool Calling) 자동화",
            metrics: "2위 입상 · Self-Healing Autonomous Pipeline"
        },
        {
            date: "2024.06.27",
            title: "한국정보과학회 우수논문상",
            org: "한국정보과학회",
            badge: "우수논문상",
            featured: false,
            desc: "eBPF 기반 컨테이너 런타임 침해 탐지 및 머신러닝 이상 징후 방어에 관한 연구 논문",
            metrics: "학술대회 최우수 연구 채택"
        },
        {
            date: "2024.07.31",
            title: "공공데이터 활용 창업경진대회 입상",
            org: "대구디지털혁신진흥원장",
            badge: "입상",
            featured: false,
            desc: "공공데이터 오픈 API 기반 대용량 트래픽 처리 시스템 설계 및 프로토타입 구현",
            metrics: "데이터 활용성 우수 평가"
        },
        {
            date: "2022.11.02",
            title: "전국 대학생 소셜벤처 콩쿠르 우수상",
            org: "사회적 경제 대학 협의회장",
            badge: "우수상",
            featured: false,
            desc: "사회적 가치 창출 플랫폼 아키텍처 및 분산 서버 인프라 설계",
            metrics: "전국 본선 우수상"
        },
        {
            date: "2021.11.20",
            title: "경북 과학 해커톤 대회 우수상",
            org: "경북테크노파크 원장",
            badge: "우수상",
            featured: false,
            desc: "제한된 시간 내 고성능 네트워크 백엔드 및 IoT 연동 시스템 개발",
            metrics: "해커톤 2위 입상"
        }
    ]
};