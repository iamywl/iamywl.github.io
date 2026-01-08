const resumeData = {
    profile: {
        name: "이용원 (iamywl)",
        education: "경북대학교 컴퓨터학부",
        title: "문제 해결을 즐기며 배포를 통해 가치를 증명하는 인프라 엔지니어",
        email: "your.email@example.com", 
        github: "iamywl",
        intro: " test
        
        "
    },
    techStack: [
        { name: "Kubernetes", img: "https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png" },
        { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Ansible", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg" },
        { name: "Jenkins", img: "https://www.jenkins.io/images/logos/jenkins/jenkins.png" },
        { name: "eBPF", img: "./ebpf-icon.svg" }, 
        { name: "Docker", img: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" }
    ],
    projects: [
        {
            title: "eBPF 기반 동적 컨테이너 보안 시스템 연구",
            period: "2024. 01 - 2024. 12",
            description: "국가보안연구소 협업: eBPF와 ML을 결합한 실시간 커널 이벤트 트레이싱 및 방어 엔진 개발",
            points: [
                "시스템 콜 인자 유사도 분석으로 Race Condition 탐지 F1-Score 99% 달성",
                "커널 레벨 탐지를 통해 strace 대비 낮은 오버헤드(10% 미만) 실현"
            ],
            link: "https://github.com/iamywl/ebpf_NSR.git"
        },
        {
            title: "ROMA: 기숙사 룸메이트 매칭 서비스 인프라",
            period: "2023. 07 - 2023. 12",
            description: "K3s와 Jenkins를 활용한 엣지 컴퓨팅 환경의 CI/CD 파이프라인 구축",
            points: [
                "IaC 기반 Ansible 자동화로 인스턴스 확장성 및 스케일 인/아웃 최적화",
                "K3s 도입으로 최소 리소스 환경에서 고가용성 클러스터 운영"
            ],
            link: "https://github.com/iamywl/ROMA"
        }
    ],
    awards: [
        { date: "2024.06.27", title: "우수논문상", org: "한국정보과학회" },
        { date: "2024.07.31", title: "대구광역시 공공데이터 활용 창업경진대회 입상", org: "대구디지털혁신진흥원장" },
        { date: "2022.11.20", title: "영남대학교 컨소시엄 창의적 종합 설계 경진대회 동상", org: "영남대학교 공학교육혁신센터" },
        { date: "2022.11.02", title: "2022 전국 대학생 소셜벤처 콩쿠르 우수상", org: "사회적 경제 대학 협의회장" },
        { date: "2022.10.19", title: "2022 DU Creative Festival 캡스톤디자인 금상", org: "대구대학교 총장" },
        { date: "2021.11.20", title: "더(The) 경북 더(more)과학 해커톤 대회 우수상", org: "경북테크노파크 원장" },
        { date: "2021.08.02", title: "DU 코딩 경진대회 우수상", org: "대구대학교 LINC+ 사업단장" },
        { date: "2016.10.21", title: "2016 추계학술대회 우수논문상", org: "한국멀티미디어학회" }
    ]
};
