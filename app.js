document.addEventListener("DOMContentLoaded", () => {
    // Lucide アイコン初期化
    if (window.lucide) {
        lucide.createIcons();
    }

    // 1. 時間割データ
    const scheduleData = {
        '月': [
            { period: '1限', name: '英語Ⅰ', room: '講義棟 A201' },
            { period: '2限', name: '情報科学演習', room: '情報演習室 B105' },
            { period: '3限', name: '心理学概論', room: '講義棟 B102' }
        ],
        '火': [
            { period: '2限', name: 'やんばる地域研究', room: '大講義室 101' },
            { period: '4限', name: 'キャリアデザイン', room: 'キャリア支援室' }
        ],
        '水': [
            { period: '1限', name: '異文化理解', room: '国際交流センター 2F' },
            { period: '3限', name: '健康・スポーツ科学', room: '体育館 / 運動場' }
        ],
        '木': [
            { period: '2限', name: '環境科学基礎', room: '講義棟 A304' },
            { period: '3限', name: '観光学入門', room: '講義棟 A101' }
        ],
        '金': [
            { period: '1限', name: 'プログラミング実践', room: '情報演習室 B105' },
            { period: '4限', name: 'ゼミナールⅠ', room: '研究棟 402号室' }
        ]
    };

    function renderSchedule(day) {
        const listContainer = document.getElementById("hero-schedule-list");
        if (!listContainer) return;

        const list = scheduleData[day] || [];
        listContainer.innerHTML = list.map(item => `
            <div class="p-3 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-between">
                <div class="flex items-start gap-3">
                    <span class="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded mt-0.5">${item.period}</span>
                    <div>
                        <p class="text-sm font-bold text-slate-800">${item.name}</p>
                        <p class="text-xs text-slate-500 flex items-center gap-1 mt-0.5">${item.room}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderSchedule('月');

    // 曜日切り替え処理
    const dayButtons = document.querySelectorAll(".hero-day-btn");
    dayButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            dayButtons.forEach(b => {
                b.className = "hero-day-btn py-1.5 rounded-lg text-slate-600 hover:text-slate-900";
            });
            e.target.className = "hero-day-btn py-1.5 rounded-lg bg-blue-600 text-white shadow-sm";
            renderSchedule(e.target.dataset.day);
        });
    });

    // 2. FAQ アコーディオン開閉処理
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            const body = item.querySelector(".faq-body");
            const icon = item.querySelector(".faq-icon");

            if (body) {
                const isHidden = body.classList.contains("hidden");
                
                // 他のFAQを閉じて選択されたものを開く
                document.querySelectorAll(".faq-body").forEach(b => b.classList.add("hidden"));
                document.querySelectorAll(".faq-icon").forEach(i => i.textContent = "+");

                if (isHidden) {
                    body.classList.remove("hidden");
                    icon.textContent = "−";
                }
            }
        });
    });
});