export default {
  amount: "{amount,number}",
  navbar: {
    home: "首页",
    trade: "去中心化交易",
    dex: "去中心交易",
    wallet: "钱包",
    settings: "设置",
    portfolio: "投资组合",
    account: "账户",
    subs: {
      copy: '复制',
      copy_success: '复制地址成功',
      copy_failed: '复制地址失败',
      unlock: '解锁钱包',
      generate: '生成钱包',
      export: "导出Keystore",
      help: '帮助',
      tools: '工具',
      qrcode: '二维码',
      receive: '收款',
      send: '转账',
      trade: '交易',
      airdrop: '空投',
      quit: '退出',
      address: '地址'
    },
  },
  order: {
    buy: '买',
    sell: '卖',
    receive: '接收',
    convert: "转换",
    buying: "您正在购买",
    selling: "您正在出售",
    lrcfee: "订单交易费",
    margin: "分润比例",
    since: "订单生效时间",
    till: "订单失效时间",
    sign: "签名信息",
    raw: "未签名的订单",
    signed: "签名的订单",
    place_tip: "提交订单是免费的，不需要消耗gas",
    placing_order: "下单结果",
    place_success: "下单成功!",
    place_success_tip: '恭喜, 您的订单已经可以等待交易',
    place_warn: '您的订单只能部分撮合：',
    balance_not_enough: '{token} 余额不足',
    submit: "提交订单",
    confirm_cancel_order: "您确定要取消该笔订单？",
    confirm_cancel_all: "您确定要取消全部{pair}订单？",
    cancel_order_success: "取消订单成功",
    cancel_order_failed: "取消订单失败",
    cancel_all_success: "取消全部{pair}订单成功",
    cancel_all_failed: "取消全部{pair}订单失败",
    yes: "确认",
    no: "取消",
    cancel_all: "取消全部",
    refresh: "刷新"
  },
  ticker: {
    last: '最新价',
    change: '涨跌',
    low: '最低价',
    high: '最高价',
    vol: '成交量',
    market: '市场',
    favorites: '自选',
  },
  exchanges: {
    loopr: '路印DEX 市场行情',
    binance: '币安 市场行情',
    okex: 'Okex 市场行情',
    huobi: '火币 市场行情',
  },
  home: {
    title: '路印钱包及去中心化交易所',
    subtitle: '安全高流动性的交易你的代币',
  },
  buttons: {
    unlock_wallet: '解锁钱包',
    generate_wallet: '生成钱包',
    try_demo: '演示钱包',
  },
  tabs: {
    my_open_orders: '我的当前订单',
    my_recent_trades: '我的历史成交',
    my_portfolio: '投资分析',
    my_assets: '我的资产',
    my_orders: '我的订单',
    my_trades: '历史成交',
  },
  txs: {
    title: '交易',
    status: '状态',
    status_pending: '交易处理中',
    status_success: '交易成功',
    status_failed: '交易失败',
    type: '类型',
    type_transfer: '转账',
    type_convert: '转换',
    type_convert_title_eth: 'ETH 转换为 WETH',
    type_convert_title_weth: 'WETH 转换为 ETH',
    type_receive: '收款',
    buy: "购买",
    type_enable: '授权',
    type_enable_title: "授权 {symbol} 进行撮合交易",
    type_transfer_title: "转出 {symbol}",
    type_receive_title: "接收 {symbol}",
    cancel_order: '取消订单',
    cancel_all: '取消全部订单',
    cancel_pair_order: "取消{pair}订单",
    others: "其他",
    balance_not_enough: "余额不足以支持您所有有效的订单完全成交",
    value:"金额",
    tx_hash:"交易Hash",
    block_num:"块高度",
    to:"接收地址",
    confirm_time:"确认时间",
    tx_detail:"交易详情",
    success:"成功",
    failed:"失败",
    pending:"进行中"
  },
  orders: {
    order: "订单",
    time: "时间",
    market: '市场',
    status: '状态',
    status_opened: '进行中订单',
    status_completed: '已成交订单',
    status_canceled: '已取消订单',
    status_expired: '已过期订单',
    side: '方向',
    side_sell: '卖',
    side_buy: '买',
    create_time: '提交时间',
    update_time: '更新时间',
    amount: '数量',
    price: '价格',
    total: '金额',
    LrcFee: 'LRC撮合费',
    filled: '成交率',
    options: "动作",
    balance_not_enough: "{token} 余额不足!",
    balance: "余额",
    required: "要求",
    lacked: "缺少",
    receive: "接收 {token}",
    buy: "买 {token}",
    convert: "转ETH到WETH",
    token_not_enough: "代币数量不足",
    already_add:"您已经添加过该代币!",
    sell_amount:'卖出数量',
    buy_amount:'买入数量',
    order_detail:"订单详情",
    basic_detail:"基础详情",
    fill_detail:"撮合详情"
  },
  global: {
    all: '全部',
    market: '市场',
    options: '操作',
  },
  settings: {
    preference: "偏好",
    trade: "交易",
    relay: "中继",
    language: "语言",
    currency: "货币",
    timezone: "时区",
    reset: "重置",
    contract: "合约版本",
    ttl: "有效期",
    ttl_tip: "请输入合法的整数",
    lrcfee: "LRC 手续费",
    margin: "分润比例",
    gasPrice: "Gas价格",
    slow: "慢",
    fast: "快",
    edit: "编辑",
    save: "保存",
    delete: "删除",
    addRelay: "添加中继",
    editRelay: "编辑中继",
    chooseRelay: "选择中继",
    relayName: "中继名称",
    relayUrl: "中继URL地址",
    relayName_tip: "请输入合法，不同的中继名称",
    relayUrl_tip: "请输入合法的URL地址"
  },
  trade: {
    orderForm: "订单信息",
    sell: "卖出",
    buy: "买入",
    balance: "余额",
    price: "单价",
    price_verification_message: "请输入合法的单价",
    amount: "数量",
    amount_verification_message: "请输入合法的数量",
    available_amount: "有效数量",
    total: "总计",
    advanced: "高级选项",
    time_to_live: "订单有效时间",
    more: "更多",
    popular_option: "常用选项",
    integer_verification_message: "请输入数字类型",
    second: "秒",
    minute: "分钟",
    hour: "小时",
    day: "天",
    week: "周",
    month: "月",
    lrc_fee: "手续费",
    margin_split: "分润比例",
    place_order: "提交订单",
    unlock_your_wallet: "解锁你的钱包",
    to_trade: "去交易",
    lrcFee_increased: "通过您的设定，您当前订单需要支付的lrcFee 是 {userSet}LRC, 我们自动增加至下单允许最小的值: {increased}LRC, 您是否继续下单?",
    notice: "请注意",
    placing_order: '订单提交结果',
    place_order_failed: "订单提交失败 !",
    you_should_do_things: "你可以按以下提示尝试",
    failed_reasons: "失败原因如下：",
    why: "为什么",
    balance_not_enough: '{token} 余额不足, 还需要 {required}',
    receive: '去收款',
    to_buy: '去购买',
    time_to_live_input_place_holder: '订单有效时间是多久？',
    ring: "环哈希",
    tips_time_to_live: "您希望提交的订单有效时间是多久？</br>设置较长的有效时间，可以给矿工足够时间寻找可匹配订单，提高撮合成功率。</br>如果设置的有效时间很短，您的订单有可能无法完成撮合。</br>推荐您将有效时间设置为大于1小时。",
    tips_lrc_fee: "LRC Fee是订单撮合成功后您愿意支付矿工的手续费，费用按订单金额的千分比计算。</br>矿工撮合订单需要花费gas，所以只有当您设置的撮合费用合理时，矿工才会愿意帮您撮合订单。</br>我们不推荐您修改这个值，除非您已经充分理解它的含义。",
    tips_margin_split: "当您没有足够的LRC支付撮合手续费时，可以设置分润比例来支付手续费。</br>分润和LRC手续费只能取其一，所以不用担心会支付两次手续费。</br>我们不推荐您修改这个值，除非您已经充分理解它的含义。",
    confirm_warn_ledger: "请在您的Ledger设备上确认签名信息, 之后再回来提交订单",
    confirm_warn_trezor: "请在您的Trezor设备上确认签名信息, 之后再回来提交订单",
    confirm_warn_metamask: "您的MetaMask浏览器插件上会提示您签名, 请确认后再回来提交订单",
    place_order_trezor_unsupport: '无法下单',
    place_order_trezor_unsupport_tips: '在您下单时我们会将您的订单信息签名后发送给中继服务, 但Trezor暂时不支持签名操作, 所以在您用Trezor解锁钱包时无法下单，但作为钱包的功能（转账等）不受影响',
    place_order_watch_only_tips: '您当前使用地址解锁钱包，无法签名交易, 您可以切换其他方式解锁钱包后下单',
    custom_lrc_fee:'设置本订单有效的LRC手续费',
    custom_time_to_live:'设置本订单有效的过期时间',
    custom_option_fee:'设置本订单有效的值',
    custom_lrc_fee_title:'设置本订单生效的LRC手续费',
    custom_time_to_live_title:'设置本订单生效的有效时间',
    send_failed: '失败',
    failed_fetch_data:'从服务器获取数据失败, 请稍后在尝试',
    eth_is_required:'由于需要ETH支付油费',
    lrcfee_is_required:'由于需要支付LRC手续费',
  },
  trades:{
    side: '方向',
    side_sell: '卖出',
    side_buy: '买入',
  },
  token: {
    convert_title: "转换",
    amount: "数量",
    amount_verification_message: "请输入合法的数量",
    convert_max: "最大数量",
    min_gas_remain_warn: "我们为您保留0.1 ETH作为油费以保证后续可以发送交易",
    no_eth_balance_warn: "您将没有足够的ETH作为油费发送交易",
    convert_confirm: "是的，马上转换！",
    send_title: "发送",
    result_failed: "您{do} {amount} {token} 失败, 原因:{reason}",
    completed: "成功",
    result_success: "您{do} {amount} {token} 成功",
    view_transaction: '通过Etherscan查看交易',
    send_again: '继续转账',
    convert_again: '继续转换',
    ethereum_address: "我的以太坊地址",
    copy: "复制",
    copy_success: "复制成功",
    copy_failed: "复制失败",
    send: "发送",
    recipient: "接收者",
    eth_address_verification_message: "不合法的以太坊地址",
    send_max: "最大数量",
    transaction_fee: "矿工费",
    advanced: "高级",
    data: "二级制数据",
    gas_limit: "Gas数量",
    gas_price: "Gas价格",
    continue: "继续",
    slow: "慢",
    fast: "快",
    transfer_preview_title: "您要发送",
    from: "发送方",
    to: "发送到",
    gas: "油费",
    transfer_cancel: "不，取消发送",
    transfer_send: "是的，马上发送",
    to_confirm_title: "待确认",
    to_confirm_ledger_content: "请在您的Ledger设备上确认交易信息",
    select_token: "选择币种",
    token_select_verification_message: "请选择要发送的币种",
    transfer_result_title: "关心以太坊交易结果 ? ",
    transfer_result_etherscan: "在EtherScan查看结果",
    transfer_again_title: "想要继续操作 ? ",
    transfer_again_send: "继续发送",
    transfer_again_convert: "继续转换",
    add_custom_token_tip:"请输入合法的地址",
    send_failed: '发送失败！',
    convert_failed: '转换失败'
  },
  wallet: {
    bind_tip: "绑定空投接收地址",
    cu_bind_address: "当前绑定的地址",
    airdrop: "空投",
    binding: "已绑定",
    bind_type: "类型",
    address: "地址",
    type_tip: "请选择要绑定的类型",
    address_tip: "请粘贴您要绑定的地址",
    bind_address: "绑定地址",
    to_bind_address: "去绑定地址",
    to_edit: "去修改绑定地址",
    bind_type_address: "绑定{type}地址",
    bind_address_confirm: "您确定绑定 {project} 地址: {address} 到您的钱包吗?",
    bind_success:"绑定成功",
    bind_failed:"绑定失败",
    loopring_on: "路印协议在{project}上的代币",
    neo: "小蚁",
    qutm: "量子",
    unlock_tip: "您将怎么样解锁使用钱包",
    metamask: "MetaMask 钱包",
    trezor: "Trezor 钱包",
    ledger: "Ledger 钱包",
    keystore: "Keystore 文件",
    privateKey: "私钥",
    mnemonic: "助记词",
    no_wallet: "暂时没有钱包，让我们来",
    generate_one: "创建一个",
    error_title: "错误信息",
    content_ledger_unlock_require_https: "解锁Ledger钱包只能在HTTPS网页上",
    content_ledger_connect_failed: "与您的Ledger设备连接失败, 您可以参照以下建议. 1、请确保您的设备与电脑连接并解锁. 2、在设备上将该选项设置为'yes': Settings->Browser support 3、在设备上选择'Ethereum app'并进入",
    content_leder_locked: "您的Ledger设备似乎被锁定了",
    recommended: "推荐",
    recommend_way: "这是推荐的解锁方式.",
    connect_to_ledger: "连接您的Ledger钱包",
    content_metamask_mainnet: "在您使用MetaMask解锁时，我们只支持Ethereum mainnet，请在您的MetaMask切换",
    warning_title: "请注意",
    content_metamask_logout: "您已经从MetaMask登出",
    content_metamask_unlock_again: "您刚刚切换了MetaMask network, 或您的电脑曾被锁定. 出于任何原因您的钱包已经被登出, 如要继续使用请确认MetaMask正在使用MainNetwork并再次解锁您的钱包",
    content_metamask_install: "您可能需要在浏览器安装MetaMask插件，安装完成后请刷新页面",
    content_metamask_locked: "与MetaMask连接失败, 请解锁后使用",
    get_metamask: "下载MetaMask {browser}插件",
    get_metamask_visit: '访问MetaMask官网',
    connect_to_metamask: "连接您的MetaMask钱包",
    connect_to_metamask_not_supported_browser: "您的浏览器不支持MetaMask解锁，推荐您使用Chrome",
    download_chrome: "下载Chrome浏览器",
    recommended_tip: "我们推荐您采用这种方式使用钱包。",
    not_recommended: "不推荐",
    not_recommended_tip: "我们不推荐您采用这种方式使用钱包。",
    select_keystore: "选择您的Keystore文件",
    select_json: "选择JSON文件",
    unlock: "解锁",
    password: "密码",
    connect_trezor: "连接您的Trezor钱包",
    paste_mnemonic: "请粘贴您的助记词",
    select_wallet: "请选择您的钱包类型",
    optional: "可选",
    mnemonic_tip: "请输入合法的助记词",
    paste_privatekey: "请粘贴您的私钥",
    invalid_privateKey: "无效的私钥",
    select_account: "请选择您的账号",
    pre_page: "前一页",
    next_page: "下一页",
    confirm: "确认",
    cancel: "取消",
    generate_wallet: "创建钱包",
    generate: "生成",
    have_one: "已经拥有一个钱包",
    to_unlock: "去解锁",
    set_password: "设置一个安全的密码",
    backup: {
      backup_wallet: "备份钱包",
      keystore: "Keystore",
      privatekey: "私钥",
      mnemonic: "助记词",
      not_lose: "不要丢失",
      not_share: "不要分享",
      not_recover: '一旦丢失将无法恢复',
      stolen: "不要在钓鱼网站使用该文件，否则您的数字资产存在巨大的被盗风险",
      backup: "请一定做好备份",
      backup_tip:'路印钱包不会保存用户的私钥、Keystore、助记词，强烈建议您在线下备份这些信息（不联网的USB硬盘或纸质存储）。一旦私钥、Keystore、助记词丢失将无法恢复!',
      secure: "一定刚好好保管好它们，说不定哪天就价值连城",
      download: "我已经明白，下载钱包文件",
      copy_mnemonic: "我已经我明白，复制助记词",
      copy_privatekey: "我已经明白，复制私钥",
      wrong_password: "密码错误",
      input_password: "请先输入密码",
      get_keystore: "获取Keystore",
      download_keystore: "下载Keystore文件",
      copy_keystore: "复制Keystore",
      enter_wallet_password: "请输入钱包密码",
      enter_password: "请输入一个密码来保护钱包",
      file_keystore: "文件",
      text_keystore: "文本",
      qr_keystore: "二维码"
    },
    token: "代币",
    info_title: "请注意",
    content_metamask_account_change: "检测到您刚刚在MetaMask切换了账户, 请注意您账户资产发生了改变",
    old_weth_detect: "检测到您的地址有WETH余额（旧版本WETH合约），建议您转换为ETH. ",
    to_convert: "开始转换",
    instruction_metamask: '这是推荐的解锁方式，可以放心使用。</br>MetaMask是一款在浏览器上运行的以太坊轻钱包，通过运行浏览器上的扩展插件即可轻松访问您的以太钱包。MetaMask提供管理用户资金的身份验证和访问接口，用户无需在任何网站上提供私钥，防止钓鱼网站和其他恶意网站的安全风险。',
    instruction_keystore: '我们不推荐您使用这种方式解锁钱包，可能存在安全隐患。</br>在网站上上传keystore文件非常危险，如果网站被黑客攻击或您不小心访问了钓鱼网站，您钱包内的资产将面临巨大的安全风险。建议您使用硬钱包或在上传keystore文件前仔细确认URL & SSL 证书正确无误。',
    instruction_ledger: '这是推荐的解锁方式，可以放心使用。</br>Ledger硬件钱包可以物理随机产生私钥、存储私钥、独立完成签名运算而不发送私钥到计算机，安全地存储用户的数字资产，杜绝数字资产存储和交易的各种安全风险。',
    instruction_mnemonic: '我们不推荐您使用这种方式解锁钱包，可能存在安全隐患。</br>在网站上上传助记词非常危险，如果网站被黑客攻击或您不小心访问了钓鱼网站，您钱包内的资产将面临巨大的安全风险。建议您使用硬钱包或在上传助记词前仔细确认URL & SSL 证书正确无误。',
    instruction_privatekey: '我们不推荐您使用这种方式解锁钱包，可能存在安全隐患。</br>在网站上上传私钥非常危险，如果网站被黑客攻击或您不小心访问了钓鱼网站，您钱包内的资产将面临巨大的安全风险。建议您使用硬钱包或在上传私钥前仔细确认URL & SSL 证书正确无误。',
    instruction_trezor: '这是推荐的解锁方式，可以放心使用。</br>Trezor硬件钱包可以物理随机产生私钥、存储私钥、独立完成签名运算而不发送私钥到计算机，安全地存储用户的数字资产，杜绝数字资产存储和交易的各种安全风险。',
    instruction_address: '这是推荐的解锁方式，可以放心使用。</br>在这种模式下您可以查看余额变动，但如果想转账或提交订单，请使用其他方式解锁',
    nonce:'随机数',
    watch_only: '观察模式',
    address_input_placeholder: '您的钱包地址',
    unlock_by_address: '用您的地址解锁',
    invalid_eth_address: '错误的以太坊地址',
    demo_title: '使用演示账号体验 Loopr 钱包',
    instruction_demo: '您可以使用观察模式体验 Loopr 钱包，但无法执行下单，转账等需要私钥的操作',
    have_a_try: '开始体验之旅'
  },
  tokens: {
    hide_small_balances: "隐藏小额资产",
    only_show_favorites: "只显示我的收藏",
    options: "操作",
    options_transfer: "转账",
    options_receive: "收款",
    options_convert: "转换",
    options_trade: "买卖",
    options_edit: "修改",
    add_token: "添加代币",
    token_address: "代币合约地址",
    token_name: "代币名称",
    token_symbol: "代币 Symbol",
    token_digits: "代币 Digits",
    confirm_save: "确认并保存",
    save_successfully: "保存成功",
    supportToken: "我们已经支持该币种 ",
    add_token_failed: "您提供的合约地址可能不是一个合法的ERC20地址，我们无法获取该合约的相关信息。"
  },
  portfolio: {
    total_value: "总市值",
    asset_currency_ratio: "资产比重"
  } ,
  ring: {
    ring_info:"撮合环路信息",
    ring_detail:"撮合环路详情",
    ring_hash:"环路哈希",
    miner:"矿工",
    total_lrc_fee:"总共的LRC费用",
    total_split_fee:"总分的分润费用",
    time:'时间',
    trade_amount:"环路中订单个数",
    fee_recipient:"费用接收地址",
    ring_more_info:"更多信息，请访问RingInfo",
  }
}

