// ===== 전역 상태 =====
let currentQuiz = [];
let currentQuizIndex = 0;
let quizScore = 0;
let progress = {
    learnedConcepts: [],
    quizResults: { correct: 0, total: 0 },
    simCount: 0
};

// 차트 인스턴스
let correlationChart = null;
let ttestChart = null;
let distributionChart = null;
let regressionChart = null;

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    initNavigation();
    initTheme();
    initConcepts();
    initQuiz();
    initSimulations();
    updateProgressDisplay();
});

// ===== 네비게이션 =====
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            navigateTo(section);
        });
    });
}

function navigateTo(sectionId) {
    // 모든 섹션 숨기기
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    // 선택한 섹션 표시
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

    // 퀴즈 섹션 초기화
    if (sectionId === 'quiz') {
        resetQuiz();
    }
}

// ===== 테마 =====
function initTheme() {
    const themeBtn = document.getElementById('themeBtn');
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.textContent = '☀️ 라이트 모드';
    }

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeBtn.textContent = '🌙 다크 모드';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeBtn.textContent = '☀️ 라이트 모드';
            localStorage.setItem('theme', 'dark');
        }
        // 차트 색상 업데이트
        updateChartColors();
    });
}

// ===== 개념 학습 =====
function initConcepts() {
    renderConceptList('all');

    // 카테고리 버튼 이벤트
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderConceptList(btn.dataset.category);
        });
    });
}

function renderConceptList(category) {
    const container = document.getElementById('conceptList');
    const detail = document.getElementById('conceptDetail');

    container.classList.remove('hidden');
    detail.classList.add('hidden');

    let filtered;
    if (category === 'all') {
        filtered = concepts;
    } else if (category === 'subject3-stats' || category === 'subject3-mining') {
        filtered = concepts.filter(c => c.category === category);
    } else {
        filtered = concepts.filter(c => c.category === category || c.category.startsWith(category));
    }

    container.innerHTML = filtered.map(concept => `
        <div class="concept-card" onclick="showConceptDetail('${concept.id}')">
            <span class="category-tag">${concept.categoryName}</span>
            <h3>${concept.title}</h3>
            <p>${concept.summary}</p>
            ${progress.learnedConcepts.includes(concept.id)
                ? '<span class="learned-badge">✓ 학습 완료</span>'
                : ''}
        </div>
    `).join('');
}

function showConceptDetail(conceptId) {
    const concept = concepts.find(c => c.id === conceptId);
    if (!concept) return;

    const container = document.getElementById('conceptList');
    const detail = document.getElementById('conceptDetail');

    container.classList.add('hidden');
    detail.classList.remove('hidden');

    const content = concept.content;
    detail.innerHTML = `
        <button class="back-btn" onclick="renderConceptList('all')">← 목록으로</button>
        <span class="category-tag">${concept.categoryName}</span>
        <h2>${concept.title}</h2>

        <div class="concept-section">
            <h3>📖 정의</h3>
            <p>${content.definition}</p>
        </div>

        <div class="concept-section">
            <h3>🎯 언제 사용하나요?</h3>
            <ul>
                ${content.whenToUse.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>

        <div class="concept-section">
            <h3>📐 공식</h3>
            <div class="formula-box">${content.formula.replace(/\n/g, '<br>')}</div>
        </div>

        <div class="concept-section">
            <h3>📊 해석 방법</h3>
            <ul>
                ${content.interpretation.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>

        <div class="concept-section">
            <h3>💡 예시</h3>
            <div class="example-box">${content.example}</div>
        </div>

        <div class="concept-section">
            <h3>⚠️ 주의사항</h3>
            <ul>
                ${content.caution.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>

        <button class="btn primary mt-20" onclick="markAsLearned('${concept.id}')">
            ${progress.learnedConcepts.includes(concept.id) ? '✓ 학습 완료됨' : '학습 완료 표시'}
        </button>
    `;

    // 학습 기록
    if (!progress.learnedConcepts.includes(conceptId)) {
        markAsLearned(conceptId);
    }
}

function markAsLearned(conceptId) {
    if (!progress.learnedConcepts.includes(conceptId)) {
        progress.learnedConcepts.push(conceptId);
        saveProgress();
        updateProgressDisplay();
    }
}

// ===== 퀴즈 =====
function initQuiz() {
    document.querySelectorAll('.quiz-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            startQuiz(btn.dataset.quiz);
        });
    });

    document.getElementById('nextQuizBtn').addEventListener('click', nextQuestion);
}

function startQuiz(category) {
    currentQuizIndex = 0;
    quizScore = 0;

    if (category === 'all') {
        // ADSP 모의고사: 1과목 10문항, 2과목 10문항, 3과목 30문항
        const subject1 = shuffleArray(quizzes.filter(q => q.category === 'subject1')).slice(0, 10);
        const subject2 = shuffleArray(quizzes.filter(q => q.category === 'subject2')).slice(0, 10);
        const subject3 = shuffleArray(quizzes.filter(q => q.category === 'subject3')).slice(0, 30);
        currentQuiz = [...subject1, ...subject2, ...subject3];
    } else if (category === 'subject3') {
        // 3과목은 30문항
        currentQuiz = shuffleArray(quizzes.filter(q => q.category === 'subject3')).slice(0, 30);
    } else {
        // 1, 2과목은 10문항
        currentQuiz = shuffleArray(quizzes.filter(q => q.category === category)).slice(0, 10);
    }

    document.getElementById('quizStart').classList.add('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizArea').classList.remove('hidden');

    showQuestion();
}

function showQuestion() {
    const q = currentQuiz[currentQuizIndex];

    document.getElementById('quizProgressText').textContent =
        `${currentQuizIndex + 1} / ${currentQuiz.length}`;
    document.getElementById('quizProgressBar').style.width =
        `${((currentQuizIndex + 1) / currentQuiz.length) * 100}%`;

    document.getElementById('quizQuestion').innerHTML = `
        <strong>Q${currentQuizIndex + 1}.</strong> ${q.question}
    `;

    document.getElementById('quizOptions').innerHTML = q.options.map((opt, i) => `
        <button class="quiz-option" data-index="${i}">${opt}</button>
    `).join('');

    document.getElementById('quizFeedback').classList.add('hidden');
    document.getElementById('nextQuizBtn').classList.add('hidden');

    // 옵션 클릭 이벤트
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.addEventListener('click', (e) => selectAnswer(e.target));
    });
}

function selectAnswer(selectedBtn) {
    const q = currentQuiz[currentQuizIndex];
    const selectedIndex = parseInt(selectedBtn.dataset.index);
    const isCorrect = selectedIndex === q.correct;

    // 모든 버튼 비활성화
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.classList.add('disabled');
        if (parseInt(btn.dataset.index) === q.correct) {
            btn.classList.add('correct');
        }
    });

    if (isCorrect) {
        quizScore++;
        selectedBtn.classList.add('correct');
    } else {
        selectedBtn.classList.add('wrong');
    }

    // 피드백 표시
    const feedback = document.getElementById('quizFeedback');
    feedback.classList.remove('hidden', 'correct', 'wrong');
    feedback.classList.add(isCorrect ? 'correct' : 'wrong');
    feedback.innerHTML = `
        <strong>${isCorrect ? '정답입니다! 🎉' : '틀렸습니다 😢'}</strong>
        <p>${q.explanation}</p>
    `;

    document.getElementById('nextQuizBtn').classList.remove('hidden');
    document.getElementById('nextQuizBtn').textContent =
        currentQuizIndex === currentQuiz.length - 1 ? '결과 보기' : '다음 문제';
}

function nextQuestion() {
    currentQuizIndex++;

    if (currentQuizIndex >= currentQuiz.length) {
        showQuizResult();
    } else {
        showQuestion();
    }
}

function showQuizResult() {
    document.getElementById('quizArea').classList.add('hidden');
    document.getElementById('quizResult').classList.remove('hidden');

    const percentage = Math.round((quizScore / currentQuiz.length) * 100);
    document.getElementById('quizScore').innerHTML = `
        ${quizScore} / ${currentQuiz.length} (${percentage}%)
        <p style="font-size: 1rem; margin-top: 10px; color: var(--text-secondary)">
            ${percentage >= 80 ? '훌륭합니다! 🎉' :
              percentage >= 60 ? '좋은 결과입니다! 👍' :
              '더 연습해보세요! 💪'}
        </p>
    `;

    // 결과 저장
    progress.quizResults.correct += quizScore;
    progress.quizResults.total += currentQuiz.length;
    saveProgress();
    updateProgressDisplay();
}

function resetQuiz() {
    currentQuiz = [];
    currentQuizIndex = 0;
    quizScore = 0;

    document.getElementById('quizStart').classList.remove('hidden');
    document.getElementById('quizArea').classList.add('hidden');
    document.getElementById('quizResult').classList.add('hidden');
}

// ===== 시뮬레이션 =====
function initSimulations() {
    // 탭 전환
    document.querySelectorAll('.sim-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.sim-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.sim-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`sim-${tab.dataset.sim}`).classList.add('active');
        });
    });

    initCorrelationSim();
    initTtestSim();
    initDistributionSim();
    initRegressionSim();
}

// 상관관계 시뮬레이션
function initCorrelationSim() {
    const corrSlider = document.getElementById('corrSlider');
    const nSlider = document.getElementById('nSlider');

    const update = () => {
        const r = parseFloat(corrSlider.value);
        const n = parseInt(nSlider.value);

        document.getElementById('corrValue').textContent = r.toFixed(1);
        document.getElementById('nValue').textContent = n;

        updateCorrelationChart(r, n);
        progress.simCount++;
        saveProgress();
    };

    corrSlider.addEventListener('input', update);
    nSlider.addEventListener('input', update);

    // 초기 렌더링
    setTimeout(update, 100);
}

function updateCorrelationChart(r, n) {
    const data = generateCorrelatedData(r, n);

    const ctx = document.getElementById('correlationChart').getContext('2d');

    if (correlationChart) {
        correlationChart.destroy();
    }

    correlationChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: '데이터 포인트',
                data: data,
                backgroundColor: 'rgba(79, 70, 229, 0.6)',
                borderColor: 'rgba(79, 70, 229, 1)',
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: 'X 변수' } },
                y: { title: { display: true, text: 'Y 변수' } }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 설명 업데이트
    let explanation = '';
    if (Math.abs(r) >= 0.7) {
        explanation = `r = ${r.toFixed(1)}은 <strong>강한 ${r > 0 ? '양의' : '음의'} 상관관계</strong>를 나타냅니다. `;
    } else if (Math.abs(r) >= 0.3) {
        explanation = `r = ${r.toFixed(1)}은 <strong>중간 정도의 ${r > 0 ? '양의' : '음의'} 상관관계</strong>를 나타냅니다. `;
    } else {
        explanation = `r = ${r.toFixed(1)}은 <strong>약한 상관관계</strong>(거의 선형 관계 없음)를 나타냅니다. `;
    }
    explanation += r > 0
        ? 'X가 증가할 때 Y도 증가하는 경향이 있습니다.'
        : r < 0
            ? 'X가 증가할 때 Y는 감소하는 경향이 있습니다.'
            : '두 변수 간 선형적 관계가 거의 없습니다.';

    document.getElementById('corrExplanation').innerHTML = explanation;
}

function generateCorrelatedData(r, n) {
    const data = [];
    for (let i = 0; i < n; i++) {
        const x = Math.random() * 100;
        const noise = (1 - Math.abs(r)) * (Math.random() - 0.5) * 100;
        const y = r >= 0
            ? x * r + (50 * (1 - r)) + noise
            : 100 - x * Math.abs(r) + (50 * (1 - Math.abs(r))) + noise;
        data.push({ x: x, y: Math.max(0, Math.min(100, y)) });
    }
    return data;
}

// t-검정 시뮬레이션
let currentDataA = [];
let currentDataB = [];

function initTtestSim() {
    const sliders = ['meanASlider', 'sdASlider', 'nASlider', 'meanBSlider', 'sdBSlider', 'nBSlider'];

    // 슬라이더 값 표시 업데이트
    const updateLabels = () => {
        document.getElementById('meanA').textContent = document.getElementById('meanASlider').value;
        document.getElementById('sdA').textContent = document.getElementById('sdASlider').value;
        document.getElementById('nA').textContent = document.getElementById('nASlider').value;
        document.getElementById('meanB').textContent = document.getElementById('meanBSlider').value;
        document.getElementById('sdB').textContent = document.getElementById('sdBSlider').value;
        document.getElementById('nB').textContent = document.getElementById('nBSlider').value;
    };

    sliders.forEach(id => {
        document.getElementById(id).addEventListener('input', updateLabels);
    });

    // 새 샘플 생성 버튼
    document.getElementById('regenerateDataBtn').addEventListener('click', () => {
        generateAndDisplayTtest();
        progress.simCount++;
        saveProgress();
    });

    // 초기 데이터 생성
    setTimeout(generateAndDisplayTtest, 100);
}

function generateAndDisplayTtest() {
    // 모수 설정값 읽기
    const popMeanA = parseInt(document.getElementById('meanASlider').value);
    const popSdA = parseInt(document.getElementById('sdASlider').value);
    const nA = parseInt(document.getElementById('nASlider').value);
    const popMeanB = parseInt(document.getElementById('meanBSlider').value);
    const popSdB = parseInt(document.getElementById('sdBSlider').value);
    const nB = parseInt(document.getElementById('nBSlider').value);

    // 데이터 생성
    currentDataA = generateNormalData(popMeanA, popSdA, nA);
    currentDataB = generateNormalData(popMeanB, popSdB, nB);

    // 실제 표본 통계량 계산
    const sampleMeanA = currentDataA.reduce((s, v) => s + v, 0) / nA;
    const sampleMeanB = currentDataB.reduce((s, v) => s + v, 0) / nB;
    const sampleVarA = currentDataA.reduce((s, v) => s + Math.pow(v - sampleMeanA, 2), 0) / (nA - 1);
    const sampleVarB = currentDataB.reduce((s, v) => s + Math.pow(v - sampleMeanB, 2), 0) / (nB - 1);
    const sampleSdA = Math.sqrt(sampleVarA);
    const sampleSdB = Math.sqrt(sampleVarB);

    // t-검정 계산
    const tResult = calculateTTest(currentDataA, currentDataB);
    const meanDiff = sampleMeanA - sampleMeanB;
    const pooledSE = Math.sqrt(sampleVarA/nA + sampleVarB/nB);
    const df = nA + nB - 2;

    // === 표본 통계량 표시 ===
    document.getElementById('sampleMeanA').textContent = sampleMeanA.toFixed(2);
    document.getElementById('sampleSdA').textContent = sampleSdA.toFixed(2);
    document.getElementById('sampleNA').textContent = nA;
    document.getElementById('sampleMeanB').textContent = sampleMeanB.toFixed(2);
    document.getElementById('sampleSdB').textContent = sampleSdB.toFixed(2);
    document.getElementById('sampleNB').textContent = nB;

    // === 계산 과정 표시 ===
    document.getElementById('ttestFormula').innerHTML = `
t = (x̄_A - x̄_B) / √(s²_A/n_A + s²_B/n_B)<br><br>
t = (${sampleMeanA.toFixed(2)} - ${sampleMeanB.toFixed(2)}) / √(${sampleVarA.toFixed(2)}/${nA} + ${sampleVarB.toFixed(2)}/${nB})<br><br>
t = ${meanDiff.toFixed(2)} / √(${(sampleVarA/nA).toFixed(4)} + ${(sampleVarB/nB).toFixed(4)})<br><br>
t = ${meanDiff.toFixed(2)} / ${pooledSE.toFixed(4)}<br><br>
t = ${tResult.t.toFixed(4)}
    `;

    document.getElementById('meanDiff').textContent = meanDiff.toFixed(4);
    document.getElementById('pooledSE').textContent = pooledSE.toFixed(4);
    document.getElementById('tStatistic').textContent = tResult.t.toFixed(4);
    document.getElementById('degreesOfFreedom').textContent = df;
    document.getElementById('pValue').textContent = tResult.p < 0.001 ? '< 0.001' : tResult.p.toFixed(4);

    const significant = tResult.p < 0.05;
    let conclusion = significant
        ? `<span style="color: var(--success)"><strong>✓ 결론:</strong> p = ${tResult.p.toFixed(4)} < 0.05이므로, 귀무가설을 기각합니다.<br>두 그룹의 평균이 통계적으로 유의하게 다릅니다.</span>`
        : `<span style="color: var(--warning)"><strong>✗ 결론:</strong> p = ${tResult.p.toFixed(4)} ≥ 0.05이므로, 귀무가설을 기각할 수 없습니다.<br>두 그룹의 평균 차이가 통계적으로 유의하지 않습니다.</span>`;

    // 추가 설명
    if (popMeanA === popMeanB && popSdA === popSdB) {
        conclusion += `<br><br><em style="color: var(--text-muted)">참고: 모수 설정이 동일하지만 (μ_A = μ_B = ${popMeanA}), 랜덤 샘플링으로 인해 표본 평균이 다를 수 있습니다. 이것이 표본 오차입니다. "새 샘플 생성" 버튼을 여러 번 눌러 p-value가 어떻게 변하는지 확인해보세요.</em>`;
    }

    document.getElementById('ttestConclusion').innerHTML = conclusion;

    // === 데이터 테이블 표시 ===
    document.getElementById('dataTableA').innerHTML = currentDataA.map((v, i) => `
        <div class="data-row">
            <span class="index">${i + 1}</span>
            <span class="value">${v.toFixed(2)}</span>
        </div>
    `).join('');

    document.getElementById('dataTableB').innerHTML = currentDataB.map((v, i) => `
        <div class="data-row">
            <span class="index">${i + 1}</span>
            <span class="value">${v.toFixed(2)}</span>
        </div>
    `).join('');

    // === 차트 업데이트 (박스플롯 스타일 점 그래프) ===
    updateTtestChart(currentDataA, currentDataB, sampleMeanA, sampleMeanB);
}

function updateTtestChart(dataA, dataB, meanA, meanB) {
    const ctx = document.getElementById('ttestChart').getContext('2d');

    if (ttestChart) {
        ttestChart.destroy();
    }

    // 데이터 포인트를 그룹별로 표시
    const scatterDataA = dataA.map((v, i) => ({ x: 0.8 + Math.random() * 0.4, y: v }));
    const scatterDataB = dataB.map((v, i) => ({ x: 1.8 + Math.random() * 0.4, y: v }));

    ttestChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: '그룹 A 데이터',
                    data: scatterDataA,
                    backgroundColor: 'rgba(79, 70, 229, 0.5)',
                    pointRadius: 5
                },
                {
                    label: '그룹 B 데이터',
                    data: scatterDataB,
                    backgroundColor: 'rgba(16, 185, 129, 0.5)',
                    pointRadius: 5
                },
                {
                    label: '그룹 A 평균',
                    data: [{ x: 1, y: meanA }],
                    backgroundColor: 'rgba(79, 70, 229, 1)',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    borderWidth: 2,
                    pointRadius: 12,
                    pointStyle: 'rectRot'
                },
                {
                    label: '그룹 B 평균',
                    data: [{ x: 2, y: meanB }],
                    backgroundColor: 'rgba(16, 185, 129, 1)',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    borderWidth: 2,
                    pointRadius: 12,
                    pointStyle: 'rectRot'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    min: 0.5,
                    max: 2.5,
                    ticks: {
                        callback: function(value) {
                            if (value === 1) return '그룹 A';
                            if (value === 2) return '그룹 B';
                            return '';
                        }
                    },
                    title: { display: false }
                },
                y: {
                    title: { display: true, text: '값' }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `값: ${context.parsed.y.toFixed(2)}`;
                        }
                    }
                }
            }
        }
    });
}

function generateNormalData(mean, sd, n) {
    const data = [];
    for (let i = 0; i < n; i++) {
        // Box-Muller 변환
        const u1 = Math.random();
        const u2 = Math.random();
        const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        data.push(mean + sd * z);
    }
    return data;
}

function calculateTTest(a, b) {
    const n1 = a.length, n2 = b.length;
    const mean1 = a.reduce((s, v) => s + v, 0) / n1;
    const mean2 = b.reduce((s, v) => s + v, 0) / n2;
    const var1 = a.reduce((s, v) => s + Math.pow(v - mean1, 2), 0) / (n1 - 1);
    const var2 = b.reduce((s, v) => s + Math.pow(v - mean2, 2), 0) / (n2 - 1);

    const pooledSE = Math.sqrt(var1/n1 + var2/n2);
    const t = (mean1 - mean2) / pooledSE;

    // 근사적 p-value (정규 근사)
    const p = 2 * (1 - normalCDF(Math.abs(t)));

    return { t, p };
}

function normalCDF(x) {
    const a1 =  0.254829592, a2 = -0.284496736, a3 =  1.421413741;
    const a4 = -1.453152027, a5 =  1.061405429, p  =  0.3275911;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x) / Math.sqrt(2);
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t * Math.exp(-x*x);
    return 0.5 * (1.0 + sign * y);
}

// 정규분포 시뮬레이션
function initDistributionSim() {
    const muSlider = document.getElementById('muSlider');
    const sigmaSlider = document.getElementById('sigmaSlider');

    const update = () => {
        const mu = parseInt(muSlider.value);
        const sigma = parseInt(sigmaSlider.value);

        document.getElementById('muValue').textContent = mu;
        document.getElementById('sigmaValue').textContent = sigma;

        updateDistributionChart(mu, sigma);
        progress.simCount++;
        saveProgress();
    };

    muSlider.addEventListener('input', update);
    sigmaSlider.addEventListener('input', update);

    setTimeout(update, 100);
}

function updateDistributionChart(mu, sigma) {
    const labels = [];
    const data = [];

    for (let x = mu - 4*sigma; x <= mu + 4*sigma; x += sigma/5) {
        labels.push(x.toFixed(1));
        const y = (1 / (sigma * Math.sqrt(2 * Math.PI))) *
                  Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
        data.push(y);
    }

    const ctx = document.getElementById('distributionChart').getContext('2d');

    if (distributionChart) {
        distributionChart.destroy();
    }

    distributionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '확률 밀도',
                data: data,
                borderColor: 'rgba(79, 70, 229, 1)',
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: '값' } },
                y: { title: { display: true, text: '확률 밀도' } }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 특성 설명
    document.getElementById('distProperties').innerHTML = `
        <li>평균 (μ) = ${mu}: 분포의 중심</li>
        <li>표준편차 (σ) = ${sigma}: 분포의 퍼짐 정도</li>
        <li>약 68%의 데이터: ${mu - sigma} ~ ${mu + sigma} 구간 (μ ± 1σ)</li>
        <li>약 95%의 데이터: ${mu - 2*sigma} ~ ${mu + 2*sigma} 구간 (μ ± 2σ)</li>
        <li>약 99.7%의 데이터: ${mu - 3*sigma} ~ ${mu + 3*sigma} 구간 (μ ± 3σ)</li>
    `;
}

// 회귀분석 시뮬레이션
function initRegressionSim() {
    const slopeSlider = document.getElementById('slopeSlider');
    const interceptSlider = document.getElementById('interceptSlider');
    const noiseSlider = document.getElementById('noiseSlider');

    const update = () => {
        const slope = parseFloat(slopeSlider.value);
        const intercept = parseInt(interceptSlider.value);
        const noise = parseInt(noiseSlider.value);

        document.getElementById('slopeValue').textContent = slope.toFixed(1);
        document.getElementById('interceptValue').textContent = intercept;
        document.getElementById('noiseValue').textContent = noise;

        updateRegressionChart(slope, intercept, noise);
        progress.simCount++;
        saveProgress();
    };

    slopeSlider.addEventListener('input', update);
    interceptSlider.addEventListener('input', update);
    noiseSlider.addEventListener('input', update);

    setTimeout(update, 100);
}

function updateRegressionChart(slope, intercept, noise) {
    const n = 50;
    const scatterData = [];
    const lineData = [];

    // 잔차 제곱합 계산을 위한 변수
    let ssRes = 0;
    let ssTot = 0;
    let ySum = 0;

    for (let i = 0; i < n; i++) {
        const x = Math.random() * 100;
        const yTrue = slope * x + intercept;
        const yNoise = yTrue + (Math.random() - 0.5) * noise * 2;
        scatterData.push({ x: x, y: yNoise });
        ySum += yNoise;
    }

    const yMean = ySum / n;

    scatterData.forEach(point => {
        const yPred = slope * point.x + intercept;
        ssRes += Math.pow(point.y - yPred, 2);
        ssTot += Math.pow(point.y - yMean, 2);
    });

    const rSquared = ssTot === 0 ? 1 : Math.max(0, 1 - ssRes / ssTot);

    // 회귀선 데이터
    lineData.push({ x: 0, y: intercept });
    lineData.push({ x: 100, y: slope * 100 + intercept });

    const ctx = document.getElementById('regressionChart').getContext('2d');

    if (regressionChart) {
        regressionChart.destroy();
    }

    regressionChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: '데이터 포인트',
                    data: scatterData,
                    backgroundColor: 'rgba(79, 70, 229, 0.6)',
                    pointRadius: 5
                },
                {
                    label: '회귀선',
                    data: lineData,
                    type: 'line',
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 3,
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    min: 0, max: 100,
                    title: { display: true, text: 'X (독립변수)' }
                },
                y: {
                    title: { display: true, text: 'Y (종속변수)' }
                }
            }
        }
    });

    document.getElementById('rSquared').textContent = rSquared.toFixed(3);

    let explanation = '';
    if (rSquared >= 0.7) {
        explanation = `R² = ${rSquared.toFixed(3)}로, 모델이 데이터 변동의 ${(rSquared*100).toFixed(1)}%를 설명합니다. <strong>좋은 적합도</strong>입니다.`;
    } else if (rSquared >= 0.3) {
        explanation = `R² = ${rSquared.toFixed(3)}로, 모델이 데이터 변동의 ${(rSquared*100).toFixed(1)}%를 설명합니다. <strong>중간 정도의 적합도</strong>입니다.`;
    } else {
        explanation = `R² = ${rSquared.toFixed(3)}로, 모델이 데이터 변동의 ${(rSquared*100).toFixed(1)}%만 설명합니다. <strong>낮은 적합도</strong>입니다.`;
    }
    explanation += `<br>회귀식: Y = ${intercept} + ${slope.toFixed(1)}X`;

    document.getElementById('regressionExplanation').innerHTML = explanation;
}

// ===== 학습 현황 =====
function updateProgressDisplay() {
    document.getElementById('learnedConcepts').textContent = progress.learnedConcepts.length;
    document.getElementById('totalConcepts').textContent = concepts.length;

    const accuracy = progress.quizResults.total > 0
        ? Math.round((progress.quizResults.correct / progress.quizResults.total) * 100)
        : 0;
    document.getElementById('quizAccuracy').textContent = accuracy + '%';
    document.getElementById('correctAnswers').textContent = progress.quizResults.correct;
    document.getElementById('totalQuizzes').textContent = progress.quizResults.total;

    document.getElementById('simCount').textContent = progress.simCount;

    // 카테고리별 진행도 (ADSP 과목)
    const categories = [
        { id: 'subject1', name: '1과목: 데이터 이해' },
        { id: 'subject2', name: '2과목: 데이터 분석 기획' },
        { id: 'subject3-stats', name: '3과목: 통계분석' },
        { id: 'subject3-mining', name: '3과목: 데이터 마이닝' }
    ];

    const categoryProgress = document.getElementById('categoryProgress');
    categoryProgress.innerHTML = categories.map(cat => {
        const total = concepts.filter(c => c.category === cat.id).length;
        const learned = concepts.filter(c =>
            c.category === cat.id && progress.learnedConcepts.includes(c.id)
        ).length;
        const percent = total > 0 ? Math.round((learned / total) * 100) : 0;

        return `
            <div class="category-progress-item">
                <label>
                    <span>${cat.name}</span>
                    <span>${learned}/${total}</span>
                </label>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percent}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

function resetProgress() {
    if (confirm('모든 학습 기록을 초기화하시겠습니까?')) {
        progress = {
            learnedConcepts: [],
            quizResults: { correct: 0, total: 0 },
            simCount: 0
        };
        saveProgress();
        updateProgressDisplay();
        renderConceptList('all');
    }
}

// ===== 저장/불러오기 =====
function saveProgress() {
    localStorage.setItem('statlearn_progress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('statlearn_progress');
    if (saved) {
        progress = JSON.parse(saved);
    }
}

// ===== 유틸리티 =====
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function updateChartColors() {
    // 테마 변경 시 차트 리렌더링
    if (correlationChart) {
        const corrSlider = document.getElementById('corrSlider');
        const nSlider = document.getElementById('nSlider');
        updateCorrelationChart(parseFloat(corrSlider.value), parseInt(nSlider.value));
    }
}
