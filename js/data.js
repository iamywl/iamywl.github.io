var resumeData = {
    profile: {
        name: "iamywl",
        realName: "이용원",
        status: "System Operational · Ready to Deploy",
        keyword: "Linux Kernel 6.x & eBPF · Kubernetes Multi-Cluster · Cloud Native & DevSecOps",
        title: "Infrastructure & Security Architect",
        email: "yongdev1919@gmail.com",
        github: "iamywl",
        summary: "Linux Kernel과 eBPF 기반의 저지연 런타임 보안 관측 및 클라우드 네이티브 멀티클러스터 인프라 자동화를 연구합니다.",
        fullIntro: `
        컨테이너와 클라우드 네이티브 환경은 빠른 개발 및 확장성을 제공하지만, 공유 커널 구조로 인한 런타임 위협과 시스템 오버헤드라는 근본적인 과제를 안고 있습니다. 기존의 규칙 기반 정적 도구(Seccomp 등)는 정상적인 서비스 동작을 제약하거나 잠재적 위협에 기민하게 대응하기 어렵습니다.
        저는 이를 해결하기 위해 Linux Kernel 6.x와 eBPF를 활용한 초저지연 '동적 런타임 관측 및 방어' 파이프라인을 구축했습니다. 커널 내부의 시스템 콜과 메모리 상태를 실시간으로 트레이싱하여, 1.8% 미만의 CPU 오버헤드로 99% F1-Score의 공격 탐지를 입증했습니다.
        또한, 모든 인프라는 완전한 코드 기반(IaC)으로 선언되고 자동 검증되어야 한다고 믿습니다. Apple Silicon 환경에서의 Tart VM 기반 멀티클러스터 K8s 오케스트레이션부터 GitOps 기반 DevSecOps 파이프라인까지, 복잡한 시스템 엔지니어링 문제를 단단하고 우아하게 풀어냅니다.`
    },

    stats: [
        { value: "99%", label: "Race Condition 탐지 F1-Score" },
        { value: "<10%", label: "eBPF 실시간 탐지 오버헤드" },
        { value: "5", label: "공식 수상 & 우수논문" },
        { value: "< 1.2μs", label: "Kernel Hook Latency" }
    ],

    projects: [
        {
            title: "ebpf_NSR · eBPF & ML Kernel Defense",
            period: "2024.01 - 2024.12",
            badge: "Kernel Security",
            description: "국가보안기술연구소 연구과제: eBPF 기반 커널 런타임 침해 탐지 및 머신러닝 방어 엔진",
            points: [
                "Linux Kernel eBPF(kprobe/sys_enter) 기반 무복사(Zero-Copy) 링버퍼 이벤트 스트리밍 파이프라인 구축",
                "시스템 콜 유사도 및 호출 빈도 분석으로 컨테이너 Race Condition 및 Breakout 탐지 F1-Score 99% 달성",
                "Strace/Ptrace 대비 획기적으로 낮은 오버헤드(CPU 1.8% 이내)로 실시간 ML 이상 징후 추론 성공",
                "Kernel Hook 실행 지연시간 < 1.2μs 보증 및 100,000+ SYN/s 대규모 패킷 공격 포화 방어 검증"
            ],
            link: "https://github.com/iamywl/ebpf_NSR"
        },
        {
            title: "service_infra · Tart VM Multi-Cluster K8s",
            period: "2026.03 - 2026.06",
            badge: "Cloud Native",
            description: "macOS 하이퍼바이저 기반 4-Node 프로덕션급 멀티클러스터 쿠버네티스 인프라",
            points: [
                "Apple Virtualization.framework(Tart) 기반 4-Node ARM64 가상화 클러스터(1 Control Plane + 3 Workers) 구축",
                "Cilium eBPF CNI + MetalLB L2 로드밸런싱 + Istio 서비스 메시 연동 7계층 아키텍처 설계",
                "ArgoCD GitOps 엔진을 통한 프로그레시브 카나리 무중단 롤링 업데이트 및 99.9% 가용성 SLA 달성",
                "Prometheus & Grafana 기반 런타임 텔레메트리 관제 및 장애 자동 복구 체계 구축"
            ],
            link: "https://github.com/iamywl/service_infra"
        },
        {
            title: "IaC_apple_sillicon · Apple Silicon Native K8s IaC",
            period: "2026.03 - 2026.06",
            badge: "IaC Platform",
            description: "맥북 환경에서 엔터프라이즈 멀티클러스터 K8s를 단일 스크립트로 전자동 프로비저닝하는 IaC",
            points: [
                "100% 선언적 Terraform 모듈 + Ansible 플레이북으로 Tart VM 생애주기 전자동화 (42초 이내 프로비저닝)",
                "수작업 1~2시간 소요되던 4개 독립 클러스터 구성을 단일 ./demo.sh 명령어로 15분 만에 오차 없이 배포",
                "VirtIO-net 및 VirtIO-blk 가속 패치를 적용한 커스텀 초경량 ARM64 Linux 커널 이미지 빌드 파이프라인 통합",
                "Tart DHCP IP 변동 시 API 서버 인증서·kubelet·CNI 자동 갱신 무중단 재부팅 지원 및 SRE 대시보드 제공"
            ],
            link: "https://github.com/iamywl/IaC_apple_sillicon"
        },
        {
            title: "devsecops · 4-Cluster Homelab & GitOps Platform",
            period: "2025.10 - 2026.02",
            badge: "DevSecOps",
            description: "Dev → Staging → Prod → Ops 4중 격리 토폴로지 기반 엔터프라이즈 DevSecOps 플랫폼",
            points: [
                "CI/CD 파이프라인 내 Trivy 정적 취약점 스캐닝 및 Cosign 이미지 서명 검증을 통한 Shift-Left 보안 게이팅",
                "Falco 런타임 커널 에이전트를 통한 비인가 시스템 콜 실시간 모니터링 (< 500ms 경보 디스패치)",
                "Kyverno Admission Controller 기반 비루트(Non-root) 컨테이너 실행 및 최소 권한 RBAC 강제",
                "Sealed Secrets 및 HashiCorp Vault 연동을 통한 분산 시크릿 암호화 관리"
            ],
            link: "https://github.com/iamywl/devsecops"
        },
        {
            title: "Middleware_Hello · High-Concurrency Linux WAS",
            period: "2025.03 - 2025.08",
            badge: "Systems & WAS",
            description: "Linux epoll Reactor 패턴 기반 비동기 논블로킹 고성능 웹 애플리케이션 서버",
            points: [
                "기존 Thread-per-Connection 방식의 한계를 극복하기 위해 Edge-Triggered epoll 이벤트 루프 자체 구현",
                "10,000+ 동시 연결(C10K) 부하 상황에서도 Sub-5ms p99 응답 지연시간 유지 및 메모리 풋프린트 최소화",
                "논블로킹 소켓 링버퍼 할당자 및 Zero-Copy 패킷 디스패칭 구조를 통한 CPU 컨텍스트 스위칭 오버헤드 제거",
                "POSIX 소켓 및 HTTP/1.1 규격 완벽 준수 커스텀 네트워크 엔진 개발"
            ],
            link: "https://github.com/iamywl/Middleware_Hello"
        },
        {
            title: "ROMA · Scalable Roommate Matching Backend",
            period: "2025.07 - 2025.12",
            badge: "Distributed Backend",
            description: "대규모 트래픽 처리를 위한 마이크로서비스 아키텍처 및 분산 캐싱 백엔드",
            points: [
                "Kubernetes HPA 기반 트래픽 급증 시 포드 자동 스케일아웃 아키텍처 설계",
                "Redis 다계층 분산 캐싱 전략 도입으로 RDBMS 읽기 부하 분산 및 캐시 히트율 94%+ 달성",
                "지리정보 및 성향 매칭 알고리즘 쿼리 튜닝으로 p95 응답 지연시간 38ms 이하 달성",
                "Jenkins & ArgoCD 기반 무중단 배포 파이프라인 구축"
            ],
            link: "https://github.com/iamywl/ROMA"
        }
    ],

    awards: [
        {
            date: "2026.06.05",
            title: "Google AI Agent Challenge 우수상 (2nd Place)",
            org: "경북대학교 소프트웨어교육원 (제SEI-2026-086호)",
            badge: "🏆 2nd Place · 우수상",
            featured: true,
            desc: "자율형 AI Agent 아키텍처 설계, 멀티에이전트 협업 파이프라인 및 고신뢰성 도구 호출 자동화"
        },
        { date: "2024.06.27", title: "우수논문상", org: "한국정보과학회", badge: "우수논문" },
        { date: "2024.07.31", title: "공공데이터 활용 창업경진대회 입상", org: "대구디지털혁신진흥원장", badge: "입상" },
        { date: "2022.11.02", title: "전국 대학생 소셜벤처 콩쿠르 우수상", org: "사회적 경제 대학 협의회장", badge: "우수상" },
        { date: "2021.11.20", title: "경북 과학 해커톤 대회 우수상", org: "경북테크노파크 원장", badge: "우수상" }
    ],

    techCategories: [
        {
            category: "Kernel & Systems",
            icon: "fas fa-microchip",
            skills: ["Linux Kernel 6.x", "eBPF (BCC / libbpf)", "C / C++", "Go", "epoll WAS", "VirtIO"]
        },
        {
            category: "Cloud Native & K8s",
            icon: "fas fa-cloud",
            skills: ["Kubernetes", "Tart VM (ARM64)", "ArgoCD (GitOps)", "Cilium CNI", "MetalLB", "Istio"]
        },
        {
            category: "SecOps & IaC",
            icon: "fas fa-shield-halved",
            skills: ["Terraform", "Ansible", "Trivy CVE Gating", "Falco Runtime", "Kyverno", "HashiCorp Vault"]
        },
        {
            category: "Observability & Infra",
            icon: "fas fa-chart-line",
            skills: ["Prometheus", "Grafana", "Docker", "AWS", "Redis", "PostgreSQL"]
        }
    ],

    techStack: [
        { name: "Kubernetes", img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
        { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Ansible", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg" },
        { name: "Jenkins", img: "https://www.jenkins.io/images/logos/jenkins/jenkins.png" },
        { name: "eBPF", img: "images/ebpf-icon.png" },
        { name: "Docker", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" }
    ]
};