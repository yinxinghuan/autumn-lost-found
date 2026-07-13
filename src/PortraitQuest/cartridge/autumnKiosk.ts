import type { Choice, EventCard, Localized, PortraitState, StatKey, ThemeCartridge } from '../types';

const l = (zh: string, en: string): Localized => ({ zh, en });
const choice = (
  zh: string,
  en: string,
  outcomeZh: string,
  outcomeEn: string,
  effects: Partial<Record<StatKey, number>>,
  portrait: PortraitState,
  addFlags: string[] = [],
): Choice => ({ label: l(zh, en), outcome: l(outcomeZh, outcomeEn), effects, portrait, addFlags });

const events: EventCard[] = [
  {
    id: 'yellow-umbrella', deskCode: 'A-01', minRound: 1, maxRound: 3,
    title: l('认得每场雨的黄伞', 'The Yellow Umbrella That Knows Every Rain'),
    body: l('一把黄伞自己走进亭子，伞面还滴着三年前的雨。两个人同时说它属于自己。', 'A yellow umbrella walks into the kiosk, dripping rain from three years ago. Two people claim it.'),
    choices: [
      choice('让伞自己选择', 'Let the umbrella choose', '伞倒向那个记得雨声的人。', 'It leans toward the one who remembers the rain.', { trust: 12, truth: 9, order: -8 }, 'confident', ['follow_memory', 'heard_name']),
      choice('核对领取凭证', 'Check the claim tickets', '凭证无误，伞却一直望着另一个人。', 'The ticket is correct. The umbrella keeps watching the other person.', { order: 13, trust: -8, truth: -5 }, 'worried', ['follow_rules']),
    ],
  },
  {
    id: 'undeveloped-camera', deskCode: 'B-07', minRound: 1, maxRound: 5,
    title: l('拍过明天的旧相机', 'The Camera That Photographed Tomorrow'),
    body: l('旧相机里只剩一张底片。对着光看，照片里是明天关门后的你。', 'One frame remains in an old camera. Against the light, it shows you after tomorrow’s closing time.'),
    choices: [
      choice('洗出照片', 'Develop the frame', '照片背面浮出一句：“别替所有人记住。”', 'A sentence appears on the back: “Do not remember for everyone.”', { calm: -7, truth: 14, order: -3 }, 'worried', ['follow_memory', 'tomorrow_key']),
      choice('封存相机', 'Seal the camera', '快门在盒子里又响了一次。', 'The shutter clicks once more inside the box.', { order: 10, calm: 5, truth: -9 }, 'defiant', ['follow_rules']),
    ],
  },
  {
    id: 'red-scarf', deskCode: 'S-12', minRound: 1, maxRound: 6,
    title: l('还带着体温的红围巾', 'The Red Scarf Still Warm'),
    body: l('雨停很久了，红围巾却仍有体温。寻找它的老人说，主人已经离开这座城。', 'The rain stopped hours ago, but a red scarf is still warm. An old man says its owner left the city.'),
    choices: [
      choice('把围巾交给老人', 'Give him the scarf', '他围上它，终于想起回家的路。', 'He wraps it on and remembers the way home.', { trust: 14, calm: 5, order: -8 }, 'confident', ['guest_ally']),
      choice('等待真正主人', 'Wait for the owner', '温度慢慢退去，领取格依然整齐。', 'The warmth fades. The claim shelf remains orderly.', { order: 12, trust: -10, truth: 3 }, 'neutral', ['follow_rules']),
    ],
  },
  {
    id: 'blank-postcard', deskCode: 'P-00', minRound: 2, maxRound: 7,
    title: l('没有地址的明信片', 'The Postcard Without an Address'),
    body: l('空白明信片每次翻面都会出现不同的公园出口，唯独没有寄件地址。', 'Each time the blank postcard turns over, it shows a different park exit—but never an address.'),
    choices: [
      choice('写下此刻的位置', 'Write where you are', '墨水变成一条通往旧长椅的湿路。', 'The ink becomes a wet path to an old bench.', { truth: 12, trust: 6, calm: -5 }, 'worried', ['follow_memory', 'mirror_knows']),
      choice('盖上无法投递', 'Mark it undeliverable', '邮戳落下时，亭子短暂消失了一秒。', 'As the stamp lands, the kiosk vanishes for one second.', { order: 11, truth: -9, calm: -4 }, 'defiant', ['follow_rules']),
    ],
  },
  {
    id: 'warm-thermos', deskCode: 'T-18', minRound: 2, maxRound: 7,
    title: l('永远倒不空的保温杯', 'The Thermos That Never Empties'),
    body: l('杯里是姜茶。每倒出一杯，失物亭外就多一个淋雨的人。', 'The thermos holds ginger tea. Each cup poured brings another rain-soaked stranger to the kiosk.'),
    choices: [
      choice('继续倒茶', 'Keep pouring', '陌生人围成一圈，替彼此说出了名字。', 'The strangers form a circle and speak one another’s names.', { trust: 15, calm: 5, order: -12 }, 'confident', ['guest_ally', 'freed_names']),
      choice('拧紧杯盖', 'Close the lid', '雨里的人影散去，杯身变得冰冷。', 'The figures dissolve into rain. The thermos turns cold.', { order: 13, trust: -12, calm: 3 }, 'defiant', ['follow_rules']),
    ],
  },
  {
    id: 'music-box', deskCode: 'M-04', minRound: 3, maxRound: 8,
    title: l('只会播放告别的音乐盒', 'The Music Box That Only Says Goodbye'),
    body: l('音乐盒没有发条，却在每个离开公园的人背后响起同一段旋律。', 'The music box has no key, yet plays the same melody behind everyone leaving the park.'),
    choices: [
      choice('跟着旋律走一段', 'Follow the melody', '旋律停在一棵刻着你名字的树前。', 'It stops at a tree carved with your name.', { truth: 13, calm: -9, trust: 4 }, 'worried', ['follow_memory', 'borrowed_face']),
      choice('用棉布包住它', 'Wrap it in cloth', '音乐变小，却从你的围裙口袋里继续。', 'The music softens, then continues inside your apron pocket.', { order: 9, calm: -5, truth: -7 }, 'neutral', ['follow_rules']),
    ],
  },
  {
    id: 'tiny-mitten', deskCode: 'K-02', minRound: 3, maxRound: 8,
    title: l('一直指向北边的手套', 'The Mitten Pointing North'),
    body: l('一只儿童手套躺在柜台上，无论怎样放都把拇指转向北边。', 'A child’s mitten lies on the counter. However you place it, its thumb turns north.'),
    choices: [
      choice('沿着方向寻找', 'Follow its direction', '你找到另一只手套，里面握着一颗温热栗子。', 'You find its pair holding a warm chestnut.', { trust: 12, truth: 8, calm: -7 }, 'confident', ['follow_memory']),
      choice('登记后收入抽屉', 'Log and store it', '抽屉整夜轻轻敲着北侧木板。', 'The drawer taps its north wall all evening.', { order: 12, trust: -8, calm: -3 }, 'worried', ['follow_rules']),
    ],
  },
  {
    id: 'rain-bottle', deskCode: 'R-31', minRound: 4, maxRound: 9,
    title: l('装着一场雨的玻璃瓶', 'A Bottle Holding One Rainstorm'),
    body: l('瓶塞松了一点，亭内便落起只淋湿旧照片的雨。', 'The cork loosens. Rain falls inside the kiosk, wetting only old photographs.'),
    choices: [
      choice('拔开瓶塞', 'Open the bottle', '照片洗净后，所有被剪掉的人重新出现。', 'The photographs clear, restoring everyone once cut away.', { truth: 15, trust: 6, order: -12 }, 'worried', ['follow_memory', 'read_ledger']),
      choice('用蜡封住', 'Seal it with wax', '雨停了，照片里的人却都转过身去。', 'The rain stops. Everyone in the photos turns away.', { order: 14, truth: -11, trust: -5 }, 'defiant', ['follow_rules']),
    ],
  },
  {
    id: 'empty-collar', deskCode: 'D-09', minRound: 4, maxRound: 10,
    title: l('自己散步的项圈', 'The Collar Taking Itself for a Walk'),
    body: l('旧皮项圈拖着牵引绳经过柜台，停下等你决定往哪条路走。', 'An old collar drags its leash past the counter and waits for you to choose a path.'),
    choices: [
      choice('让它带路', 'Let it lead', '它带回一只走失很久、却没有变老的狗。', 'It returns with a long-lost dog that has not aged.', { trust: 14, calm: 6, order: -10 }, 'confident', ['guest_ally', 'freed_names']),
      choice('把项圈挂回墙上', 'Hang it back up', '牵引绳在墙上画出一扇小门。', 'The leash sketches a small door on the wall.', { order: 10, truth: 5, trust: -9 }, 'neutral', ['follow_rules']),
    ],
  },
  {
    id: 'remembering-bench', deskCode: 'B-44', minRound: 5, maxRound: 10,
    title: l('记得所有人的长椅', 'The Bench That Remembers Everyone'),
    body: l('公园长椅送来一块掉落的木板。触碰它时，你听见每个坐过这里的人。', 'A park bench sends in a fallen plank. Touch it, and you hear everyone who ever sat there.'),
    choices: [
      choice('听完所有声音', 'Listen to every voice', '最后一个声音是你，却说着从未说过的话。', 'The final voice is yours, saying words you never spoke.', { truth: 16, calm: -12, order: -4 }, 'exhausted', ['follow_memory', 'wrote_truth']),
      choice('把木板装回去', 'Return the plank', '长椅恢复安静，只替你保留一个空位。', 'The bench falls quiet, keeping one empty place for you.', { order: 10, calm: 7, truth: -9 }, 'neutral', ['follow_rules']),
    ],
  },
  {
    id: 'groundhog', deskCode: 'G-23', minRound: 5,
    title: l('抱着领取牌的土拨鼠', 'The Groundhog With a Claim Token'),
    body: l('一只湿漉漉的土拨鼠把领取牌放在柜台上。牌上画着一整个秋天。', 'A rain-soaked groundhog places a claim token on the counter. It depicts an entire autumn.'),
    choices: [
      choice('归还它的秋天', 'Return its autumn', '所有落叶短暂升回枝头，然后温柔落下。', 'Every leaf rises to its branch, then falls gently again.', { trust: 13, truth: 10, order: -9 }, 'confident', ['guest_ally', 'chose_self']),
      choice('要求更具体的描述', 'Ask for details', '它认真比划到日落，队伍排到了公园门口。', 'It gestures earnestly until sunset while the queue reaches the park gate.', { order: 8, calm: -8, trust: -7 }, 'worried', ['follow_rules']),
    ],
  },
  {
    id: 'leaf-envelope', deskCode: 'L-17', minRound: 6,
    title: l('寄给冬天的落叶信', 'The Leaf Letter Addressed to Winter'),
    body: l('一片枫叶折成信封，收件人写在你记不起来的那一面。', 'A maple leaf is folded into an envelope. The addressee is written on the side you cannot remember.'),
    choices: [
      choice('替它送到林中', 'Deliver it to the trees', '树冠传来像掌声一样的沙沙声。', 'The canopy answers with rustling like applause.', { truth: 12, trust: 8, order: -8 }, 'confident', ['follow_memory', 'wrote_truth']),
      choice('放进待认领箱', 'File it as unclaimed', '箱子里所有纸张同时变成落叶。', 'Every paper in the box turns into a leaf.', { order: 10, calm: -6, truth: -9 }, 'worried', ['follow_rules']),
    ],
  },
  {
    id: 'tomorrow-photo', deskCode: 'N-24', minRound: 7, requiresAny: ['tomorrow_key'],
    title: l('明天的照片回来认领你', 'Tomorrow’s Photograph Claims You'),
    body: l('相机里的那张照片来到柜台：画面中的你伸出手，索要现在的记忆。', 'The camera’s photograph arrives. The you inside it reaches out, asking for your present memory.'),
    choices: [
      choice('问照片需要什么', 'Ask what it needs', '它只想知道今天有没有人回家。', 'It only wants to know whether anyone made it home today.', { truth: 14, trust: 5, calm: -9 }, 'worried', ['follow_memory', 'chose_self']),
      choice('把照片翻过去', 'Turn it face down', '背面出现一个新的日落时间。', 'A new sunset time appears on the back.', { order: 10, calm: 5, truth: -12 }, 'defiant', ['follow_rules']),
    ],
  },
  {
    id: 'postcard-return', deskCode: 'P-∞', minRound: 7, requiresAny: ['mirror_knows', 'borrowed_face'],
    title: l('明信片找到了寄件人', 'The Postcard Finds Its Sender'),
    body: l('没有地址的明信片重新出现，正面画着此刻的你，背面只差一个签名。', 'The addressless postcard returns. It shows you now; the back lacks only a signature.'),
    choices: [
      choice('签下自己的名字', 'Sign your name', '公园所有出口同时通向失物亭。', 'Every park exit leads to the kiosk at once.', { truth: 15, calm: -8, order: -5 }, 'defiant', ['follow_memory', 'rejected_double']),
      choice('写“查无此人”', 'Write “unknown sender”', '画像里的你转过身，走进了邮票。', 'Your portrait turns away and walks into the stamp.', { order: 9, calm: 8, truth: -14 }, 'exhausted', ['follow_rules', 'accepted_double']),
    ],
  },
  {
    id: 'sketchbook', deskCode: 'C-16', minRound: 7,
    title: l('画完才会出现的速写本', 'The Sketchbook That Draws What Returns'),
    body: l('每归还一件失物，速写本就多画出一条回家的路。现在它画到了你的脚边。', 'Each returned object adds a path home to the sketchbook. The newest path reaches your feet.'),
    choices: [
      choice('沿着纸上的路走', 'Follow the paper path', '你走了三步，看见失物亭没有你也在运转。', 'Three steps in, you see the kiosk operating without you.', { calm: 8, truth: 12, order: -9 }, 'confident', ['follow_memory', 'chose_self']),
      choice('把最后一页撕掉', 'Tear out the last page', '路消失了，速写本从第一页重新画你。', 'The path vanishes. The book begins drawing you from page one.', { order: 11, truth: -11, trust: -5 }, 'defiant', ['follow_rules']),
    ],
  },
  {
    id: 'sunset-clock', deskCode: '17:42', minRound: 8,
    title: l('拒绝日落的公园钟', 'The Park Clock Refuses Sunset'),
    body: l('钟停在 17:42，公园的影子却越来越长。最后一位访客说，只要你关亭，时间就会继续。', 'The clock stops at 17:42 while shadows lengthen. The last visitor says time resumes only if you close.'),
    choices: [
      choice('再等一个人', 'Wait for one more person', '远处有人奔来，手里拿着你遗失很久的东西。', 'Someone runs toward you holding something you lost long ago.', { trust: 14, truth: 9, calm: -8 }, 'worried', ['guest_ally', 'follow_memory']),
      choice('准时关亭', 'Close on time', '秒针恢复，门外那个人永远差一步。', 'The second hand moves. The runner remains forever one step away.', { order: 15, trust: -14, calm: 3 }, 'defiant', ['follow_rules', 'kiosk_ally']),
    ],
  },
  {
    id: 'last-basket', deskCode: 'LAST', minRound: 10,
    title: l('最后一篮无人认领物', 'The Final Basket of Unclaimed Things'),
    body: l('篮子里只有四样东西：一段温暖、一条规则、一次信任和一段记忆。标签都写着你的名字。', 'The basket holds four things: warmth, a rule, a trust, and a memory. Every tag bears your name.'),
    choices: [
      choice('承认它们属于自己', 'Claim them as yours', '黄铜叶形针打开，里面藏着回家的方向。', 'The brass leaf pin opens, revealing the direction home.', { calm: 8, trust: 10, truth: 10, order: -6 }, 'resolved', ['chose_self', 'wrote_truth']),
      choice('留给下一位失主', 'Leave them for the next owner', '篮子变轻了，围裙却再也脱不下来。', 'The basket grows lighter. Your apron can no longer be removed.', { order: 13, trust: 5, truth: -12, calm: -5 }, 'exhausted', ['accepted_double', 'follow_rules']),
    ],
  },
  {
    id: 'unclaimed-goodbye', deskCode: 'BYE', minRound: 9,
    title: l('没人认领的一句再见', 'An Unclaimed Goodbye'),
    body: l('关亭前，柜台上多出一句没有声音的“再见”。它不属于任何登记过的人。', 'Before closing, a silent goodbye appears on the counter. It belongs to no registered visitor.'),
    choices: [
      choice('替它找到收件人', 'Find who needs it', '整座公园轻轻回答：“收到了。”', 'The whole park answers softly, “Received.”', { trust: 13, truth: 11, calm: -7 }, 'confident', ['freed_names', 'wrote_truth']),
      choice('归入无法识别', 'File it as unidentified', '那句再见落进抽屉，变成你的声音。', 'The goodbye falls into the drawer and takes your voice.', { order: 12, calm: -9, truth: -8 }, 'worried', ['follow_rules']),
    ],
  },
];

export const autumnKioskCartridge: ThemeCartridge = {
  id: 'autumn-kiosk',
  copy: {
    zh: {
      title: '秋日失物亭', eyebrow: 'THE AUTUMN LOST & FOUND', subtitle: '{name}，日落前还有东西想回家。',
      start: '打开失物亭', guide: '十二次认领。四项状态。等到日落。', round: '第 {round} / 12 次认领',
      continue: '继续等候', score: '本次记录', best: '最佳记录', again: '再开一天', home: '返回公园',
      dawn: '日落到了', failed: '提前闭亭', resultFor: '{name} 的秋日记录', loading: '正在整理领取牌…',
      hudTime: '17:42', badge: '守亭人',
    },
    en: {
      title: 'AUTUMN LOST & FOUND', eyebrow: 'THE PARK KIOSK', subtitle: '{name}, something still wants to go home before sunset.',
      start: 'Open the kiosk', guide: 'Twelve claims. Four gauges. Make it to sunset.', round: 'Claim {round} / 12',
      continue: 'Keep the kiosk open', score: 'Today’s record', best: 'Best record', again: 'Open another day', home: 'Return to the park',
      dawn: 'Sunset found you', failed: 'Kiosk closed early', resultFor: '{name}’s autumn record', loading: 'Sorting the claim tags…',
      hudTime: '17:42', badge: 'KEEPER',
    },
  },
  statLabels: {
    calm: l('温暖', 'WARMTH'), order: l('秩序', 'ORDER'), trust: l('信任', 'TRUST'), truth: l('记忆', 'MEMORY'),
  },
  events,
  discoveryFlags: ['heard_name', 'tomorrow_key', 'mirror_knows', 'borrowed_face', 'read_ledger', 'wrote_truth'],
  specialEndingFlags: ['wrote_truth', 'chose_self'],
  midpoint: {
    investigate: {
      title: l('所有失物同时想起了主人', 'EVERY LOST THING REMEMBERS'),
      body: l('第六次认领后，伞、围巾、相机和落叶同时转向公园深处。它们也记得你遗失过什么。', 'After the sixth claim, every umbrella, scarf, camera and leaf turns toward the park. They remember what you lost, too.'),
    },
    obey: {
      title: l('领取簿替你排好了余生', 'THE LEDGER PLANS YOUR FOREVER'),
      body: l('第六次认领后，所有格子都恢复整齐。最后一页却把你登记为永不关亭的保管人。', 'After the sixth claim, every shelf is perfect. The final page registers you as keeper forever.'),
    },
  },
  endings: {
    truth: { id: 'truth', title: l('把记忆送回家的人', 'THE KEEPER WHO RETURNED MEMORY'), summary: l('你没有替所有人保存过去，而是让每段记忆找到愿意带它回家的人。', 'You did not keep everyone’s past. You helped each memory find someone willing to carry it home.') },
    trust: { id: 'trust', title: l('公园里最后的暖灯', 'THE PARK’S LAST WARM LIGHT'), summary: l('日落后仍有人记得你的善意。失物亭关了，灯却为迟到的人亮着。', 'After sunset, people remember your kindness. The kiosk closes, but its light waits for late arrivals.') },
    order: { id: 'order', title: l('一件不差的保管人', 'THE FLAWLESS KEEPER'), summary: l('每样东西都回到正确格子，只有一篮属于你的记忆仍未领取。', 'Every object returns to its proper shelf—except one basket of memories bearing your name.') },
    calm: { id: 'calm', title: l('留住秋日温度的人', 'THE ONE WHO KEPT AUTUMN WARM'), summary: l('你让失物亭在最冷的雨里仍像一个可以回来的地方。', 'Even in the coldest rain, you made the kiosk feel like somewhere one could return.') },
    balanced: { id: 'balanced', title: l('刚好赶上的日落', 'JUST IN TIME FOR SUNSET'), summary: l('温暖、秩序、信任和记忆彼此没有吞没。你关上亭门，也带走了自己。', 'Warmth, order, trust and memory stayed in balance. You closed the kiosk and took yourself home.') },
    fail_calm: { id: 'fail_calm', title: l('失去温度的亭子', 'THE KIOSK WITHOUT WARMTH'), summary: l('温暖耗尽后，所有归还都只剩手续，再也没人记得为何回来。', 'With warmth gone, every return became paperwork. No one remembered why they came back.') },
    fail_order: { id: 'fail_order', title: l('落叶淹没了领取簿', 'BURIED UNDER LEAVES'), summary: l('秩序归零，名字、物品和路径混在一起，公园再也找不到出口。', 'Order collapsed. Names, objects and paths tangled until the park lost every exit.') },
    fail_trust: { id: 'fail_trust', title: l('无人前来认领', 'NO ONE CAME TO CLAIM'), summary: l('信任耗尽后，人们宁愿忘记，也不愿再把故事交给失物亭。', 'When trust ran out, people chose forgetting over leaving their stories with the kiosk.') },
    fail_truth: { id: 'fail_truth', title: l('被留在抽屉里的名字', 'THE NAME LEFT IN A DRAWER'), summary: l('记忆耗尽后，你仍会整理每件失物，却不再知道围裙上的名字是谁。', 'When memory failed, you could still sort every object—but no longer knew the name on your apron.') },
  },
};
