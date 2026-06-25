# iamywl.github.io — 디자인 & 개발 가이드

> 이용원(iamywl)의 **개인 포트폴리오/이력서** 단일 페이지.
> 직군: **Infrastructure & Security Engineer**.
> 톤은 상위 가이드(`디자인_애플_토스.md` 등)를 따르되, **이 프로젝트에 고정된 토큰·규칙은 본 문서가 최종 기준**이다.

---

## 0. 컨셉 (확정)

> **"색을 머금은 빛의 캔버스 위에, 유리 카드로 콘텐츠를 띄운다."**
> Apple visionOS의 frosted glass + Toss의 큰 숫자/친근한 카드 = **Glass Portfolio**.
> 평면 흰 카드를 흰 배경에 얹는 이전 버전은 폐기. **콘텐츠 카드 = 유리**가 이 사이트의 정체성이다.

⚠️ **상위 가이드의 "글래스는 떠 있는 레이어에만, 콘텐츠 카드는 평면" 규칙은 이 프로젝트에 한해 의도적으로 오버라이드**한다. 단, 그 대가로 **가독성 가드레일(§5)을 무조건 지킨다** — 유리는 멋이 아니라 가독성이 깨지면 실패다.

---

## 1. 구조 (단일 스크롤 문서)

1. **Sticky 글래스 헤더** — 이름(좌) + 액션(우), 스크롤해도 상단 고정
2. **Hero** — 직군 kicker · 이름(Display) · 한 줄 가치 제안 · 액션 2개
3. **Impact (Toss식 큰 숫자)** — 실데이터 기반 지표 4개 (F1 99% / 오버헤드 <10% / 수상 6 / 프로젝트 3+)
4. **About** — 유리 카드. lead 문장 + 정돈된 문단 (텍스트 벽 금지)
5. **Projects** — 유리 카드 리스트 (기간 chip · 설명 · 성과 bullet · repo 링크)
6. **Awards** — 유리 카드 리스트 (PC 2열 / 모바일 1열)
7. **Tech Stack** — 유리 타일 그리드
8. **Footer**

데이터는 `js/data.js`의 `resumeData`에서 렌더링. **콘텐츠 하드코딩 금지, data.js만 수정.**

---

## 2. 컬러 토큰 (`:root`)

```css
:root {
  --brand:        #2563EB;  /* white-on-brand ≥4.5:1 */
  --brand-strong: #1D4FD7;
  --brand-ink:    #1B4DD1;  /* text-on-glass 파랑 */
  --ink:    #0B1220;        /* 본문·타이틀 (더 진하게 — 유리 위 가독성) */
  --ink-2:  #45526B;        /* 보조 (meta 전용) */
  --ink-3:  #8A95A8;        /* 캡션 */
}
```
- 순흑·생 Tailwind 회색 금지. 본문은 항상 `--ink`(연회색 본문 금지 — 이전 실패 원인).

---

## 3. 배경 캔버스 (유리가 굴절할 "색")

유리 카드가 살려면 **뒤에 충분한 색**이 있어야 한다. 옅은 그라데이션은 실패.

```css
body{
  background:
    radial-gradient(60rem 48rem at 12% -8%, rgba(37,99,235,.20), transparent 55%),
    radial-gradient(52rem 40rem at 98% 2%,  rgba(99,102,241,.18), transparent 52%),
    radial-gradient(48rem 46rem at 50% 108%,rgba(56,189,248,.14), transparent 55%),
    #EAEFF7;
  background-attachment: fixed;   /* 스크롤 시 유리 뒤 색이 흐르게 */
}
```
저채도·밝게 유지(카드 위 텍스트 가독 우선). 색이 과하면 채도부터 낮춘다.

---

## 4. 유리 머티리얼 (콘텐츠 카드 핵심)

```css
.glass{
  background: rgba(255,255,255,.58);
  -webkit-backdrop-filter: saturate(180%) blur(24px);
  backdrop-filter: saturate(180%) blur(24px);
  border: 1px solid rgba(255,255,255,.65);
  border-radius: 20px;
  box-shadow: 0 10px 34px rgba(11,18,32,.10), inset 0 1px 0 rgba(255,255,255,.6);
}
.glass:hover{ transform: translateY(-2px); }   /* 그림자 키우지 말 것, 미세 상승만 */
```
- 상단 inset sheen 1px로 "유리 윗면 빛" 표현.
- 라운드 20px(카드) / 999px(pill·chip) / 14px(버튼).
- **폴백 필수:**
```css
@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){
  .glass{ background:#fff; }
}
@media (prefers-reduced-transparency: reduce){ .glass{ background:#fff; backdrop-filter:none; } }
```

---

## 5. 가독성 가드레일 (유리의 대가 — 절대 준수)

- **본문 색은 `--ink`(거의 검정에 가까운 잉크).** 유리 위 연회색 본문 금지.
- 본문 크기 **17px(1.0625rem)**, **행간 1.8**, **측정폭 max 62ch**(긴 줄 금지).
- About `fullIntro`는 렌더 시 **줄별 trim + 빈 줄로 문단 분리**(들여쓰기 잔재·텍스트 벽 제거).
- 카드 내부 패딩 **넉넉히**(24~28px). 유리는 얇으면 싸 보인다.
- 유리 위 텍스트/배경 대비 **≥ 4.5:1** 실측(흰 유리 0.58 + ink 0.0B → 충분). 색 블롭이 진한 영역과 겹치면 카드 흰 비율을 올린다.

---

## 6. 타이포그래피 (폰트 하나하나 — 정밀 스케일)

- **폰트:** Pretendard Variable (CDN). `font-family:"Pretendard Variable",Pretendard,-apple-system,system-ui,sans-serif;`
- 굵기 `400 / 600 / 700 / 800`만 (애매한 500 금지). 한 화면 크기 단계 ≤ 3.

| 역할 | size | weight | tracking | line-height |
|:--|:--|:--|:--|:--|
| Hero 이름 | `clamp(2.6rem,6.5vw,3.75rem)` | 800 | -0.03em | 1.08 |
| 한 줄 제안(hero sub) | `clamp(1.05rem,2.6vw,1.3rem)` | 600 | -0.01em | 1.5 |
| 섹션 eyebrow | `0.8125rem` | 700 | 0.14em(uppercase) | — |
| 큰 숫자(Impact) | `clamp(1.9rem,5vw,2.6rem)` | 800 | -0.02em | 1 |
| 카드 제목 | `1.3rem` | 700 | -0.01em | 1.3 |
| About lead | `clamp(1.2rem,3vw,1.45rem)` | 700 | -0.01em | 1.5 |
| 본문 | `1.0625rem` | 400 | -0.003em | 1.8 |
| 캡션·chip | `0.8125rem` | 600 | 0 | 1.4 |

- 한글 본문은 자간 살짝 음수(-0.003em)가 또렷. 숫자/영문 강조엔 `--brand-ink`.

---

## 7. 모션 (토스식 촉감)

- 눌림 `:active{ transform:scale(.97) }` + `cubic-bezier(.2,.8,.2,1)`.
- 카드 hover: 미세 상승만(그림자 폭증 금지).
- 스크롤 진입 fade/rise 1회(IntersectionObserver), `prefers-reduced-motion` 존중.
- 이메일 복사 → 친근한 토스트("이메일을 복사했어요 ✓").

---

## 8. 반응형

- viewport `width=device-width, initial-scale=1`. 컨테이너 max **720~760px** 중앙.
- 모바일(≤767px): 좌우 패딩 20px, Impact 2열, Awards 1열, Primary 버튼 풀폭 52px, 가로 overflow 0.
- `background-attachment:fixed`가 모바일서 버벅이면 해당 분기서 `scroll`로.

---

## 9. 개발/검수

- 정적 사이트. `index.html` + `js/data.js` + Pretendard/Tailwind CDN. data.js 수정 시 `?v=` 올림.
- **출고 전 필수:** 헤드리스 Chrome으로 PC(1280)·모바일(390) 캡처해서 **눈으로** 유리감·가독성 확인. overflow=0은 증거 아님.
- 배포 `deploy.sh`(`__DEPLOY_TIMESTAMP__` 플레이스홀더 유지).

> 한 줄 요약: **색 머금은 캔버스 + 유리 카드 + 진한 잉크 본문(17px/1.8/62ch) + 큰 숫자 + 토스식 촉감. 유리 쓰되 가독성 가드레일은 절대 사수.**
