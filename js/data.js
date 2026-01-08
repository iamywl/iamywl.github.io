const profile = {
    name: "이용원 (iamywl)",
    title: "문제 해결을 즐기며 배포를 통해 가치를 증명하는 인프라 엔지니어",
    email: "yongdev@gmail.com",
    github: "iamywl",
    intro: "eBPF 기술을 활용해 컨테이너 보안 탐지 성능을 F1-Score 99%까지 끌어올린 경험이 있습니다. '정적인 한계를 동적인 기술로 해결'하는 과정에 매력을 느끼며, K3s와 Ansible을 활용한 인프라 자동화에 능숙합니다."
};

const techStack = [
    { name: "Kubernetes", img: "https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png" },
    { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Ansible", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg" },
    { name: "Jenkins", img: "https://www.jenkins.io/images/logos/jenkins/jenkins.png" },
    { name: "eBPF", img: "./ebpf-icon.svg" },
    { name: "Docker", img: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" }
];

const projects = [
    {
        title: "eBPF 기반 동적 컨테이너 보안 시스템 연구",
        period: "2024. 01 - 2024. 12",
        description: "국가보안연구소 협업: eBPF와 ML을 결합한 실시간 커널 이벤트 트레이싱 및 방어 엔진 개발",
        points: ["F1-Score 99% 달성", "오버헤드 10% 미만 실현"],
        link: "https://github.com/iamywl/ebpf_NSR.git"
    },
    {
        title: "ROMA: 기숙사 룸메이트 매칭 서비스 인프라",
        period: "2023. 07 - 2023. 12",
        description: "K3s와 Jenkins를 활용한 CI/CD 파이프라인 구축",
        points: ["Ansible 자동화", "고가용성 클러스터 운영"],
        link: "https://github.com/iamywl/ROMA"
    }
];

const awards = [
    { date: "2024.07.31", title: "공공데이터 창업경진대회 입상", org: "대구디지털혁신진흥원" },
    { date: "2022.11.20", title: "창의적 종합 설계 경진대회 동상", org: "영남대학교" },
    { date: "2022.10.19", title: "캡스톤디자인 금상", org: "대구대학교" }
];
