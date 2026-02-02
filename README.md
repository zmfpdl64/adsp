분석 목적은 무엇인가?
│
├─ 1. 관계를 보고 싶은가?
│ │
│ ├─ 변수 2개
│ │ ├─ 둘 다 연속형(양적)
│ │ │ ├─ 선형 관계 → 상관분석(Pearson)
│ │ │ └─ 비선형/순위 → Spearman
│ │ │
│ │ ├─ 하나는 범주, 하나는 연속형
│ │ │ └─ 평균 차이 → t-test / ANOVA
│ │ │
│ │ └─ 둘 다 범주형
│ │ └─ 연관성 → 카이제곱 검정
│ │
│ └─ 변수 3개 이상
│ └─ 회귀분석 / 다변량 분석
│
├─ 2. 차이가 있는지 알고 싶은가?
│ │
│ ├─ 비교 대상 수는?
│ │ ├─ 1개 집단
│ │ │ └─ 기준값과 비교 → One-sample t-test
│ │ │
│ │ ├─ 2개 집단
│ │ │ ├─ 독립 → Two-sample t-test
│ │ │ └─ 대응 → Paired t-test
│ │ │
│ │ └─ 3개 이상 집단
│ │ └─ ANOVA
│ │
│ └─ 방향성이 있는가?
│ ├─ 있음 → less / greater (단측)
│ └─ 없음 → two-sided (양측)
│
├─ 3. 예측하고 싶은가?
│ │
│ ├─ 목표변수(Y)가 연속형
│ │ └─ 선형회귀 / 회귀모델
│ │
│ ├─ 목표변수(Y)가 범주형
│ │ └─ 로지스틱 회귀 / 분류모델
│ │
│ └─ 복잡한 패턴
│ └─ ML / DL
│
└─ 4. 분포나 특성을 알고 싶은가?
│
├─ 데이터 요약
│ └─ 평균, 중앙값, 분산
│
├─ 정규성 확인
│ └─ Shapiro-Wilk, QQ plot
│
└─ 이상치 확인
└─ IQR, boxplot

---

## 🚀 GitHub Pages 배포

### 배포 URL
**https://zmfpdl64.github.io/adsp/**

### 배포 방식
- **Branch 기반 배포** (gh-pages 브랜치 사용)
- 무료, 별도 설정 불필요

### GitHub Pages 설정 방법
1. https://github.com/zmfpdl64/adsp/settings/pages 접속
2. **Build and deployment** 섹션:
   - **Source**: `Deploy from a branch` 선택
   - **Branch**: `gh-pages` 선택, 폴더는 `/ (root)`
3. **Save** 클릭

### 코드 수정 후 재배포 방법
```bash
# 1. gh-pages 브랜치로 이동
git checkout gh-pages

# 2. main 브랜치의 최신 파일 가져오기
git checkout main -- .

# 3. 커밋 및 푸시
git add -A && git commit -m "Update" && git push

# 4. main 브랜치로 복귀
git checkout main
```

### 프로젝트 구조
```
├── index.html      # 메인 페이지
├── app.js          # 앱 로직
├── styles.css      # 스타일
├── data/
│   ├── concepts.js # 개념 데이터
│   └── quizzes.js  # 퀴즈 데이터
├── .gitignore      # Git 제외 파일
└── README.md       # 문서
```
