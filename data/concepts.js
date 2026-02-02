// ADSP 개념 데이터
const concepts = [
    // ===== 1과목: 데이터 이해 =====
    {
        id: 'data-understanding',
        title: '데이터와 정보',
        category: 'subject1',
        categoryName: '1과목: 데이터 이해',
        summary: 'DIKW 피라미드와 데이터의 유형을 이해합니다.',
        content: {
            definition: '데이터는 객관적 사실(fact)의 나열이며, 정보는 데이터를 가공하여 의미를 부여한 것입니다. DIKW 피라미드는 데이터→정보→지식→지혜의 계층 구조를 나타냅니다.',
            whenToUse: [
                '데이터의 정의와 특성을 이해할 때',
                'DIKW 피라미드의 각 계층을 구분할 때',
                '데이터 유형(정형/반정형/비정형)을 분류할 때'
            ],
            formula: 'DIKW 피라미드:\n• Data(데이터): 객관적 사실\n• Information(정보): 데이터 + 의미\n• Knowledge(지식): 정보 + 경험\n• Wisdom(지혜): 지식 + 통찰',
            interpretation: [
                '정형 데이터: 고정된 필드에 저장된 데이터 (RDBMS, 스프레드시트)',
                '반정형 데이터: 고정된 스키마는 없지만 메타데이터 포함 (XML, JSON, HTML)',
                '비정형 데이터: 정해진 규칙 없음 (텍스트, 이미지, 동영상)',
                '암묵지: 학습과 경험으로 체화된 지식',
                '형식지: 문서나 매뉴얼로 표현 가능한 지식'
            ],
            example: '예시: 매장 판매 기록(데이터) → 월별 매출 현황(정보) → 계절별 판매 패턴 파악(지식) → 최적의 재고 관리 전략(지혜)',
            caution: [
                '데이터 자체는 가치가 없고, 분석을 통해 가치가 창출됨',
                '빅데이터 시대에는 비정형 데이터의 비중이 80% 이상',
                '암묵지를 형식지로 전환하는 것이 지식경영의 핵심'
            ]
        }
    },
    {
        id: 'database-concept',
        title: '데이터베이스의 정의와 특징',
        category: 'subject1',
        categoryName: '1과목: 데이터 이해',
        summary: '데이터베이스의 정의, 특징, DBMS의 기능을 학습합니다.',
        content: {
            definition: '데이터베이스(DB)는 여러 사람이 공유하여 사용할 목적으로 통합하여 관리되는 데이터의 집합입니다.',
            whenToUse: [
                '데이터베이스의 특징을 설명할 때',
                'DBMS의 기능을 이해할 때',
                '데이터베이스 설계 원칙을 적용할 때'
            ],
            formula: '데이터베이스의 4가지 특징:\n1. 통합된 데이터 (Integrated)\n2. 저장된 데이터 (Stored)\n3. 공용 데이터 (Shared)\n4. 운영 데이터 (Operational)',
            interpretation: [
                '실시간 접근성: 질의에 대한 즉시 응답',
                '계속적인 변화: 삽입, 삭제, 갱신으로 항상 최신 상태 유지',
                '동시 공유: 여러 사용자가 동시에 접근 가능',
                '내용에 의한 참조: 위치가 아닌 데이터 값으로 참조'
            ],
            example: 'DBMS 종류: Oracle, MySQL, PostgreSQL, MongoDB, Redis 등',
            caution: [
                'DBMS는 데이터의 독립성, 무결성, 보안성을 보장',
                '관계형 DB(RDBMS)와 NoSQL의 차이점 이해 필요',
                '트랜잭션의 ACID 특성: 원자성, 일관성, 고립성, 지속성'
            ]
        }
    },
    {
        id: 'bigdata-concept',
        title: '빅데이터의 이해',
        category: 'subject1',
        categoryName: '1과목: 데이터 이해',
        summary: '빅데이터의 정의, 특성(3V~5V), 활용 사례를 학습합니다.',
        content: {
            definition: '빅데이터는 기존 데이터베이스 관리도구의 능력을 넘어서는 대량의 정형 또는 비정형 데이터로부터 가치를 추출하고 결과를 분석하는 기술입니다.',
            whenToUse: [
                '빅데이터의 특성(3V, 5V)을 설명할 때',
                '빅데이터 플랫폼 구성요소를 이해할 때',
                '빅데이터 분석 방법론을 적용할 때'
            ],
            formula: '빅데이터 3V (→ 5V):\n• Volume (규모): 데이터의 양\n• Velocity (속도): 데이터 생성/처리 속도\n• Variety (다양성): 데이터 형태의 다양성\n• Veracity (정확성): 데이터 품질\n• Value (가치): 비즈니스 가치',
            interpretation: [
                '데이터 사이언티스트: 빅데이터 분석 전문가',
                'Hadoop: 분산 컴퓨팅 프레임워크 (HDFS + MapReduce)',
                'Spark: 인메모리 기반 빅데이터 처리 프레임워크',
                'NoSQL: 비관계형 데이터베이스 (MongoDB, Cassandra 등)'
            ],
            example: '빅데이터 활용: 넷플릭스 추천 시스템, 신용카드 사기 탐지, 실시간 교통 정보, 질병 예측 등',
            caution: [
                '빅데이터 위기 요인: 사생활 침해, 책임 원칙 훼손, 데이터 오용',
                '빅데이터 분석의 한계: 상관관계 ≠ 인과관계',
                '데이터 거버넌스와 품질 관리의 중요성'
            ]
        }
    },
    {
        id: 'data-scientist',
        title: '데이터 사이언스와 데이터 사이언티스트',
        category: 'subject1',
        categoryName: '1과목: 데이터 이해',
        summary: '데이터 사이언티스트의 역할과 필요 역량을 학습합니다.',
        content: {
            definition: '데이터 사이언티스트는 다양한 데이터를 분석하여 비즈니스 인사이트를 도출하고 의사결정을 지원하는 전문가입니다.',
            whenToUse: [
                '데이터 사이언티스트의 역할을 이해할 때',
                '필요 역량(Hard/Soft Skill)을 파악할 때',
                '데이터 분석 조직 구성을 고려할 때'
            ],
            formula: '데이터 사이언티스트 역량:\n• Hard Skill: 통계학, 프로그래밍, 도메인 지식\n• Soft Skill: 커뮤니케이션, 스토리텔링, 협업 능력\n• 분석적 사고력, 호기심, 창의성',
            interpretation: [
                'IT + 비즈니스 + 분석 능력의 융합',
                '데이터에서 숨겨진 패턴과 인사이트 발견',
                '분석 결과를 비즈니스 의사결정에 연결',
                '데이터 기반 문화 조성에 기여'
            ],
            example: '역할: 데이터 수집/정제 → 탐색적 분석 → 모델링 → 결과 해석 → 비즈니스 적용 → 피드백',
            caution: [
                '기술적 역량만으로는 부족, 비즈니스 이해 필수',
                '분석 결과의 해석과 커뮤니케이션 능력 중요',
                '지속적인 학습과 새로운 기술 습득 필요'
            ]
        }
    },

    // ===== 2과목: 데이터 분석 기획 =====
    {
        id: 'analysis-methodology',
        title: '분석 방법론 (KDD, CRISP-DM, SEMMA)',
        category: 'subject2',
        categoryName: '2과목: 데이터 분석 기획',
        summary: '데이터 분석의 표준 방법론들을 비교 학습합니다.',
        content: {
            definition: '분석 방법론은 데이터 분석 프로젝트를 체계적으로 수행하기 위한 절차와 방법을 정의한 것입니다.',
            whenToUse: [
                '분석 프로젝트 계획 수립 시',
                '방법론 간 차이점을 비교할 때',
                '분석 단계별 활동을 정의할 때'
            ],
            formula: 'KDD (Knowledge Discovery in Database):\n데이터 선택 → 전처리 → 변환 → 데이터마이닝 → 해석/평가\n\nCRISP-DM:\n업무 이해 → 데이터 이해 → 데이터 준비 → 모델링 → 평가 → 전개\n\nSEMMA (SAS):\nSample → Explore → Modify → Model → Assess',
            interpretation: [
                'KDD: 학술적 관점, 데이터마이닝 중심',
                'CRISP-DM: 산업 표준, 업무 이해 강조, 반복적 수행',
                'SEMMA: SAS사의 실무 중심 방법론',
                '빅데이터 분석 방법론: 분석 기획 → 데이터 준비 → 분석 → 시스템 구현 → 평가 및 전개'
            ],
            example: 'CRISP-DM이 가장 널리 사용되며, 업무 이해에서 시작하여 반복적으로 수행됨',
            caution: [
                '방법론은 프로젝트 특성에 맞게 조정하여 적용',
                'CRISP-DM은 6단계 반복 수행 (이전 단계로 피드백 가능)',
                '각 단계별 산출물과 활동을 명확히 정의해야 함'
            ]
        }
    },
    {
        id: 'analysis-planning',
        title: '분석 기획과 분석 마스터 플랜',
        category: 'subject2',
        categoryName: '2과목: 데이터 분석 기획',
        summary: '분석 과제 도출과 마스터 플랜 수립 방법을 학습합니다.',
        content: {
            definition: '분석 마스터 플랜은 조직의 분석 역량과 비즈니스 요구를 고려하여 중장기적인 분석 로드맵을 수립하는 것입니다.',
            whenToUse: [
                '분석 과제를 발굴할 때',
                '분석 우선순위를 결정할 때',
                '분석 거버넌스를 수립할 때'
            ],
            formula: '분석 과제 발굴 방법:\n1. 하향식(Top-Down): 전략 → 과제 도출\n2. 상향식(Bottom-Up): 현장 문제 → 과제 도출\n\n우선순위 평가 기준:\n• 시급성 (Urgency)\n• 난이도 (Difficulty)\n• 전략적 중요도 (Strategic Importance)',
            interpretation: [
                '분석 기회 발굴: 문제 정의, 가설 수립, 검증 계획',
                '분석 로드맵: 단기/중기/장기 과제 배치',
                '분석 거버넌스: 조직, 프로세스, 시스템 체계',
                'ISP(정보전략계획)와 연계한 분석 전략 수립'
            ],
            example: '하향식: "매출 10% 증가" 목표 → 고객 이탈 예측 분석 과제 도출\n상향식: 현장 불만 데이터 분석 → 품질 개선 과제 도출',
            caution: [
                '하향식과 상향식을 병행하여 과제 발굴',
                '분석 ROI(투자 대비 효과)를 고려한 우선순위 결정',
                '분석 조직의 역량 수준을 고려한 현실적인 계획 수립'
            ]
        }
    },
    {
        id: 'analysis-governance',
        title: '데이터 거버넌스와 분석 조직',
        category: 'subject2',
        categoryName: '2과목: 데이터 분석 기획',
        summary: '데이터 거버넌스 체계와 분석 조직 구조를 학습합니다.',
        content: {
            definition: '데이터 거버넌스는 데이터의 가용성, 유용성, 통합성, 보안성을 관리하기 위한 정책과 프로세스의 집합입니다.',
            whenToUse: [
                '데이터 품질 관리 체계를 수립할 때',
                '분석 조직을 구성할 때',
                '데이터 표준화를 추진할 때'
            ],
            formula: '데이터 거버넌스 구성요소:\n• 원칙 (Principle): 데이터 관리 원칙\n• 조직 (Organization): 역할과 책임\n• 프로세스 (Process): 관리 절차\n\n분석 조직 유형:\n• 집중형: 전사 분석 조직\n• 분산형: 부서별 분석 인력\n• 혼합형: 전사 CoE + 부서 분석가',
            interpretation: [
                '데이터 스튜어드: 데이터 품질 책임자',
                'CDO(Chief Data Officer): 최고 데이터 책임자',
                'CoE(Center of Excellence): 분석 전문 조직',
                '데이터 품질 기준: 정확성, 완전성, 일관성, 적시성'
            ],
            example: '집중형: 분석 전문 조직이 전사 과제 수행 (품질↑, 유연성↓)\n분산형: 현업 밀착 분석 (속도↑, 중복↑)',
            caution: [
                '조직 규모와 성숙도에 맞는 거버넌스 체계 필요',
                '분석 조직은 비즈니스 부서와의 협업이 핵심',
                '데이터 품질 없이는 좋은 분석 결과 불가'
            ]
        }
    },

    // ===== 3과목: 데이터 분석 - 통계분석 =====
    {
        id: 'descriptive-stats',
        title: '기술통계 (Descriptive Statistics)',
        category: 'subject3-stats',
        categoryName: '3과목: 통계분석',
        summary: '데이터의 중심경향, 산포도, 분포 형태를 요약합니다.',
        content: {
            definition: '기술통계는 수집된 데이터를 요약하고 특성을 파악하기 위한 통계 기법입니다.',
            whenToUse: [
                '데이터 탐색적 분석(EDA)의 첫 단계',
                '데이터 분포와 특성을 파악할 때',
                '이상치나 결측치를 확인할 때'
            ],
            formula: '중심경향 측도:\n• 평균: x̄ = Σxi / n\n• 중앙값: 정렬 후 가운데 값\n• 최빈값: 가장 빈도 높은 값\n\n산포도 측도:\n• 분산: s² = Σ(xi - x̄)² / (n-1)\n• 표준편차: s = √s²\n• IQR = Q3 - Q1',
            interpretation: [
                '평균 > 중앙값: 오른쪽 꼬리 분포 (양의 왜도)',
                '평균 < 중앙값: 왼쪽 꼬리 분포 (음의 왜도)',
                '왜도(Skewness): 분포의 비대칭 정도',
                '첨도(Kurtosis): 분포의 뾰족한 정도 (정규분포=3)'
            ],
            example: '시험 점수 분포: 평균 70, 중앙값 75, 표준편차 15\n→ 평균 < 중앙값이므로 음의 왜도 (저점수 쪽으로 긴 꼬리)',
            caution: [
                '평균은 이상치에 민감 → 중앙값과 함께 확인',
                '표준편차가 클수록 데이터가 퍼져 있음',
                '여러 통계량을 종합적으로 해석해야 함'
            ]
        }
    },
    {
        id: 'probability-distribution',
        title: '확률분포 (정규분포, 이항분포, 포아송분포)',
        category: 'subject3-stats',
        categoryName: '3과목: 통계분석',
        summary: '주요 확률분포의 특성과 적용 상황을 학습합니다.',
        content: {
            definition: '확률분포는 확률변수가 특정 값을 가질 확률을 나타내는 함수입니다.',
            whenToUse: [
                '데이터 분포를 가정할 때',
                '통계적 검정을 수행할 때',
                '확률 계산이 필요할 때'
            ],
            formula: '정규분포 N(μ, σ²):\n• 평균 μ, 분산 σ²\n• 68-95-99.7 법칙\n\n이항분포 B(n, p):\n• n번 시행, 성공확률 p\n• 평균 np, 분산 np(1-p)\n\n포아송분포 Poi(λ):\n• 단위 시간당 평균 λ번 발생\n• 평균 = 분산 = λ',
            interpretation: [
                '정규분포: 자연현상, 측정오차 등 (좌우대칭 종모양)',
                '이항분포: 성공/실패 반복 실험 (불량품 개수 등)',
                '포아송분포: 희귀 사건의 발생 횟수 (콜센터 통화 수 등)',
                '중심극한정리: 표본평균은 n이 크면 정규분포에 근사'
            ],
            example: '정규분포: IQ 점수 (μ=100, σ=15)\n이항분포: 100명 중 합격자 수 (n=100, p=0.7)\n포아송분포: 1시간 동안 방문 고객 수 (λ=5)',
            caution: [
                '분포 가정이 잘못되면 분석 결과도 부정확',
                '중심극한정리: n ≥ 30이면 정규분포 근사 가능',
                '포아송분포: 드문 사건, 각 사건은 독립적'
            ]
        }
    },
    {
        id: 'hypothesis-testing',
        title: '가설검정과 p-value',
        category: 'subject3-stats',
        categoryName: '3과목: 통계분석',
        summary: '가설검정의 개념, 절차, 오류 유형을 학습합니다.',
        content: {
            definition: '가설검정은 모집단에 대한 가설이 옳은지 표본 데이터를 통해 통계적으로 검증하는 절차입니다.',
            whenToUse: [
                '모집단의 특성에 대한 주장을 검증할 때',
                '두 집단 간 차이가 있는지 확인할 때',
                '처리 효과가 있는지 판단할 때'
            ],
            formula: '가설검정 절차:\n1. 가설 설정 (H₀: 귀무가설, H₁: 대립가설)\n2. 유의수준 α 설정 (보통 0.05)\n3. 검정통계량 계산\n4. p-value 계산 또는 기각역 비교\n5. 결론 도출',
            interpretation: [
                'p-value < α: 귀무가설 기각 (대립가설 채택)',
                'p-value ≥ α: 귀무가설 기각 못함',
                '제1종 오류(α): 참인 H₀를 기각 (False Positive)',
                '제2종 오류(β): 거짓인 H₀를 기각 못함 (False Negative)',
                '검정력 = 1 - β: 거짓인 H₀를 기각할 확률'
            ],
            example: '예: 새 약의 효과 검증\nH₀: 새 약은 효과 없음 (μ = 0)\nH₁: 새 약은 효과 있음 (μ ≠ 0)\np-value = 0.03 < 0.05 → H₀ 기각, 약 효과 있음',
            caution: [
                'p-value는 효과 크기(effect size)와 다름',
                '통계적 유의성 ≠ 실질적 유의성',
                '표본 크기가 크면 작은 차이도 유의하게 나올 수 있음'
            ]
        }
    },
    {
        id: 't-test',
        title: 't-검정 (t-test)',
        category: 'subject3-stats',
        categoryName: '3과목: 통계분석',
        summary: '평균 비교를 위한 t-검정의 종류와 적용 방법을 학습합니다.',
        content: {
            definition: 't-검정은 두 집단의 평균 차이가 통계적으로 유의한지 검정하는 방법입니다.',
            whenToUse: [
                '표본평균이 특정 값과 다른지 검정할 때 (단일표본)',
                '독립적인 두 집단의 평균을 비교할 때 (독립표본)',
                '같은 대상의 전후 차이를 비교할 때 (대응표본)'
            ],
            formula: '단일표본 t-검정:\nt = (x̄ - μ₀) / (s / √n)\n\n독립표본 t-검정:\nt = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂)\n\n대응표본 t-검정:\nt = d̄ / (sd / √n)',
            interpretation: [
                '단일표본: 표본평균 vs 기준값',
                '독립표본: 서로 다른 두 그룹의 평균 비교',
                '대응표본: 같은 대상의 전/후 비교',
                '자유도(df): 독립적인 정보의 개수'
            ],
            example: '독립표본: 남학생(n=30, x̄=75)과 여학생(n=25, x̄=78) 점수 비교\n대응표본: 다이어트 전(75kg) 후(72kg) 체중 비교',
            caution: [
                '정규성 가정: 데이터가 정규분포를 따라야 함',
                '등분산 가정(독립표본): Levene 검정으로 확인',
                '등분산 위반 시 Welch t-검정 사용'
            ]
        }
    },
    {
        id: 'anova',
        title: '분산분석 (ANOVA)',
        category: 'subject3-stats',
        categoryName: '3과목: 통계분석',
        summary: '세 개 이상 집단의 평균 비교를 위한 분산분석을 학습합니다.',
        content: {
            definition: 'ANOVA(Analysis of Variance)는 세 개 이상 집단의 평균이 모두 같은지 검정하는 방법으로, 집단 간 분산과 집단 내 분산을 비교합니다.',
            whenToUse: [
                '3개 이상 집단의 평균을 동시에 비교할 때',
                '범주형 독립변수가 연속형 종속변수에 미치는 영향 분석',
                '실험 설계에서 처리 효과 검정'
            ],
            formula: 'F = MSB / MSW\n\n• SST(총제곱합) = SSB + SSW\n• SSB(집단간): Σnj(x̄j - x̄)²\n• SSW(집단내): ΣΣ(xij - x̄j)²\n• MSB = SSB / (k-1)\n• MSW = SSW / (n-k)',
            interpretation: [
                'F 값이 클수록 집단 간 차이가 큼',
                'p < 0.05: 적어도 하나의 집단 평균이 다름',
                '유의하면 사후검정으로 어떤 집단이 다른지 확인',
                '사후검정: Tukey, Bonferroni, Scheffe, Duncan 등'
            ],
            example: '3가지 교수법(A, B, C)의 학습 효과 비교\nF = 5.32, p = 0.008 → 교수법에 따라 효과가 다름\nTukey 사후검정: A-C 간 유의한 차이',
            caution: [
                '가정: 정규성, 등분산성, 독립성',
                'ANOVA는 "차이가 있다"만 알려줌 → 사후검정 필요',
                '등분산 위반 시 Welch ANOVA 사용'
            ]
        }
    },
    {
        id: 'correlation',
        title: '상관분석 (Correlation Analysis)',
        category: 'subject3-stats',
        categoryName: '3과목: 통계분석',
        summary: '두 변수 간의 관련성을 측정하는 상관분석을 학습합니다.',
        content: {
            definition: '상관분석은 두 변수 간의 선형적 관련성의 강도와 방향을 측정하는 분석 방법입니다.',
            whenToUse: [
                '두 연속형 변수 간의 관계를 파악할 때',
                '변수 간 관련성의 강도를 측정할 때',
                '회귀분석 전 변수 간 관계 탐색'
            ],
            formula: '피어슨 상관계수:\nr = Σ(xi-x̄)(yi-ȳ) / √[Σ(xi-x̄)²·Σ(yi-ȳ)²]\n\n스피어만 상관계수 (순위 기반):\nρ = 1 - 6Σdi² / n(n²-1)',
            interpretation: [
                'r = 1: 완전 양의 상관',
                'r = -1: 완전 음의 상관',
                'r = 0: 선형 관계 없음',
                '|r| > 0.7: 강한 상관',
                '0.3 < |r| < 0.7: 중간 상관',
                '|r| < 0.3: 약한 상관'
            ],
            example: '키와 몸무게의 상관계수 r = 0.75\n→ 강한 양의 상관, 키가 클수록 몸무게가 무거운 경향',
            caution: [
                '상관관계 ≠ 인과관계',
                '피어슨: 선형 관계만 측정, 정규성 가정',
                '스피어만: 비선형 단조 관계, 순위 기반 (이상치에 강함)'
            ]
        }
    },
    {
        id: 'regression',
        title: '회귀분석 (Regression Analysis)',
        category: 'subject3-stats',
        categoryName: '3과목: 통계분석',
        summary: '독립변수로 종속변수를 예측하는 회귀분석을 학습합니다.',
        content: {
            definition: '회귀분석은 독립변수(X)와 종속변수(Y) 간의 관계를 함수로 모델링하여 예측하는 분석 방법입니다.',
            whenToUse: [
                '변수 간 인과관계를 분석할 때',
                '연속형 종속변수를 예측할 때',
                '독립변수의 영향력을 평가할 때'
            ],
            formula: '단순 선형회귀:\nY = β₀ + β₁X + ε\n\n다중 선형회귀:\nY = β₀ + β₁X₁ + β₂X₂ + ... + ε\n\n결정계수: R² = SSR/SST = 1 - SSE/SST',
            interpretation: [
                'β₀ (절편): X=0일 때 Y의 예측값',
                'β₁ (기울기): X가 1 증가할 때 Y의 변화량',
                'R² (결정계수): 모델의 설명력 (0~1)',
                'p-value: 회귀계수의 유의성'
            ],
            example: '광고비(X)와 매출(Y) 관계\nY = 100 + 5X (R² = 0.85)\n→ 광고비 1만원 증가 시 매출 5만원 증가 예상\n→ 모델이 매출 변동의 85%를 설명',
            caution: [
                '가정: 선형성, 독립성, 등분산성, 정규성',
                '다중공선성: 독립변수 간 높은 상관 (VIF > 10 주의)',
                '잔차분석으로 가정 위반 확인'
            ]
        }
    },
    {
        id: 'chi-square',
        title: '카이제곱 검정 (Chi-Square Test)',
        category: 'subject3-stats',
        categoryName: '3과목: 통계분석',
        summary: '범주형 변수 간의 독립성 및 적합도를 검정합니다.',
        content: {
            definition: '카이제곱 검정은 범주형 변수들 간의 관계가 있는지, 또는 관측 빈도가 기대 빈도와 일치하는지 검정합니다.',
            whenToUse: [
                '두 범주형 변수 간 독립성 검정',
                '관측 빈도와 기대 빈도의 적합도 검정',
                '교차표 분석'
            ],
            formula: 'χ² = Σ[(O - E)² / E]\n\nO: 관측 빈도\nE: 기대 빈도\n자유도: (r-1)(c-1)',
            interpretation: [
                'χ² 값이 클수록 관측값과 기대값의 차이가 큼',
                'p < 0.05: 두 변수는 관련이 있음 (독립 아님)',
                'p ≥ 0.05: 두 변수는 독립적',
                '적합도 검정: 분포가 특정 분포를 따르는지 검정'
            ],
            example: '성별과 선호 음료의 관계\n남자: 커피 60, 차 40 / 여자: 커피 40, 차 60\nχ² = 8.0, p = 0.005 → 성별과 음료 선호는 관련 있음',
            caution: [
                '기대빈도가 5 미만인 셀이 20% 이상이면 Fisher 정확검정 사용',
                '표본 크기가 커야 검정력이 높음',
                '연관성의 강도는 Cramer\'s V로 측정'
            ]
        }
    },

    // ===== 3과목: 데이터 분석 - 데이터 마이닝 =====
    {
        id: 'data-mining-overview',
        title: '데이터 마이닝 개요',
        category: 'subject3-mining',
        categoryName: '3과목: 데이터 마이닝',
        summary: '데이터 마이닝의 정의, 기법 분류, 프로세스를 학습합니다.',
        content: {
            definition: '데이터 마이닝은 대용량 데이터에서 유용한 패턴과 규칙을 자동으로 발견하는 과정입니다.',
            whenToUse: [
                '숨겨진 패턴을 발견할 때',
                '예측 모델을 구축할 때',
                '고객 세분화가 필요할 때'
            ],
            formula: '데이터 마이닝 기법 분류:\n\n지도학습 (Supervised):\n• 분류 (Classification)\n• 회귀 (Regression)\n\n비지도학습 (Unsupervised):\n• 군집화 (Clustering)\n• 연관규칙 (Association Rule)',
            interpretation: [
                '분류: 범주형 결과 예측 (스팸/정상, 이탈/유지)',
                '회귀: 연속형 결과 예측 (매출액, 가격)',
                '군집화: 유사한 객체들을 그룹화',
                '연관규칙: 항목 간 연관성 발견 (장바구니 분석)'
            ],
            example: '분류: 대출 승인/거절 예측\n군집화: 고객 유형 세분화\n연관규칙: 맥주-기저귀 함께 구매 패턴 발견',
            caution: [
                '목적에 맞는 기법 선택 중요',
                '데이터 품질이 결과에 직접적 영향',
                '과적합(Overfitting) 주의'
            ]
        }
    },
    {
        id: 'classification',
        title: '분류 분석 (Classification)',
        category: 'subject3-mining',
        categoryName: '3과목: 데이터 마이닝',
        summary: '의사결정나무, 로지스틱 회귀, 나이브베이즈 등 분류 기법을 학습합니다.',
        content: {
            definition: '분류는 학습 데이터로부터 패턴을 학습하여 새로운 데이터의 범주를 예측하는 지도학습 기법입니다.',
            whenToUse: [
                '범주형 목표변수를 예측할 때',
                '이진 분류(Yes/No) 문제',
                '다중 클래스 분류 문제'
            ],
            formula: '주요 분류 알고리즘:\n\n• 의사결정나무: 정보이득, 지니지수로 분할\n• 로지스틱 회귀: P(Y=1) = 1/(1+e^-(β₀+β₁X))\n• 나이브베이즈: P(C|X) ∝ P(X|C)·P(C)\n• k-NN: 가장 가까운 k개의 다수결\n• SVM: 최대 마진 초평면',
            interpretation: [
                '의사결정나무: 해석 용이, 과적합 위험',
                '로지스틱 회귀: 확률 예측, 선형 분리 가정',
                '나이브베이즈: 빠름, 독립성 가정',
                '앙상블: Random Forest, Boosting (정확도↑)'
            ],
            example: '고객 이탈 예측:\n입력: 가입기간, 이용금액, 불만횟수\n출력: 이탈(1) / 유지(0)',
            caution: [
                '클래스 불균형 문제 해결 필요 (오버샘플링, SMOTE)',
                '평가지표: 정확도, 정밀도, 재현율, F1-score, AUC',
                '과적합 방지: 가지치기, 교차검증'
            ]
        }
    },
    {
        id: 'decision-tree',
        title: '의사결정나무 (Decision Tree)',
        category: 'subject3-mining',
        categoryName: '3과목: 데이터 마이닝',
        summary: '의사결정나무의 구조, 분할 기준, 장단점을 학습합니다.',
        content: {
            definition: '의사결정나무는 데이터를 분류하거나 예측하기 위해 스무고개처럼 질문을 통해 분류하는 트리 형태의 모델입니다.',
            whenToUse: [
                '결과 해석이 중요할 때',
                '규칙 기반 분류가 필요할 때',
                '비선형 관계를 모델링할 때'
            ],
            formula: '분할 기준 (불순도 측정):\n\n정보이득 (Entropy):\nIG = H(부모) - Σ(자식 비율 × H(자식))\nH = -Σp·log₂p\n\n지니지수 (Gini):\nGini = 1 - Σpi²\n\nCART: 지니지수, C4.5/C5.0: 정보이득',
            interpretation: [
                '루트 노드: 가장 중요한 변수로 첫 분할',
                '리프 노드: 최종 분류 결과',
                '깊이(Depth): 과적합과 관련',
                '가지치기(Pruning): 과적합 방지'
            ],
            example: '대출 승인 의사결정나무:\n신용등급 > 700? → Yes → 소득 > 5000? → Yes → 승인\n                              → No → 거절',
            caution: [
                '과적합 위험: 가지치기(Pre/Post Pruning) 필요',
                '연속형 변수 처리: 이진 분할',
                '불안정성: 작은 데이터 변화에 민감 → 앙상블로 보완'
            ]
        }
    },
    {
        id: 'logistic-regression',
        title: '로지스틱 회귀 (Logistic Regression)',
        category: 'subject3-mining',
        categoryName: '3과목: 데이터 마이닝',
        summary: '이진 분류를 위한 로지스틱 회귀 모델을 학습합니다.',
        content: {
            definition: '로지스틱 회귀는 종속변수가 범주형(이진)일 때 사건이 발생할 확률을 예측하는 분류 모델입니다.',
            whenToUse: [
                '이진 분류 문제 (Yes/No)',
                '확률 예측이 필요할 때',
                '변수의 영향력(오즈비)을 해석할 때'
            ],
            formula: 'P(Y=1) = 1 / (1 + e^-(β₀+β₁X₁+...))\n\n로짓 변환:\nlogit(P) = ln(P/(1-P)) = β₀ + β₁X₁ + ...\n\n오즈비(OR) = e^β',
            interpretation: [
                '출력: 0~1 사이의 확률',
                '로짓: 확률을 실수 전체로 변환',
                '오즈비(OR) > 1: 양의 영향',
                '오즈비(OR) < 1: 음의 영향',
                'OR = 2: X가 1 증가하면 오즈가 2배'
            ],
            example: '합격 확률 예측:\nP(합격) = 1 / (1 + e^-(−5 + 0.1×공부시간))\n공부시간 50시간 → P = 0.73 (73% 합격 확률)',
            caution: [
                '선형 분리 가정: 복잡한 경계면에는 부적합',
                '다중공선성 주의',
                '해석: 계수는 로그 오즈 변화량'
            ]
        }
    },
    {
        id: 'clustering',
        title: '군집분석 (Clustering)',
        category: 'subject3-mining',
        categoryName: '3과목: 데이터 마이닝',
        summary: 'K-평균, 계층적 군집화 등 비지도학습 군집 기법을 학습합니다.',
        content: {
            definition: '군집분석은 유사한 특성을 가진 개체들을 그룹(군집)으로 묶는 비지도학습 기법입니다.',
            whenToUse: [
                '고객 세분화 (Customer Segmentation)',
                '데이터 패턴 탐색',
                '이상치 탐지'
            ],
            formula: 'K-평균 알고리즘:\n1. K개 중심점 초기화\n2. 각 데이터를 가장 가까운 중심에 할당\n3. 군집별 중심 재계산\n4. 2-3 반복 (수렴까지)\n\n거리 측정: 유클리드, 맨해튼, 코사인 등',
            interpretation: [
                'K-평균: 빠름, K 지정 필요, 구형 군집 가정',
                '계층적 군집: 덴드로그램, K 사후 결정',
                '실루엣 계수: 군집 품질 평가 (-1~1, 높을수록 좋음)',
                'Elbow Method: 최적 K 결정'
            ],
            example: '고객 세분화:\n군집1: 고소득/고소비 VIP\n군집2: 중소득/가격민감 일반\n군집3: 저소득/비활성 이탈위험',
            caution: [
                'K-평균: K 선택, 초기값에 민감, 이상치에 취약',
                '변수 표준화 필수 (스케일 영향)',
                '군집 해석은 도메인 지식 필요'
            ]
        }
    },
    {
        id: 'association-rule',
        title: '연관규칙 분석 (Association Rule)',
        category: 'subject3-mining',
        categoryName: '3과목: 데이터 마이닝',
        summary: '장바구니 분석을 위한 연관규칙과 Apriori 알고리즘을 학습합니다.',
        content: {
            definition: '연관규칙 분석은 데이터 간의 연관성을 찾아 "A를 구매하면 B도 구매한다"와 같은 규칙을 발견하는 기법입니다.',
            whenToUse: [
                '장바구니 분석 (Market Basket Analysis)',
                '교차 판매 전략 수립',
                '추천 시스템'
            ],
            formula: '지지도 (Support):\nP(A∩B) = (A와 B 동시 거래 수) / 전체 거래 수\n\n신뢰도 (Confidence):\nP(B|A) = P(A∩B) / P(A)\n\n향상도 (Lift):\nLift = P(B|A) / P(B) = 신뢰도 / P(B)',
            interpretation: [
                '지지도: 규칙의 빈도 (전체 중 비율)',
                '신뢰도: 규칙의 정확도 (A 중 B 비율)',
                '향상도 > 1: 양의 상관 (A가 B 구매 촉진)',
                '향상도 = 1: 독립 (연관 없음)',
                '향상도 < 1: 음의 상관'
            ],
            example: '맥주 → 기저귀\n지지도: 5% (전체 거래의 5%에서 동시 구매)\n신뢰도: 60% (맥주 구매자의 60%가 기저귀도 구매)\n향상도: 3.0 (기저귀 구매 확률이 3배 증가)',
            caution: [
                'Apriori: 최소 지지도 이상 항목집합만 탐색',
                '지지도가 낮으면 우연일 수 있음',
                '향상도로 실질적 연관성 판단'
            ]
        }
    },
    {
        id: 'model-evaluation',
        title: '모델 평가 지표',
        category: 'subject3-mining',
        categoryName: '3과목: 데이터 마이닝',
        summary: '분류/회귀 모델의 성능 평가 지표를 학습합니다.',
        content: {
            definition: '모델 평가는 구축된 모델의 성능을 객관적으로 측정하고 비교하는 과정입니다.',
            whenToUse: [
                '모델 성능을 객관적으로 측정할 때',
                '여러 모델을 비교할 때',
                '최적 모델을 선택할 때'
            ],
            formula: '분류 모델 평가:\n• 정확도 = (TP+TN) / 전체\n• 정밀도 = TP / (TP+FP)\n• 재현율 = TP / (TP+FN)\n• F1-score = 2×(정밀도×재현율)/(정밀도+재현율)\n\n회귀 모델 평가:\n• MSE = Σ(yi - ŷi)² / n\n• RMSE = √MSE\n• MAE = Σ|yi - ŷi| / n\n• R² = 1 - SSE/SST',
            interpretation: [
                'TP(True Positive): 실제 양성, 예측도 양성',
                'FP(False Positive): 실제 음성, 예측은 양성 (1종 오류)',
                'FN(False Negative): 실제 양성, 예측은 음성 (2종 오류)',
                'AUC-ROC: 0.5~1, 높을수록 좋음',
                '클래스 불균형 시 F1-score나 AUC 사용'
            ],
            example: '스팸 필터 평가:\n정밀도 높음 → 정상 메일이 스팸으로 분류되는 경우 적음\n재현율 높음 → 스팸 메일을 놓치는 경우 적음',
            caution: [
                '목적에 따라 중요한 지표가 다름',
                '불균형 데이터: 정확도보다 F1, AUC 사용',
                '교차검증으로 일반화 성능 평가'
            ]
        }
    },
    {
        id: 'overfitting',
        title: '과적합과 모델 검증',
        category: 'subject3-mining',
        categoryName: '3과목: 데이터 마이닝',
        summary: '과적합 문제와 교차검증 등 검증 방법을 학습합니다.',
        content: {
            definition: '과적합(Overfitting)은 모델이 학습 데이터에 너무 맞춰져서 새로운 데이터에 대한 일반화 성능이 떨어지는 현상입니다.',
            whenToUse: [
                '모델의 일반화 성능을 평가할 때',
                '최적 모델 복잡도를 결정할 때',
                '하이퍼파라미터를 튜닝할 때'
            ],
            formula: '데이터 분할:\n• 학습(Train): 60-70%\n• 검증(Validation): 15-20%\n• 테스트(Test): 15-20%\n\nK-Fold 교차검증:\n데이터를 K등분 → K번 반복 학습/검증 → 평균 성능',
            interpretation: [
                '과적합: 학습 성능↑, 테스트 성능↓',
                '과소적합: 학습/테스트 모두 성능↓',
                '적정: 학습과 테스트 성능 모두 양호',
                'Bias-Variance Tradeoff'
            ],
            example: '의사결정나무 깊이에 따른 성능:\n깊이 3: Train 80%, Test 78% (적정)\n깊이 20: Train 99%, Test 65% (과적합)',
            caution: [
                '과적합 방지: 정규화, 가지치기, 드롭아웃',
                '교차검증으로 안정적인 성능 추정',
                '테스트 데이터는 최종 평가에만 사용'
            ]
        }
    }
];
