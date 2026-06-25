# iamywl.github.io — 디자인 & 개발 가이드

> 이용원(iamywl)의 **개인 포트폴리오/이력서** 단일 페이지.
> 직군: **Infrastructure & Security Engineer**.
> 톤은 상위 가이드(`디자인_애플_토스.md`, `디자인_PC.md`, `디자인_모바일.md`)를 따르되, **이 프로젝트에 고정된 토큰·규칙은 본 문서가 최종 기준**이다.

---

## 0. 한 줄 컨셉

> **"애플처럼 절제되게, 토스처럼 친근하게."**
> 콘텐츠(경력·프로젝트·수상)가 주인공. UI는 무대일 뿐. 위계는 **색이 아니라 크기·굵기·여백**으로 만든다.

---

## 1. 구조 (단일 스크롤 문서)

이 사이트는 사이드바/대시보드가 아니라 **세로 스크롤 문서**다. 모바일은 PC의 축소판이어도 무방한 유일한 예외(문서형) — 단 풀폭·패딩·스택 규칙은 지킨다.

섹션 순서:
1. **Hero** — 이름(Display), 직함, 키워드 pill, 연락 액션(이메일 복사 / GitHub)
2. **About** — summary/intro를 큰 진술문으로 (어두운 그라데이션 박스 ❌)
3. **Projects** — 카드 리스트 (기간 chip · 설명 · 성과 bullet · repo 링크)
4. **Awards** — 깔끔한 리스트 (PC 2열 / 모바일 1열)
5. **Tech Stack** — 로고 그리드 (평면 카드)
6. **Footer** — 배포 타임스탬프

데이터는 `js/data.js`의 `resumeData`에서 렌더링한다. **콘텐츠는 코드에 하드코딩하지 말고 data.js만 수정**한다.

---

## 2. 컬러 토큰 (CSS 변수, `:root`에 정의)

보안/인프라 = **신뢰감 블루**. 포인트 컬러는 **단 하나**, "의미 있는 순간"(Primary CTA·강조 숫자·섹션 라벨)에만.

```css
:root {
  /* Brand (single accent) */
  --brand:        #2563EB;   /* 흰 배경 위 white 텍스트 버튼용 (white-on-brand ≥4.5:1) */
  --brand-strong: #1D4FD7;   /* hover / pressed */
  --brand-ink:    #1B4DD1;   /* 흰 배경 위 '텍스트로서의 파랑' (text-on-white ≥4.5:1) */
  --brand-tint:   #EAF1FE;   /* pill·chip 배경 (연한 brand-hue) */

  /* Ink (blue-tinted neutrals — 순흑 금지) */
  --ink:    #0E1726;   /* 본문·타이틀 */
  --ink-2:  #51607A;   /* 보조 텍스트 */
  --ink-3:  #98A2B3;   /* 캡션·플레이스홀더 */

  /* Surface */
  --bg:      #F6F8FB;  /* 페이지 배경 */
  --surface: #FFFFFF;  /* 카드 */
  --line:    #ECEFF4;  /* 미세 구분선 (테두리는 최소한) */
}
```

규칙:
- **순흑(#000)·생 회색(Tailwind slate-*) 금지.** 위 변수만 사용.
- 텍스트로 파랑을 쓸 땐 `--brand-ink`(대비 확보), 채워진 버튼은 `--brand` + white.
- 회색은 **3단계까지만**(ink / ink-2 / ink-3). 더 필요하면 회색을 쪼개지 말고 **타이포 크기**로 해결.

---

## 3. 타이포그래피

- **폰트:** Pretendard (CDN). `font-family: Pretendard, -apple-system, system-ui, sans-serif;`
- 크기 단계는 한 화면에 **최대 3단계**. 굵기는 `400 / 600 / 700+`만 (애매한 `500` 금지).

| 역할 | size | weight |
|:--|:--|:--|
| Hero 이름 | `clamp(2.4rem, 6vw, 3.5rem)` | 800 |
| 섹션 제목 | `1.5rem` | 700 |
| 카드 제목 | `1.25rem` | 700 |
| 본문 | `1rem`(16px) / line-height 1.65 | 400 |
| 캡션·라벨 | `0.8125rem`(13px) | 600 |

- 섹션 라벨(예 "PROJECTS")은 작은 대문자 + `letter-spacing` + `--brand-ink` 색으로 절제되게.

---

## 4. 여백 · 표면 · 그림자 (4px 베이스)

- 컴포넌트 내부 패딩: `16 / 20 / 24`. 섹션 간 간격: `48 / 64 / 80`.
- **평면 = 그림자 ❌.** 카드는 `--surface` + `1px solid --line` 또는 미세 배경차로만 구분.
- **그림자는 떠 있는 레이어에만**(토스트·드롭다운 등). 본 페이지엔 떠 있는 요소가 거의 없으니 그림자 거의 0.
- 라운드: 카드 `16px`, 버튼 `12px`, pill `999px`.
- 배경에 **은은한 brand-hue 그라데이션**(저채도, radial)로 글래스/생기 부여하되 가독성 유지.

---

## 5. 모션 · 인터랙션 (토스식 촉감)

- 눌리는 모든 요소: `:active { transform: scale(0.97); }` + `transition: transform .15s cubic-bezier(.2,.8,.2,1)`.
- 카드 hover: 그림자 대신 **미세 상승**(`translateY(-2px)`) 또는 테두리 색 강조 정도로 절제.
- 스크롤 진입 시 섹션 **은은한 fade/rise**(IntersectionObserver, 1회, `prefers-reduced-motion` 존중).
- 이메일 버튼 → 클립보드 복사 + **친근한 토스트**("이메일을 복사했어요" 같은 사용자 관점 어조).

---

## 6. 반응형

- `<meta viewport width=device-width, initial-scale=1>` (이미 있음, 유지).
- 컨테이너 최대 폭 **≈ 760px** 중앙 정렬. PC는 좌우 여백 위계.
- 모바일(≤767px): 풀폭 + 좌우 패딩 **20px**, 그리드 스택(Tech 3열→ 모바일도 3열 유지 가능 / Awards 2열→1열), Primary 버튼 풀폭 **52px**.
- 가로 overflow **0** (잘라서 0 만들지 말 것). 390×844 기준, 360px에서도 안 깨지게.

---

## 7. 접근성 체크 (출고 전)

- [ ] 모든 텍스트/배경 대비 **≥ 4.5:1** (특히 brand 위 white, white 위 brand-ink).
- [ ] 탭 타깃 ≥ 44px (주요 액션 52px).
- [ ] `prefers-reduced-motion`·`prefers-reduced-transparency` 폴백.
- [ ] 키보드 포커스 링 보임(`:focus-visible`).
- [ ] 이미지 로고 `alt` / 로드 실패 폴백.

---

## 8. 개발 메모

- 정적 사이트(빌드 없음). `index.html` + `js/data.js` + Tailwind CDN + Pretendard CDN.
- Tailwind는 유틸리티로 쓰되 **색은 위 CSS 변수**를 통해서만(임의 `slate-*`/`blue-*` 클래스 금지). 필요시 `<style>`에 컴포넌트 클래스 정의.
- 캐시 버스팅: data.js 수정 시 `?v=` 숫자 올리기.
- 배포는 `deploy.sh` (기존 워크플로 유지).

> 한 줄 요약: **블루 단일 포인트 · hue 섞인 잉크 · 평면엔 그림자 0 · 위계는 여백/타이포 · 토스식 촉감 · 760px 문서 레이아웃.**
