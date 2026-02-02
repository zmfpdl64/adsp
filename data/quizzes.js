// ADSP 퀴즈 데이터 (기출 유형)
const quizzes = [
    // ===== 1과목: 데이터 이해 =====
    {
        id: 1,
        category: 'subject1',
        question: 'DIKW 피라미드에서 "데이터에 의미를 부여하여 가공한 것"에 해당하는 것은?',
        options: ['Data', 'Information', 'Knowledge', 'Wisdom'],
        correct: 1,
        explanation: 'Information(정보)은 데이터를 가공하여 의미를 부여한 것입니다. Data는 객관적 사실, Knowledge는 정보+경험, Wisdom은 지식+통찰입니다.'
    },
    {
        id: 2,
        category: 'subject1',
        question: '다음 중 비정형 데이터에 해당하지 않는 것은?',
        options: ['이미지 파일', 'XML 문서', '동영상 파일', '음성 파일'],
        correct: 1,
        explanation: 'XML은 반정형 데이터입니다. 고정된 스키마는 없지만 메타데이터(태그)를 포함합니다. 이미지, 동영상, 음성은 비정형 데이터입니다.'
    },
    {
        id: 3,
        category: 'subject1',
        question: '빅데이터의 3V 특성에 해당하지 않는 것은?',
        options: ['Volume(규모)', 'Velocity(속도)', 'Variety(다양성)', 'Validity(타당성)'],
        correct: 3,
        explanation: '빅데이터 3V는 Volume(규모), Velocity(속도), Variety(다양성)입니다. Validity는 3V에 포함되지 않으며, 5V에는 Veracity(정확성)와 Value(가치)가 추가됩니다.'
    },
    {
        id: 4,
        category: 'subject1',
        question: '데이터베이스의 특징 중 "여러 사용자가 동시에 이용할 수 있다"는 특징은?',
        options: ['통합 데이터', '저장 데이터', '공용 데이터', '운영 데이터'],
        correct: 2,
        explanation: '공용 데이터(Shared Data)는 여러 사용자가 동시에 공유하여 사용할 수 있는 특징입니다.'
    },
    {
        id: 5,
        category: 'subject1',
        question: '학습과 경험을 통해 개인에게 체화되어 겉으로 드러나지 않는 지식을 무엇이라 하는가?',
        options: ['형식지', '암묵지', '명시지', '절차지'],
        correct: 1,
        explanation: '암묵지(Tacit Knowledge)는 학습과 경험으로 체화되어 표현하기 어려운 지식입니다. 형식지(Explicit Knowledge)는 문서화 가능한 지식입니다.'
    },
    {
        id: 6,
        category: 'subject1',
        question: '데이터 사이언티스트에게 필요한 Soft Skill이 아닌 것은?',
        options: ['커뮤니케이션', '스토리텔링', '프로그래밍', '협업 능력'],
        correct: 2,
        explanation: '프로그래밍은 Hard Skill입니다. Soft Skill에는 커뮤니케이션, 스토리텔링, 협업 능력, 호기심 등이 포함됩니다.'
    },
    {
        id: 7,
        category: 'subject1',
        question: 'NoSQL 데이터베이스의 특징으로 옳지 않은 것은?',
        options: ['스키마가 유연하다', 'ACID 트랜잭션을 엄격히 준수한다', '수평적 확장이 용이하다', '비정형 데이터 저장에 적합하다'],
        correct: 1,
        explanation: 'NoSQL은 ACID보다 BASE(Basically Available, Soft state, Eventually consistent)를 따르며, 유연한 스키마와 수평적 확장이 특징입니다.'
    },
    {
        id: 8,
        category: 'subject1',
        question: 'Hadoop 에코시스템에서 분산 파일 시스템은?',
        options: ['MapReduce', 'HDFS', 'YARN', 'Spark'],
        correct: 1,
        explanation: 'HDFS(Hadoop Distributed File System)는 Hadoop의 분산 파일 시스템입니다. MapReduce는 분산 처리, YARN은 리소스 관리, Spark는 인메모리 처리 프레임워크입니다.'
    },

    // ===== 2과목: 데이터 분석 기획 =====
    {
        id: 9,
        category: 'subject2',
        question: 'CRISP-DM 방법론의 첫 번째 단계는?',
        options: ['데이터 이해', '업무 이해', '데이터 준비', '모델링'],
        correct: 1,
        explanation: 'CRISP-DM은 업무 이해 → 데이터 이해 → 데이터 준비 → 모델링 → 평가 → 전개 순서입니다. 업무 이해가 첫 번째입니다.'
    },
    {
        id: 10,
        category: 'subject2',
        question: 'KDD 프로세스의 순서로 올바른 것은?',
        options: [
            '선택 → 전처리 → 변환 → 마이닝 → 해석',
            '전처리 → 선택 → 변환 → 마이닝 → 해석',
            '선택 → 변환 → 전처리 → 마이닝 → 해석',
            '마이닝 → 선택 → 전처리 → 변환 → 해석'
        ],
        correct: 0,
        explanation: 'KDD(Knowledge Discovery in Database): 데이터 선택(Selection) → 전처리(Preprocessing) → 변환(Transformation) → 데이터마이닝(Data Mining) → 해석/평가(Interpretation)'
    },
    {
        id: 11,
        category: 'subject2',
        question: '분석 과제 발굴 방법 중 "전사 전략에서 출발하여 분석 과제를 도출하는 방식"은?',
        options: ['상향식(Bottom-Up)', '하향식(Top-Down)', '혼합식(Hybrid)', '탐색식(Exploration)'],
        correct: 1,
        explanation: '하향식(Top-Down)은 전략에서 시작하여 과제를 도출합니다. 상향식(Bottom-Up)은 현장 문제에서 시작합니다.'
    },
    {
        id: 12,
        category: 'subject2',
        question: '데이터 거버넌스의 구성요소가 아닌 것은?',
        options: ['원칙(Principle)', '조직(Organization)', '프로세스(Process)', '알고리즘(Algorithm)'],
        correct: 3,
        explanation: '데이터 거버넌스는 원칙(Principle), 조직(Organization), 프로세스(Process)로 구성됩니다. 알고리즘은 거버넌스 구성요소가 아닙니다.'
    },
    {
        id: 13,
        category: 'subject2',
        question: 'SAS사에서 개발한 데이터 마이닝 방법론으로 Sample, Explore, Modify, Model, Assess 단계로 구성된 것은?',
        options: ['CRISP-DM', 'KDD', 'SEMMA', 'PDCA'],
        correct: 2,
        explanation: 'SEMMA는 SAS사에서 개발한 방법론으로 Sample → Explore → Modify → Model → Assess 단계로 구성됩니다.'
    },
    {
        id: 14,
        category: 'subject2',
        question: '분석 조직 유형 중 "전사 차원의 분석 전문 조직이 모든 분석을 수행"하는 형태는?',
        options: ['집중형', '분산형', '혼합형', '네트워크형'],
        correct: 0,
        explanation: '집중형은 전사 분석 조직이 모든 과제를 수행합니다. 분산형은 부서별, 혼합형은 CoE + 부서 분석가 형태입니다.'
    },
    {
        id: 15,
        category: 'subject2',
        question: '분석 과제 우선순위 결정 시 고려하지 않아도 되는 요소는?',
        options: ['시급성', '난이도', '전략적 중요도', '분석가 개인 선호도'],
        correct: 3,
        explanation: '분석 과제 우선순위는 시급성, 난이도, 전략적 중요도, ROI 등 객관적 기준으로 평가해야 합니다. 개인 선호도는 기준이 아닙니다.'
    },
    {
        id: 16,
        category: 'subject2',
        question: '데이터 품질 기준에 해당하지 않는 것은?',
        options: ['정확성', '완전성', '일관성', '복잡성'],
        correct: 3,
        explanation: '데이터 품질 기준: 정확성(Accuracy), 완전성(Completeness), 일관성(Consistency), 적시성(Timeliness). 복잡성은 품질 기준이 아닙니다.'
    },

    // ===== 3과목: 데이터 분석 - 통계 =====
    {
        id: 17,
        category: 'subject3',
        question: '평균이 50, 표준편차가 10인 정규분포에서 약 68%의 데이터가 포함되는 범위는?',
        options: ['30~70', '40~60', '20~80', '35~65'],
        correct: 1,
        explanation: '정규분포에서 μ±1σ 범위에 약 68%의 데이터가 포함됩니다. 50±10 = 40~60'
    },
    {
        id: 18,
        category: 'subject3',
        question: '평균이 중앙값보다 큰 분포의 특징은?',
        options: ['좌우 대칭', '음의 왜도(왼쪽 꼬리)', '양의 왜도(오른쪽 꼬리)', '균일 분포'],
        correct: 2,
        explanation: '평균 > 중앙값이면 오른쪽으로 긴 꼬리를 가진 양의 왜도(positive skewness)입니다.'
    },
    {
        id: 19,
        category: 'subject3',
        question: '가설검정에서 "참인 귀무가설을 기각하는 오류"를 무엇이라 하는가?',
        options: ['제1종 오류', '제2종 오류', '표본오차', '측정오차'],
        correct: 0,
        explanation: '제1종 오류(α, Type I Error)는 참인 H₀를 기각하는 오류(False Positive)입니다. 제2종 오류(β)는 거짓인 H₀를 기각하지 못하는 오류입니다.'
    },
    {
        id: 20,
        category: 'subject3',
        question: 'p-value = 0.03일 때, 유의수준 α = 0.05에서의 결론은?',
        options: [
            '귀무가설을 채택한다',
            '귀무가설을 기각한다',
            '판단할 수 없다',
            '표본을 더 수집해야 한다'
        ],
        correct: 1,
        explanation: 'p-value(0.03) < α(0.05)이므로 귀무가설을 기각하고 대립가설을 채택합니다.'
    },
    {
        id: 21,
        category: 'subject3',
        question: '같은 학생들의 프로그램 참여 전후 점수를 비교하려 할 때 적합한 검정은?',
        options: ['독립표본 t-검정', '대응표본 t-검정', '단일표본 t-검정', '카이제곱 검정'],
        correct: 1,
        explanation: '같은 대상의 전후 비교는 대응표본 t-검정(Paired t-test)이 적합합니다.'
    },
    {
        id: 22,
        category: 'subject3',
        question: 'ANOVA 검정 결과 p < 0.05일 때, 다음 단계로 적절한 것은?',
        options: [
            '분석을 종료한다',
            '사후검정을 실시한다',
            't-검정을 실시한다',
            '표본을 더 수집한다'
        ],
        correct: 1,
        explanation: 'ANOVA가 유의하면 "적어도 하나의 집단이 다르다"는 것만 알 수 있습니다. 어떤 집단이 다른지 사후검정(Tukey, Bonferroni 등)으로 확인합니다.'
    },
    {
        id: 23,
        category: 'subject3',
        question: '상관계수 r = -0.8의 해석으로 올바른 것은?',
        options: [
            '약한 양의 상관관계',
            '강한 양의 상관관계',
            '약한 음의 상관관계',
            '강한 음의 상관관계'
        ],
        correct: 3,
        explanation: '|r| = 0.8 > 0.7이므로 강한 상관관계이고, r < 0이므로 음의 상관관계입니다. 한 변수가 증가하면 다른 변수는 감소하는 경향입니다.'
    },
    {
        id: 24,
        category: 'subject3',
        question: '회귀분석에서 R² = 0.75의 의미는?',
        options: [
            '상관계수가 0.75이다',
            '독립변수가 종속변수 변동의 75%를 설명한다',
            '예측 정확도가 75%이다',
            '오차가 25%이다'
        ],
        correct: 1,
        explanation: 'R²(결정계수)는 독립변수가 종속변수의 변동(분산)을 얼마나 설명하는지를 나타냅니다. 0.75면 75%를 설명합니다.'
    },
    {
        id: 25,
        category: 'subject3',
        question: '카이제곱 검정이 적합한 상황은?',
        options: [
            '두 연속형 변수의 관계 분석',
            '두 범주형 변수의 독립성 검정',
            '세 집단의 평균 비교',
            '전후 점수의 평균 비교'
        ],
        correct: 1,
        explanation: '카이제곱 검정은 두 범주형 변수 간의 독립성(연관성) 검정에 사용됩니다.'
    },
    {
        id: 26,
        category: 'subject3',
        question: '이항분포 B(100, 0.3)의 평균은?',
        options: ['30', '70', '21', '9'],
        correct: 0,
        explanation: '이항분포의 평균 = n × p = 100 × 0.3 = 30'
    },
    {
        id: 27,
        category: 'subject3',
        question: '중심극한정리에 대한 설명으로 옳은 것은?',
        options: [
            '모집단이 정규분포일 때만 적용된다',
            '표본 크기가 클수록 표본평균의 분포는 정규분포에 가까워진다',
            '표본 크기와 관계없이 항상 적용된다',
            '연속형 변수에만 적용된다'
        ],
        correct: 1,
        explanation: '중심극한정리: 모집단 분포와 관계없이 표본 크기가 충분히 크면(n≥30) 표본평균의 분포는 정규분포에 근사합니다.'
    },
    {
        id: 28,
        category: 'subject3',
        question: '독립표본 t-검정의 가정이 아닌 것은?',
        options: [
            '두 집단이 독립적이다',
            '데이터가 정규분포를 따른다',
            '두 집단의 분산이 같다',
            '표본 크기가 같아야 한다'
        ],
        correct: 3,
        explanation: '독립표본 t-검정의 가정: 독립성, 정규성, 등분산성. 표본 크기는 같지 않아도 됩니다.'
    },

    // ===== 3과목: 데이터 분석 - 마이닝 =====
    {
        id: 29,
        category: 'subject3',
        question: '지도학습(Supervised Learning)에 해당하는 것은?',
        options: ['군집분석', '연관규칙', '분류분석', '차원축소'],
        correct: 2,
        explanation: '지도학습은 정답(레이블)이 있는 데이터로 학습합니다. 분류와 회귀가 해당됩니다. 군집, 연관규칙, 차원축소는 비지도학습입니다.'
    },
    {
        id: 30,
        category: 'subject3',
        question: '의사결정나무의 분할 기준으로 CART 알고리즘이 사용하는 것은?',
        options: ['정보이득', '지니지수', '엔트로피', '분산'],
        correct: 1,
        explanation: 'CART(Classification And Regression Tree)는 지니지수(Gini Index)를 사용합니다. C4.5/C5.0은 정보이득(엔트로피 기반)을 사용합니다.'
    },
    {
        id: 31,
        category: 'subject3',
        question: '로지스틱 회귀에서 오즈비(Odds Ratio) = 2의 의미는?',
        options: [
            '성공 확률이 2배가 된다',
            '독립변수가 1 증가하면 성공의 오즈가 2배가 된다',
            '예측 정확도가 2배 증가한다',
            '회귀계수가 2이다'
        ],
        correct: 1,
        explanation: '오즈비(OR) = e^β로, OR=2는 X가 1 증가할 때 성공의 오즈(P/(1-P))가 2배가 됨을 의미합니다.'
    },
    {
        id: 32,
        category: 'subject3',
        question: 'K-평균 군집분석의 특징으로 옳지 않은 것은?',
        options: [
            '군집 수 K를 미리 지정해야 한다',
            '초기 중심점에 따라 결과가 달라질 수 있다',
            '계층적 구조를 파악할 수 있다',
            '이상치에 민감하다'
        ],
        correct: 2,
        explanation: 'K-평균은 비계층적 군집분석입니다. 계층적 구조는 계층적 군집분석(덴드로그램)에서 파악합니다.'
    },
    {
        id: 33,
        category: 'subject3',
        question: '연관규칙에서 "A를 구매한 거래 중 B도 구매한 거래의 비율"을 나타내는 것은?',
        options: ['지지도', '신뢰도', '향상도', '확신도'],
        correct: 1,
        explanation: '신뢰도(Confidence) = P(B|A) = P(A∩B)/P(A)로, A를 구매한 거래 중 B도 구매한 비율입니다.'
    },
    {
        id: 34,
        category: 'subject3',
        question: '연관규칙에서 향상도(Lift) = 1의 의미는?',
        options: [
            'A와 B는 양의 상관관계',
            'A와 B는 음의 상관관계',
            'A와 B는 독립',
            'A와 B는 완전 상관'
        ],
        correct: 2,
        explanation: '향상도 = P(B|A)/P(B)로, Lift=1이면 A 구매 여부가 B 구매에 영향을 주지 않음(독립)을 의미합니다.'
    },
    {
        id: 35,
        category: 'subject3',
        question: '분류 모델 평가에서 "실제 양성 중 모델이 양성으로 예측한 비율"은?',
        options: ['정확도', '정밀도', '재현율', 'F1-score'],
        correct: 2,
        explanation: '재현율(Recall, Sensitivity) = TP/(TP+FN)로, 실제 양성 중 올바르게 양성으로 예측한 비율입니다. 정밀도는 예측 양성 중 실제 양성 비율입니다.'
    },
    {
        id: 36,
        category: 'subject3',
        question: '과적합(Overfitting)에 대한 설명으로 옳은 것은?',
        options: [
            '학습 데이터와 테스트 데이터 모두 성능이 낮다',
            '학습 데이터 성능은 높지만 테스트 데이터 성능이 낮다',
            '학습 데이터 성능은 낮지만 테스트 데이터 성능이 높다',
            '모델이 너무 단순하다'
        ],
        correct: 1,
        explanation: '과적합은 모델이 학습 데이터에 너무 맞춰져서 학습 성능↑, 테스트 성능↓인 현상입니다. 과소적합은 둘 다 낮습니다.'
    },
    {
        id: 37,
        category: 'subject3',
        question: '의사결정나무에서 과적합을 방지하기 위한 기법은?',
        options: ['부스팅', '가지치기', '배깅', '스태킹'],
        correct: 1,
        explanation: '가지치기(Pruning)는 의사결정나무가 너무 복잡해지는 것을 방지합니다. 사전 가지치기(Pre-pruning)와 사후 가지치기(Post-pruning)가 있습니다.'
    },
    {
        id: 38,
        category: 'subject3',
        question: '혼동행렬(Confusion Matrix)에서 FP(False Positive)는?',
        options: [
            '실제 양성을 양성으로 예측',
            '실제 양성을 음성으로 예측',
            '실제 음성을 양성으로 예측',
            '실제 음성을 음성으로 예측'
        ],
        correct: 2,
        explanation: 'FP(False Positive, 위양성)는 실제로는 음성(Negative)인데 양성(Positive)으로 잘못 예측한 경우입니다.'
    },
    {
        id: 39,
        category: 'subject3',
        question: '클래스 불균형 문제 해결 방법이 아닌 것은?',
        options: ['오버샘플링', '언더샘플링', 'SMOTE', '표준화'],
        correct: 3,
        explanation: '표준화(Standardization)는 변수 스케일 조정이지 클래스 불균형 해결 방법이 아닙니다. 오버샘플링, 언더샘플링, SMOTE는 불균형 해결 기법입니다.'
    },
    {
        id: 40,
        category: 'subject3',
        question: 'K-Fold 교차검증에서 K=5일 때, 각 반복에서 학습에 사용되는 데이터 비율은?',
        options: ['20%', '40%', '60%', '80%'],
        correct: 3,
        explanation: 'K-Fold에서 데이터를 K등분하고, K-1개(4개)로 학습, 1개로 검증합니다. K=5면 80% 학습, 20% 검증입니다.'
    },

    // ===== 추가 문제 (전체 50문항 구성용) =====
    {
        id: 41,
        category: 'subject1',
        question: '데이터 웨어하우스의 특징이 아닌 것은?',
        options: ['주제지향성', '통합성', '시계열성', '실시간 변경'],
        correct: 3,
        explanation: '데이터 웨어하우스는 주제지향성, 통합성, 시계열성, 비휘발성이 특징입니다. 실시간 변경(휘발성)은 해당되지 않습니다.'
    },
    {
        id: 42,
        category: 'subject2',
        question: 'CRISP-DM의 6단계 중 "모델 성능을 평가하고 비즈니스 목표 달성 여부를 확인"하는 단계는?',
        options: ['모델링', '평가', '전개', '데이터 준비'],
        correct: 1,
        explanation: '평가(Evaluation) 단계에서 모델 성능을 평가하고 비즈니스 목표 달성 여부를 확인합니다.'
    },
    {
        id: 43,
        category: 'subject3',
        question: '나이브 베이즈 분류기의 가정은?',
        options: ['변수 간 선형 관계', '변수 간 조건부 독립', '정규분포 가정', '등분산 가정'],
        correct: 1,
        explanation: '나이브 베이즈는 특성 변수들이 클래스가 주어졌을 때 조건부 독립이라고 가정합니다.'
    },
    {
        id: 44,
        category: 'subject3',
        question: '회귀분석에서 다중공선성을 진단하는 지표는?',
        options: ['R²', 'VIF', 'AIC', 'F-통계량'],
        correct: 1,
        explanation: 'VIF(Variance Inflation Factor)가 10 이상이면 다중공선성이 심각한 것으로 판단합니다.'
    },
    {
        id: 45,
        category: 'subject3',
        question: 'AUC(Area Under ROC Curve)가 0.5라면 의미하는 것은?',
        options: ['완벽한 분류 모델', '무작위 추측 수준', '최악의 분류 모델', '데이터 오류'],
        correct: 1,
        explanation: 'AUC=0.5는 모델이 무작위 추측(동전 던지기)과 같은 수준임을 의미합니다. AUC=1은 완벽한 분류, AUC=0은 완전히 반대로 예측하는 것입니다.'
    },
    {
        id: 46,
        category: 'subject1',
        question: 'ETL의 의미로 올바른 것은?',
        options: [
            'Explore, Transform, Learn',
            'Extract, Transform, Load',
            'Evaluate, Test, Launch',
            'Encode, Train, Label'
        ],
        correct: 1,
        explanation: 'ETL은 Extract(추출), Transform(변환), Load(적재)의 약자로, 데이터 이동 및 변환 프로세스입니다.'
    },
    {
        id: 47,
        category: 'subject2',
        question: '분석 성숙도 모델에서 가장 높은 수준은?',
        options: ['도입', '활용', '확산', '최적화'],
        correct: 3,
        explanation: '분석 성숙도는 도입 → 활용 → 확산 → 최적화 순서로 발전합니다. 최적화 단계가 가장 높은 수준입니다.'
    },
    {
        id: 48,
        category: 'subject3',
        question: '앙상블 기법 중 "여러 모델의 예측을 평균 또는 투표로 결합"하는 방법은?',
        options: ['부스팅', '배깅', '스태킹', '드롭아웃'],
        correct: 1,
        explanation: '배깅(Bagging, Bootstrap Aggregating)은 여러 모델을 병렬로 학습하고 결과를 평균/투표로 결합합니다. 대표적으로 Random Forest가 있습니다.'
    },
    {
        id: 49,
        category: 'subject3',
        question: '시계열 데이터 분석에서 "추세, 계절성, 순환, 불규칙 요소"로 분해하는 것을 무엇이라 하는가?',
        options: ['차분', '자기상관', '시계열 분해', '이동평균'],
        correct: 2,
        explanation: '시계열 분해(Time Series Decomposition)는 추세(Trend), 계절성(Seasonal), 순환(Cyclic), 불규칙(Irregular) 요소로 분해합니다.'
    },
    {
        id: 50,
        category: 'subject3',
        question: '정밀도와 재현율의 조화평균은?',
        options: ['정확도', 'AUC', 'F1-score', 'ROC'],
        correct: 2,
        explanation: 'F1-score = 2 × (정밀도 × 재현율) / (정밀도 + 재현율)로, 정밀도와 재현율의 조화평균입니다.'
    }
];
