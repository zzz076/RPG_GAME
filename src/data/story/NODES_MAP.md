# 節點拓撲圖 (Nodes Map)

> 用途：快速查看節點流向，不需讀完整 JSON
> 更新日期: 2026-02-26

## 序章 (Prologue)
c01-prologue → c01-gate-observe | c01-gate-ask
c01-gate-observe → c01-entrance
c01-gate-ask → c01-entrance
c01-entrance → c01-roommate | c01-roommate-quiet
c01-roommate → c01-tour-official | c01-zhao-been-there | c01-zhao-shrug
c01-roommate-quiet → c01-roommate | c01-zhao-shrug

## 主線分支 (Main Story Branches)
c01-zhao-been-there → c01-tour-official
c01-tour-official → c01-notice-song | c01-notice-skipped
c01-notice-song → c01-tour-end
c01-notice-skipped → c01-tour-end
c01-tour-end → c01-tell-zhao-song | c01-tell-zhao-lu | c01-zhao-shrug
c01-tell-zhao-song → c01-tell-zhao-lu-2 | c01-zhao-info | c01-zhao-shrug
c01-tell-zhao-lu → c01-zhao-info | c01-zhao-song-add
c01-tell-zhao-lu-2 → c01-zhao-zhou-info | c01-zhao-info
c01-zhao-song-add → c01-zhao-info | c01-first-night
c01-zhao-zhou-info → c01-ask-tomorrow | c01-001
c01-zhao-shrug → c01-ask-tomorrow | c01-001
c01-zhao-info → c01-ask-tomorrow | c01-001
c01-ask-tomorrow → c01-001
c01-first-night → c01-ask-which | c01-001
c01-ask-which → c01-001
c01-001 → c01-library | c01-investigate | c01-chat-zhao | c01-stay-low

## 調查與修煉 (Investigation & Training)
c01-library → c01-basic-method | c01-advanced-sword | c01-ask-lin
c01-investigate → c01-honest-shen | c01-play-dumb-shen | c01-counter-shen
c01-chat-zhao → c01-press-zhao | c01-thank-zhao | c01-ask-balance
c01-stay-low → c01-arena-early | c01-note-zhao-v2 | c01-ignore-note
c01-basic-method → c01-train-hard | c01-observe-lu
c01-advanced-sword → c01-owe-lin | c01-refuse-lin
c01-ask-lin → c01-lin-truth | c01-lin-vague
c01-honest-shen → c01-arena-early | c01-secret-investigate
c01-play-dumb-shen → c01-arena-early | c01-paranoid
c01-counter-shen → c01-weapon-choice | c01-refuse-token
c01-press-zhao → c01-zhao-verdict | c01-zhao-bottom-line
c01-zhao-verdict → c01-arena-early | c01-independent-path
c01-zhao-bottom-line → c01-arena-early
c01-thank-zhao → c01-arena-early | c01-train-hard
c01-ask-balance → c01-ask-patriarch | c01-arena-early
c01-train-hard → c01-arena-full-power | c01-arena-restrained | c01-arena-observe
c01-ask-patriarch → c01-arena-early
c01-owe-lin → c01-copy-records | c01-question-lin-motive
c01-refuse-lin → c01-self-heal | c01-seek-song
c01-lin-truth → c01-basic-method | c01-lin-secret
c01-lin-vague → c01-basic-method | c01-lin-truth
c01-lin-secret → c01-ending-truth-seeker | c01-basic-method
c01-observe-lu → c01-lu-impressed | c01-lu-cautious | c01-lu-patriarch
c01-lu-impressed → c01-train-hard | c01-arena-early
c01-lu-cautious → c01-train-hard | c01-arena-early
c01-lu-patriarch → c01-lu-mission | c01-lu-depth
c01-copy-records → c01-ending-reveal | c01-ending-truth-seeker
c01-question-lin-motive → c01-ending-truth-seeker | c01-ending-puppeteer
c01-weapon-choice → c01-weapon-heavy | c01-weapon-light | c01-arena-early
c01-weapon-heavy [CHECK: 武力 ≥ 6] → c01-arena-early (pass) | c01-arena-early (fail)
c01-weapon-light [CHECK: 敏捷 ≥ 6] → c01-arena-early (pass) | c01-arena-early (fail)
c01-refuse-token → c01-arena-early | c01-train-hard
c01-note-zhao → c01-confirm-lin | c01-arena-early
c01-note-zhao-v2 → c01-arena-early | c01-arena-full-power
c01-ignore-note [CHECK: 敏捷 ≥ 6] → c01-beat-han (pass) | c01-lose-han (fail)
c01-paranoid → c01-arena-restrained | c01-arena-full-power
c01-secret-investigate → c01-arena-full-power | c01-arena-restrained
c01-self-heal → c01-lu-path | c01-arena-early
c01-seek-song → c01-arena-early

## 比武 (Arena)
c01-arena-early → c01-talk-han | c01-mock-han | c01-arena-full-power | c01-han-surprised
c01-mock-han → c01-arena-observe | c01-arena-full-power
c01-han-surprised → c01-arena-observe | c01-arena-full-power
c01-arena-full-power [CHECK: 武力 ≥ 7] → c01-beat-han (pass) | c01-lose-han (fail)
c01-arena-restrained [CHECK: 智謀 ≥ 8] → c01-outsmart-han (pass) | c01-lose-han (fail)
c01-arena-observe → c01-tactical-fight | c01-arena-full-power
c01-tactical-fight → c01-post-arena-humble | c01-post-arena-wait
c01-beat-han → c01-post-arena-wait | c01-seek-shen
c01-outsmart-han → c01-lu-path | c01-post-arena-wait
c01-lose-han → c01-lu-path | c01-independent-path | c01-zhou-path | c01-song-path
c01-talk-han → c01-ask-han-orders | c01-arena-full-power
c01-ask-han-orders → c01-arena-full-power
c01-confirm-lin → c01-tactical-fight
c01-post-arena-humble → c01-song-path | c01-lu-path | c01-zhou-path
c01-post-arena-wait → c01-song-path | c01-lu-path | c01-zhou-path | c01-independent-path
c01-seek-shen → c01-shen-teaching | c01-shen-prophecy
c01-shen-teaching → c01-ending-heir | c01-ending-swordsman
c01-shen-prophecy → c01-ending-heir | c01-ending-new-path

## 長老路線 (Elder Paths)
c01-song-path → c01-song-mission | c01-challenge-song | c01-refuse-song
c01-challenge-song → c01-song-mission
c01-refuse-song → c01-lu-path | c01-zhou-path
c01-song-mission → c01-ending-justice | c01-ending-balance | c01-ending-reveal
c01-lu-path → c01-lu-mission | c01-lu-depth | c01-lu-delay
c01-lu-mission → c01-ending-puppeteer | c01-ending-balance
c01-lu-depth → c01-lu-mission | c01-ending-peacemaker
c01-lu-delay → c01-lu-mission | c01-seek-shen | c01-independent-path
c01-zhou-path → c01-zhou-mission | c01-zhou-detail | c01-read-han
c01-zhou-mission → c01-ending-loyal | c01-ending-double-agent | c01-ending-alliance
c01-zhou-detail → c01-zhou-mission | c01-post-arena-wait
c01-read-han → c01-zhou-mission | c01-post-arena-wait
c01-independent-path [CHECK: 智謀 ≥ 7] → c01-independent-survive (pass) | c01-independent-struggle (fail)
c01-independent-survive → c01-ending-mastermind | c01-ending-cautious
c01-independent-struggle → c01-ending-grassroots | c01-ending-opportunist

## 結局 (Endings)
c01-ending-alliance [ENDING]
c01-ending-balance [ENDING]
c01-ending-cautious [ENDING]
c01-ending-double-agent [ENDING]
c01-ending-grassroots [ENDING]
c01-ending-heir [ENDING]
c01-ending-justice [ENDING]
c01-ending-loyal [ENDING]
c01-ending-mastermind [ENDING]
c01-ending-new-path [ENDING]
c01-ending-opportunist [ENDING]
c01-ending-peacemaker [ENDING]
c01-ending-puppeteer [ENDING]
c01-ending-reveal [ENDING]
c01-ending-swordsman [ENDING]
c01-ending-truth-seeker [ENDING]

---

## 第二章：暗流

c02-001 → c02-look-peak | c02-ask-room | c02-keep-training
c02-look-peak → c02-anomaly | c02-zhao-bell
c02-ask-room → c02-anomaly | c02-wei-missing
c02-keep-training → c02-anomaly
c02-zhao-bell → c02-anomaly
c02-wei-missing → c02-anomaly
c02-anomaly → c02-watch-elders | c02-watch-yan | c02-watch-crowd
c02-watch-elders → c02-letter-grab | c02-follow-yan
c02-watch-yan → c02-chase-yan | c02-letter-grab
c02-watch-crowd → c02-zhao-reaction | c02-letter-grab
c02-letter-grab → c02-zhao-reaction | c02-han-intel | c02-stake-lu | c02-wait-develop
c02-chase-yan → c02-letter-grab | c02-zhao-coin
c02-follow-yan → c02-letter-grab | c02-zhao-coin
c02-zhao-reaction → c02-zhao-theory | c02-zhao-deny | c02-daily-choice
c02-zhao-coin → c02-daily-choice | c02-press-zhao-ch2 | c02-daily-choice
c02-zhao-theory → c02-zhao-suspect | c02-daily-choice
c02-zhao-deny → c02-daily-choice | c02-daily-choice
c02-zhao-suspect → c02-daily-choice
c02-press-zhao-ch2 → c02-daily-choice | c02-daily-choice
c02-han-intel → c02-han-truth | c02-daily-choice
c02-han-truth → c02-daily-choice | c02-daily-choice
c02-stake-lu → c02-zhao-reaction | c02-daily-choice
c02-wait-develop → c02-daily-choice | c02-daily-choice
c02-daily-choice → c02-cliff-meeting | c02-shadow-zhao | c02-seek-lin | c02-meditate
c02-cliff-meeting → c02-yan-reveal | c02-yan-reveal
c02-yan-reveal → c02-mother-story | c02-yan-purpose
c02-mother-story → c02-father-truth | c02-yan-proof
c02-yan-purpose → c02-symbol-library | c02-cliff-end
c02-father-truth → c02-cliff-end
c02-yan-proof → c02-cliff-end
c02-symbol-library → c02-cliff-end
c02-cliff-end → c02-zhao-confession | c02-zhao-confession
c02-shadow-zhao → c02-eavesdrop | c02-confront-both
c02-eavesdrop → c02-caught | c02-hide-check
c02-hide-check → c02-safe-return(pass) | c02-caught(fail)
c02-safe-return → c02-zhao-confession | c02-library-search | c02-seek-shen
c02-caught → c02-zhao-confession | c02-zhao-confession
c02-confront-both → c02-zhao-confession
c02-zhao-confession → c02-ending-together | c02-zhao-hurt | c02-ending-forbidden
c02-zhao-hurt → c02-ending-together | c02-ending-rift
c02-seek-lin → c02-lin-suspicion | c02-lin-location
c02-lin-suspicion → c02-ending-guardian | c02-ending-scheme
c02-lin-location → c02-ending-awaken | c02-ending-fracture
c02-meditate → c02-wei-reveal | c02-wei-cautious
c02-wei-reveal → c02-ending-awaken | c02-ending-forbidden
c02-wei-cautious → c02-ending-awaken | c02-ending-forbidden
c02-library-search → c02-lu-confrontation | c02-lu-confrontation
c02-lu-confrontation → c02-ending-scheme | c02-ending-fracture
c02-seek-shen → c02-ending-south | c02-ending-guardian
c02-ending-rift → c03-001
c02-ending-together → c03-001
c02-ending-scheme → c03-001
c02-ending-forbidden → c03-001
c02-ending-south → c03-001
c02-ending-fracture → c03-001
c02-ending-guardian → c03-001
c02-ending-awaken → c03-001

---

## 第三章：風暴

### 開場（禁地爆發）
c03-001 → c03-check-damage | c03-find-allies | c03-stay-alert
c03-check-damage → c03-shen-warn | c03-touch-crack
c03-shen-warn → c03-crisis
c03-touch-crack → c03-crisis
c03-find-allies → c03-crisis | c03-find-wei
c03-find-wei → c03-crisis
c03-stay-alert → c03-crisis

### 三方撕破臉 → 四路分支
c03-crisis → c03-side-song | c03-side-lu | c03-side-zhou | c03-side-none

### 宋長老路線
c03-side-song → c03-song-patrol
c03-song-patrol → c03-stop-wei | c03-let-wei
c03-stop-wei → c03-song-quake
c03-let-wei → c03-song-quake
c03-song-quake → c03-song-admit
c03-song-admit → c03-before-gate

### 陸長老路線
c03-side-lu → c03-lu-deal
c03-lu-deal → c03-lu-lin | c03-lu-counter | c03-lu-refuse
c03-lu-counter → c03-lu-lin
c03-lu-refuse → c03-side-none | c03-lu-lin
c03-lu-lin → c03-lu-passage
c03-lu-passage → c03-before-gate

### 周長老路線
c03-side-zhou → c03-zhou-blocked
c03-zhou-blocked → c03-zhou-force-check | c03-zhou-truth
c03-zhou-force-check [CHECK: 武力 ≥ 7] → c03-zhou-force-pass (pass) | c03-zhou-truth (fail)
c03-zhou-force-pass → c03-zhou-truth
c03-zhou-truth → c03-zhou-yan
c03-zhou-yan → c03-zhou-return
c03-zhou-return → c03-before-gate

### 獨立路線
c03-side-none → c03-shen-order
c03-shen-order → c03-call-zhao | c03-call-wei-join | c03-before-gate
c03-call-zhao → c03-before-gate
c03-call-wei-join → c03-before-gate

### 歸墟殿
c03-before-gate → c03-forbidden-gate
c03-forbidden-gate [CHECK: 內力 ≥ 8] → c03-gate-open (pass) | c03-gate-struggle (fail)
c03-gate-open → c03-enter
c03-gate-struggle → c03-enter
c03-enter → c03-sect-master | c03-read-walls
c03-sect-master → c03-heart-sutra | c03-ask-price
c03-read-walls → c03-sect-master | c03-heart-sutra
c03-ask-price → c03-heart-sutra
c03-heart-sutra → c03-guardian
c03-guardian → c03-guardian-pass
c03-guardian-pass → c03-final-choice

### 最終選擇
c03-final-choice → c03-master-check | c03-ending-heir | c03-ending-reform | c03-other-choice
c03-master-check [CHECK: 內力 ≥ 10] → c03-ending-master (pass) | c03-ending-master-fail (fail)
c03-other-choice → c03-ending-sacrifice | c03-ending-seal | c03-ending-exile | c03-ending-shadow

### 結局（8個）
c03-ending-master [ENDING] — 破繭：修煉完整功法成功，經脈重鑄
c03-ending-master-fail [ENDING] — 碎道：修煉失敗，經脈碎裂
c03-ending-heir [ENDING] — 傳燈：功法交給沈峻
c03-ending-reform [ENDING] — 破舊立新：公開功法
c03-ending-sacrifice [ENDING] — 燃燈：犧牲力量救宗主
c03-ending-seal [ENDING] — 再封：重新封印歸墟殿
c03-ending-exile [ENDING] — 南渡：帶功法去南疆
c03-ending-shadow [ENDING] — 暗主：獨佔功法
