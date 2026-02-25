const resumeData = {
    profile: {
        name: "이용원 (iamywl)",
        keyword: "문제를 정의하고 기술로 해결하는 능동적인 인프라 엔지니어",
        title: "Infrastructure & Security Engineer",
        email: "yongdev1919@gmail.com",
        github: "iamywl",
        summary: "문제해결에 진심인 소프트웨어 인프라엔지어 입니다.",

        fullIntro: `컨테이너는 경량화된 가상화 기술로 각광받고 있지만, 시스템 콜을 통한 호스트 커널 접근이라는 보안 취약점을 안고 있습니다. 기존의 정적인 접근 방식(Seccomp 등)은 정상적인 서비스 동작을 방해하거나 잠재적 위협에 대응하기 어렵다는 한계가 있었습니다.
저는 이를 해결하기 위해 eBPF를 활용한 '동적 관측' 기법을 제안했습니다. 커널 내부의 시스템 콜과 메모리 할당 상태를 실시간으로 트레이싱하여, 기존 규칙 기반 탐지보다 월등한 성능을 입증했습니다. 특히 Python과 같은 고수준 언어를 연동하여 ML 기법을 커널 레벨에 적용하면서도 오버헤드를 10% 미만으로 유지하는 성과를 거두었습니다.
또한, 모든 인프라는 코드를 기반으로 자동화(IaC)되어야 한다고 믿습니다. 제한된 자원 환경에서도 K3s와 Ansible을 활용해 확장 가능한 구조를 설계하는 등, 비즈니스 상황에 맞는 최적의 인프라 솔루션을 찾아내는 것에 즐거움을 느낍니다.`
    },

    projects: [

        {
            title: "컨테이너 보안 기법 연구 (국가 보안 기술 연구소 연구과제)",
            period: "2024. 01 - 2024. 12",
            description: "eBPF를 활용하여 커널 이벤트를 실시간으로 관측하고 취약점을 방어하는 동적 탐지 엔진 개발",
            points: [
                "정적 보안(Seccomp)의 한계를 극복하기 위해 eBPF 기반 실시간 트리거링 탐지 기법 도입",
                "시스템 콜 인자 유사도 및 호출 빈도 분석을 통해 Race Condition 탐지 F1-Score 99% 달성",
                "Strace/Ptrace 대비 낮은 오버헤드(최대 10% 이내)로 실시간 ML 탐지 모델 적용 성공",
                "Python High-level 언어를 활용하여 복잡한 ML 로직을 커널 이벤트와 연동"
            ],
            link: "https://github.com/iamywl/ebpf_NSR.git"
        },

        {
            title: "ROMA: 기숙사 룸메이트 매칭 서비스 ",
            period: "2025. 07 - 2025. 12",
            description: "제한된 리소스 환경에서의 고가용성 인프라 구축 및 IaC 기반 자동화",
            points: [
                "AWS 비용 효율화를 위해 경량화된 K8s인 K3s를 도입하여 엣지 컴퓨팅 환경 최적화",
                "Ansible 기반의 IaC를 적용하여 인스턴스의 스케일 인/아웃이 용이한 자동화 구조 설계",
                "Jenkins를 활용한 CI/CD 파이프라인 구축으로 배포 프로세스 가속화",
                "모든 인프라 설정의 코드화를 통해 환경 복구 및 확장성 보장"
            ],
            link: "https://github.com/iamywl/ROMA"
        },
        {
            title: "기업용 MES 개발",
            period: "2026.01 - 2026.04",
            description: "제조 실행 시스템(MES) 개발 프로젝트(덱스위버 인턴과정)",
            points: [
                "AI Native MES 시스템의 핵심 기능인 생산 계획, 실시간 모니터링, 품질 관리 모듈 개발",
                "CI/CD 파이프라인 구축을 통한 빠른 배포 및 피드백 사이클 확보",
                "k8s 기반의 마이크로서비스 아키텍처 설계 및 구현",
                "Cillum을 활용한 시스템 성능 모니터링 및 최적화로 안정적인 서비스 운영 환경 구현",
            ],
            link: "https://github.com/iamywl/Mes_-DEXWEAVER"
        }
    ],
    awards: [
        { date: "2024.06.27", title: "우수논문상", org: "한국정보과학회" },
        { date: "2024.07.31", title: "공공데이터 활용 창업경진대회 입상", org: "대구디지털혁신진흥원장" },
        { date: "2022.11.20", title: "창의적 종합 설계 경진대회 동상", org: "영남대학교" },
        { date: "2022.11.02", title: "전국 대학생 소셜벤처 콩쿠르 우수상", org: "사회적 경제 대학 협의회장" },
        { date: "2022.10.19", title: "DU Creative Festival 금상", org: "대구대학교 총장" },
        { date: "2021.11.20", title: "경북 과학 해커톤 대회 우수상", org: "경북테크노파크 원장" }
    ],
    techStack: [
        { name: "Kubernetes", img: "https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png" },
        { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Ansible", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg" },
        { name: "Jenkins", img: "https://www.jenkins.io/images/logos/jenkins/jenkins.png" },
        { name: "eBPF", img: "./ebpf-icon.svg" },
        { name: "Docker", img: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" }
    ]
};
