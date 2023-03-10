// header
// ハンバーガーメニュー
const humbergerLists = Vue.component('humbergerlists', {
  props: {
    regiser: {
      type: String,
      default: ''
    },
    regiser_btn_label: {
      type: String,
      default: ''
    },
    regiser_btn_path: {
      type: String,
      default: ''
    },
    login_btn_label: {
      type: String,
      default: ''
    },
    login_btn_path: {
      type: String,
      default: ''
    },
    order: {
      type: String,
      default: ''
    },
    order_btn_label: {
      type: String,
      default: ''
    },
    order_btn_path: {
      type: String,
      default: ''
    },
    sns: {
      type: String,
      default: ''
    },
    insta: {
      type: String,
      default: ''
    },
    twitter: {
      type: String,
      default: ''
    },
    facebook: {
      type: String,
      default: ''
    },
    site_map: {
      type: String,
      default: ''
    },
    label_top: {
      type: String,
      default: ''
    },
    label_apply: {
      type: String,
      default: ''
    },
    label_login: {
      type: String,
      default: ''
    },
    label_items: {
      type: String,
      default: ''
    },
    label_myorder: {
      type: String,
      default: ''
    },
  },
  template: `
    <div class="humberger-blocks">
        <div class="register-area-sp humberger-block">
            <h1 class="h1-sp">
                {{ regiser }}
                <span></span>
            </h1>
            <div class="register-btn-area-sp">
                <button class="humberger-btn h-register-btn-sp">
                    <a>{{ regiser_btn_label }}</a>
                        <img :src="regiser_btn_path" alt="" class="hum-register-arrow">
                </button>
                <button class="humberger-btn h-register-btn-sp">
                    <a>{{ login_btn_label }}</a>
                    <img :src="login_btn_path" alt="" class="hum-register-arrow">
                </button>
            </div>
        </div>
        <div class="order-area-sp humberger-block">
            <h1 class="h1-sp">
                {{ order }}
                <span></span>
            </h1>
            <button class="humberger-btn order-btn">
                <a>{{ order_btn_label }}</a>
                <img :src="order_btn_path" alt="" class="hum-order-arrow">
            </button>
        </div>
        <div class="sns-area-sp humberger-block">
            <h1 class="h1-sp">
                {{ sns }}
                <span></span>
            </h1>
            <ul class="sns-btn-area-sp">
                <li class="sns-btn">
                    <a>
                        <img :src="insta" alt="">
                    </a>
                </li>
                <li class="sns-btn">
                    <a>
                        <img :src="twitter" alt="">
                    </a>
                </li>
                <li class="sns-btn">
                    <a>
                        <img :src="facebook" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div class="sitemap-area-sp humberger-block">
            <h1 class="h1-sp">
                {{ site_map }}
                 <span></span>
            </h1>
            <ul class="humberger-sitemap-links">
                <li class="humberger-sitemap-link">
                    <a>{{ label_top }}</a>
                </li>
                <li class="humberger-sitemap-link">
                    <a>{{ label_apply }}</a>
                </li>
                <li class="humberger-sitemap-link">
                    <a>{{ label_login }}</a>
                </li>
                <li class="humberger-sitemap-link">
                    <a>{{ label_items }}</a>
                </li>
                <li class="humberger-sitemap-link">
                    <a>{{ label_myorder }}</a>
                </li>
            </ul>
        </div>
    </div>
    `

});
// header

// index
// TOPページ
const topH1 = Vue.component('toph1', {
  props: {
    h1: {
      type: String,
      default: ''
    }
  },
  template: `
    <h1 class="top-h1">{{ h1 }}</h1>
    `
});

const scrollBar = Vue.component('scrollbar', {
  props: {
    label: {
      type: String,
      default: ''      
    },
    path: {
      type: String,
      default: ''          
    }
  },
  template: `
  <div class="scroll-bar">
    <p class="scroll">{{ label }}</p>
    <p class="scroll-arrow-wrap">
      <img :src="path" class="scroll-arrow">
    </p>
  </div>
  `
});

// applyボタン
const applyBtn = Vue.component('applybtn', {
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  template: `
    <button class="apply-btn btn">
        <a><span>apply</span></a>
        <img :src="path" class="btn-arrow">
    </button>`
});

// service画面
const serviceBtn = Vue.component('servicebtn', {
  props: {
    id: {
      type: String,
      default: ''
    },
    span_outer_class: {
      type: String,
      default: ''
    },
    span_inner_class: {
      type: String,
      default: ''
    },
    service_icons_path: {
      type: String,
      default: ''
    },
    service_name: {
      type: String,
      default: ''
    },
    servise_plice: {
      type: String,
      default: ''
    },
    view_more: {
      type: String,
      default: ''
    },
    view_arrow_1_path: {
      type: String,
      default: ''
    },
    view_arrow_2_path: {
      type: String,
      default: ''
    },
  },
  template: `
    <button class="service-flame" :id="id">
        <span :class="span_outer_class">
            <span :class="span_inner_class" class="service-btn-inner">
                <img :src="service_icons_path" class="service-icons">
                <div class="servise-info">
                    <p class="servise-name">{{ service_name }}</p>
                    <p class="servise-plice">{{ servise_plice }}</p>
                </div>
                <a class="view-more-link">
                    {{ view_more }}
                    <img :src="view_arrow_1_path" class="view-arrow-1">
                    <img :src="view_arrow_2_path" class="view-arrow-2">
                </a>
            </span>
        </span>
    </button>
    `
});
// service画面

// reviewの画面
// itemsボタン
const itemsBtn = Vue.component('itemsbtn', {
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  template: `
    <button class="items-btn btn">
        <a><span>items</span></a>
        <img :src="path" class="btn-arrow">
    </button>
    `
});

// reviewのメイン写真(SP)
const reviewMainimgareaSp = Vue.component('reviewmainimgareasp', {
  props: {
    img_id: {
      type: String,
      default: ''
    },
    img_path: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    initial: {
      type: String,
      default: ''
    },
    item_name: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    btn_id: {
      type: String,
      default: ''
    },
    btn_path: {
      type: String,
      default: ''
    },
  },
  template: `
    <div class="review-main-img-area-sp">
        <img :src="img_path"
             alt="レビュー画面の画像"
             :id="img_id"
             @click="$emit('clickopenmodal')"
             class="review-main-img-sp">
        <div class="review-main-img-area-explain-sp">
            <div class="initial-wrap">
                <p class="date explain">{{ date }}</p>
                <p class="initial">{{ initial }}</p>
                <p class="san explain">さん</p>
            </div>
            <div class="item-wrap">
                <p class="item-name">{{ item_name }}</p>
            </div>
        </div>
        <div class="price-wrap">
            <p class="price">{{ price }}</p>
            <button
                class="like-btn-sp"
                :id="btn_id"
                @click="$emit">
                <i class="fa-solid fa-heart"></i>
            </button>
        </div>
    </div>
    `
});

// reviewのh2
const reviewH2 = Vue.component('reviewh2', {
  props: {
    review_h2: {
      type: String,
      default: ''
    }
  },
  template: `
        <div class="review-h2-outer">
            <h2>{{ review_h2 }}</h2>
        </div>
    `
});

// reviewの説明分ブロック1
const reviewContent1 = Vue.component('reviewcontent1', {
  props: {
    review_explains_list_1: {
      type: String,
      default: ''
    }
  },
  template: `
    <p class="explain">{{ review_explains_list_1 }}</p>
    `
});

// reviewの説明分ブロック2
const reviewContent2 = Vue.component('reviewcontent2', {
  props: {
    review_explains_list_2: {
      type: String,
      default: ''
    }
  },
  template: `
        <p class="explain">{{ review_explains_list_2 }}</p>
    `
});

//reviewのメイン写真(PC)
const reviewMainimgareaPc = Vue.component('reviewmainimgareapc', {
  props: {
    img_id: {
      type: String,
      default: ''
    },
    img_path: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    initial: {
      type: String,
      default: ''
    },
    item_name: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    btn_id: {
      type: String,
      default: ''
    },
    btn_path: {
      type: String,
      default: ''
    },
  },
  template: `
    <div class="review-main-img-area-pc-outer">
        <div class="review-main-img-area-pc">
            <img
             :src="img_path"
             alt="レビュー画面のメイン写真"
             :id="img_id"
             @click="$emit('clickopenmodal')"
             class="review-main-img-pc">
            <div class="review-info-wrap">
                <div class="review-main-img-info">
                    <div class="initial-wrap">
                        <p class="date">{{ date }}</p>
                        <p class="initial">{{ initial }}</p>
                        <p class="san">さん</p>
                    </div>
                    <div class="item-name-wrap">
                        <p class="item-name">{{ item_name }}</p>
                    </div>
                </div>
                <div class="price-info">
                    <p class="price">
                        <span>¥</span>
                        {{ price }}
                    </p>
                    <button
                    class="like-btn"
                    :id="btn_id"
                    @click="$emit">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
});


// モーダル(items画面と併用)
const modal = Vue.component('modal', {
  props: {
    isShown: {
      type: Boolean,
      default: false
    },
    imagePath: {
      type: String,
      default: ''
    }


  },
  template: `<div
                v-if="isShown"
                class="modal"
                @click="$emit('close')"
                >
                    <img class="modal-img" :src="imagePath">
                </div>
                `
});

// vueStarの読み込み
const VueStar = Vue.component('VueStar');

// swiperの読み込み
Vue.use(VueAwesomeSwiper);
// index

// apply
// バリデーション
const applyValidate = Vue.component('applyvalidate', {
  props: ['applyerrors'],
  template: `
        <div class="apply-errors" v-if="applyerrors">
            <p class="apply-error" v-for="applyerror in applyerrors">{{ applyerror }}</p>
        </div>
    `
});
// apply

// login
const loginValidate = Vue.component('loginvalidate', {
  props: ['loginerrors'],
  template: `<div class="login-errors" v-if="loginerrors">
        <p class="login-error" v-for="loginerror in loginerrors">{{ loginerror }}</p>
    </div>`
});

// items
const itemsThumbnail = Vue.component('itemsthumbnail', {
  props: {
    item_id: {
      type: String,
      default: ''
    },
    item_path: {
      type: String,
      default: ''
    },
    item_name: {
      type: String,
      default: ''
    },
    item_price: {
      type: String,
      default: ''
    },
    btn_id: {
      type: String,
      default: ''
    },
  },
  template: `
    <div class="item-line-up" :id="item_id">
        <div class="item-img-wrap">
            <img :src="item_path"
                 class="item-img"
                 @click="$emit('clickopenmodal')" >
        </div>
        <div class="item-info-wrap">
            <p class="item-info-name">{{ item_name }}</p>
            <div class="item-price-area-wrap">
                <p class="item-price-area-price">{{ item_price }}</p>
                <button class="item-price-area-like-btn" :id="btn_id" @click="$emit('liked')">
                    <i class="fa-solid fa-heart like-icon"></i>
                </button>
            </div>
        </div>
    </div>
    `
});

const app = new Vue({
  el: '#app',
  components: {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide,
    'VueStar': VueStar,
    // header
    'humbergerlists': humbergerLists,
    // header
    // index
    'toph1': topH1,
    'scrollbar': scrollBar,
    'applybtn': applyBtn,
    'servicebtn': serviceBtn,
    'itemsbtn': itemsBtn,
    'reviewmainimgareasp': reviewMainimgareaSp,
    'reviewh2': reviewH2,
    'reviewcontent1': reviewContent1,
    'reviewcontent2': reviewContent2,
    'reviewmainimgareapc': reviewMainimgareaPc,
    'modal': modal,
    // index
    // apply
    'applyvalidate': applyValidate,
    // apply
    // items
    'itemsthumbnail': itemsThumbnail,
    // login
    'loginvalidate': loginValidate
  },
  data() {
    return {

      // headder
      // logoのパス
      logo_path: './img/logo/logo.svg',

      //headerのサイトマップナビゲーション(PC)
      header_nav_menus: [{
        label: 'TOP',
        tab_class: 'index'
      }, {
        label: 'APPLY',
        tab_class: 'apply'
      }, {
        label: 'LOGIN',
        tab_class: 'login'
      }, {
        label: 'ITEMS',
        tab_class: 'items'
      }, {
        label: 'MY ORDER',
        tab_class: 'my-order'
      }],

      // タブの切り替え
      tab_active: 0,

      sp_tab_active: 0,

      //headerのサイトマップナビゲーション(SP)
      header_nav_menus_sp: [{
        label: 'TOP',
        tab: './index.html'
      }, {
        label: 'APPLY',
        tab: './index.html'
      }, {
        label: 'ITEMS',
        tab: './index.html'
      }],

      //ハンバーガーメニューの実装
      humbergerisActive: false,

      humberger_lists: [{
        regiser: '新規登録',
        regiser_btn_label: '新規登録',
        regiser_btn_path: './img/footer_btn/btn.png',
        login_btn_label: 'ログイン',
        login_btn_path: './img/footer_btn/btn.png',
        order: '注文確認',
        order_btn_label: 'オーダー確認',
        order_btn_path: './img/footer_btn/btn.png',
        sns: 'SNS',
        insta: './img/humbergerlist_icon/insta.png',
        twitter: './img/humbergerlist_icon/twitter.png',
        facebook: './img/humbergerlist_icon/facebook.png',
        site_map: 'サイトマップ',
        label_top: 'TOP',
        label_apply: 'APPLY',
        label_login: 'LOGIN',
        label_items: 'ITEMS',
        label_myorder: 'MY ORDER'
      }],
      // headder

      // index

      // スクロールアニメーション(PC)
      visible_about: false,

      visible_service: false,

      visible_review: false,

      // スクロールアニメーション(SP)
      visible_about_sp: false,

      visible_service_sp: false,

      visible_review_sp: false,

      // arrowの画像パス
      btn_arrow_path: './img/btn_arrow/btn_arrow.png',

      // topページ
      top_h1: [{
        h1: 'Design Your'
      }, {
        h1: 'SPECIAL'
      }, {
        h1: 'with Us'
      }],

      //スライダーの写真
      slider_img_list: [{
        path: './img/top_slider_img/slider_img_1.png'
      }, {
        path: './img/top_slider_img/slider_img_2.png'
      }, {
        path: './img/top_slider_img/slider_img_3.png'
      }, {
        path: './img/top_slider_img/slider_img_4.png'
      }],

      // スライダーのカスタム
      swiperOptions: {
        loop: true, //スライドをループする
        slidesPerView: 1, //1画面あたりの表示枚数
        spaceBetween: 20, //スライド同士の間隔
        effect: 'fade',
        autoplay: {
          delay: 5000 //自動でスライドする。間隔はミリ秒で指定。
        }
      },

      // スクロールバー
      scrollbar: [{
        label: 'SCROLL',
        path: './img/scllor/scllor-arrow.png'
      }],
      // topページ

      // about
      // aboutのh1
      about_h1: 'ABOUT',

      // aboutのh2
      about_h2: [{
        h2: 'あなたらしさとは？'
      }, {
        h2: 'それを一緒に考えましょう！！'
      }],

      // aboutの説明文
      about_explains: [{
        explain: '我々は従来のオーダーメイドではありません。'
      }, {
        explain: 'あなただけのオリジナルファッションを生み出すプロ集団です'
      }, {
        explain: 'どういうことかというと、あなたが着たい1着を現役の'
      }, {
        explain: 'ファッションデザイナーがジャンルを問わず1からデザインします。'
      }, {
        explain: 'デザインや素材などは我々プロにお任せ下さい。'
      }, {
        explain: 'その上で、あなたが表現したいものを一緒に見つけましょう！！'
      }],

      // aboutの写真(PC)
      about_img_path_pc: './img/display_img/display_img_1.png',

      // aboutの写真(SP)
      about_img_path_sp: './img/phone_main_img/about_img.png',
      // about

      // service
      // serviceのh1
      service_h1: 'SERVISE',

      // serviceボタンのデータ
      service_btn_contens: [{
        id: 'jucket-service-btn',
        service_icons_path: './img/icons_img/icon_1.png',
        span_outer_class: 'jucket-service-btn-outer',
        span_inner_class: 'jucket-service-btn-inner',
        service_name: 'JACKET',
        servise_plice: '¥ 22,000~',
        view_more: 'VIEW MORE',
        view_arrow_1_path: './img/icons_img/service_arrow_1.png',
        view_arrow_2_path: './img/icons_img/service_arrow_2.png'
      }, {
        id: 'shirts-service-btn',
        service_icons_path: './img/icons_img/icon_3.png',
        span_outer_class: 'shirts-service-btn-outer',
        span_inner_class: 'shirts-service-btn-inner',
        service_name: 'SHIRTS',
        servise_plice: '¥ 5,000~',
        view_more: 'VIEW MORE',
        view_arrow_1_path: './img/icons_img/service_arrow_1.png',
        view_arrow_2_path: './img/icons_img/service_arrow_2.png'
      }, {
        id: 'bottoms-service-btn',
        service_icons_path: './img/icons_img/icon_2.png',
        span_outer_class: 'bottoms-service-btn-outer',
        span_inner_class: 'bottoms-service-btn-inner',
        service_name: 'BOTTOMS',
        servise_plice: '¥ 10,000~',
        view_more: 'VIEW MORE',
        view_arrow_1_path: './img/icons_img/service_arrow_1.png',
        view_arrow_2_path: './img/icons_img/service_arrow_2.png'
      }, {
        id: 'accesary-service-btn',
        service_icons_path: './img/icons_img/icon_4.png',
        span_outer_class: 'accesary-service-btn-outer',
        span_inner_class: 'accesary-service-btn-inner',
        service_name: 'ACCESARY',
        servise_plice: '¥ 3,000~',
        view_more: 'VIEW MORE',
        view_arrow_1_path: './img/icons_img/service_arrow_1.png',
        view_arrow_2_path: './img/icons_img/service_arrow_2.png'
      }],

      // タブの切り替え(PC)
      service_tab_active_pc: 1,
      // service

      // review画面
      // reviewのh1
      review_h1: 'REVIEW',

      //SP画面のメイン画像
      review_main_img_list_sp: [{
        img_id: 'review-img-1',
        img_path: './img/display_img/display_img_2.jpg',
        date: '2022.07.08',
        initial: 'K.H',
        item_name: 'Denim Taired Jackt',
        price: '7,500',
        btn_id: 'review-detail-btn-1',
      }, {
        img_id: 'review-img-2',
        img_path: './img/display_img/display_img_3.jpg',
        date: '2022.08.07',
        initial: 'I.S',
        item_name: 'Music Jackt',
        price: '22,500',
        btn_id: 'review-detail-btn-2',
      }],

      // reviewのh2
      review_h2: [{
        h2: '実際の利用者の声をリアルにお届け！！'
      }, {
        h2: '用途ははそれぞれ！'
      }],

      // reviewの概要
      review_explains_list_1: [{
        explain: '作成するものはあなたの人生の一着。'
      }, {
        explain: '一緒に創り上げた作品を一部ではありますがご紹介させて頂きます。'
      }, {
        explain: 'バンドのライブ衣装やビジネスカジュアルなシーンにて、'
      }, {
        explain: '勝負の一着を創作する。'
      }, {
        explain: 'デザインや素材などは我々プロにお任せ下さい。'
      }],

      review_explains_list_2: [{
        explain: '用途は様々ですが、共通点が一つだけあります。'
      }, {
        explain: 'それは、どの作品もお客様と共作したという点です。'
      }, {
        explain: 'あなたの個性を表現する時、是非ご参考にして下さい！'
      }],

      //PC画面のメイン画像
      review_main_img_area_pc: [{
        img_id: 'review-img-1',
        img_path: './img/display_img/display_img_2.jpg',
        date: '2022.07.08',
        initial: 'K.H',
        item_name: 'Denim Taired Jackt',
        price: '7,500',
        btn_id: 'like-btn-1',
        btn_path: './img/like_img/like.png'
      }, {
        img_id: 'review-img-2',
        img_path: './img/display_img/display_img_3.jpg',
        date: '2022.08.07',
        initial: 'I.S',
        item_name: 'Music Jackt',
        price: '22,500',
        btn_id: 'like-btn-2',
        btn_path: './img/like_img/like.png'
      }],
      // review画面

      // モーダル
      isShown: false,

      //モーダル(商品情報)
      displayImgPath: '',

      // index

      // apply
      apply_h1: 'お申し込みフォーム',

      // formのデータ
      apply_name: '',

      apply_email: '',

      apply_tel: '',

      apply_kind: '',

      apply_img: '',

      apply_address_number: '',

      apply_pre: '',

      apply_address: '',

      apply_other: '',

      // エラー
      apply_errors: {

        apply_name: [],

        apply_email: [],

        apply_tel: [],

        apply_kind: [],

        apply_img: [],

        apply_address_number: [],

        apply_pre: [],

        apply_address: [],

        apply_other: [],

      },

      // formのタグ
      apply_name_tag: '氏名',

      apply_email_tag: 'メールアドレス',

      apply_tel_tag: '電話番号',

      apply_kind_tag: '商品の種類',

      apply_img_tag: '画像',

      apply_address_number_tag: '郵便番号',

      apply_pre_tag: '都道府県',

      apply_address_tag: '郵送先',

      apply_other_tag: 'その他',

      apply_span_need: '※',

      // 画像のアップロード
      apply_img_url: '',

      //ラジオボックス
      apply_kind_radio: [{
        name: 'apply_jacket',
        kind: 'JACKET',
        v_model: 'apply_kind'
      }, {
        name: 'apply_shirts',
        kind: 'SHIRTS',
        v_model: 'apply_kind'
      }, {
        name: 'apply_bottoms',
        kind: 'BOTTOMS',
        v_model: 'apply_kind'
      }, {
        name: 'apply_accesarry',
        kind: 'ACCESARRY',
        v_model: 'apply_kind'
      }],

      // 住所のサーチボタン
      apply_search_btn_label: '住所を入力',

      // serectboxの一覧
      apply_select_option_pre: [{
        pre: ''
      }, {
        pre: '北海道'
      }, {
        pre: '青森県'
      }, {
        pre: '秋田県'
      }, {
        pre: '岩手県'
      }, {
        pre: '山形県'
      }, {
        pre: '宮城県'
      }, {
        pre: '福島県'
      }, {
        pre: '茨城県'
      }, {
        pre: '栃木県'
      }, {
        pre: '群馬県'
      }, {
        pre: '埼玉県'
      }, {
        pre: '東京都'
      }, {
        pre: '千葉県'
      }, {
        pre: '神奈川県'
      }, {
        pre: '新潟県'
      }, {
        pre: '富山県'
      }, {
        pre: '石川県'
      }, {
        pre: '福井県'
      }, {
        pre: '長野県'
      }, {
        pre: '山梨県'
      }, {
        pre: '静岡県'
      }, {
        pre: '愛知県'
      }, {
        pre: '岐阜県'
      }, {
        pre: '三重県'
      }, {
        pre: '京都府'
      }, {
        pre: '大阪府'
      }, {
        pre: '滋賀県'
      }, {
        pre: '和歌山県'
      }, {
        pre: '奈良県'
      }, {
        pre: '兵庫県'
      }, {
        pre: '香川県'
      }, {
        pre: '徳島県'
      }, {
        pre: '愛媛県'
      }, {
        pre: '高知県'
      }, {
        pre: '岡山県'
      }, {
        pre: '広島県'
      }, {
        pre: '島根県'
      }, {
        pre: '鳥取県'
      }, {
        pre: '山口県'
      }, {
        pre: '福岡県'
      }, {
        pre: '佐賀県'
      }, {
        pre: '長崎県'
      }, {
        pre: '宮崎県'
      }, {
        pre: '熊本県'
      }, {
        pre: '鹿児島県'
      }, {
        pre: '沖縄県'
      }],
      // apply

      // login
      login_h1: 'ログイン',

      // ログインのタグ
      login_mail_tag: 'メールアドレス',

      login_pw_tag: 'パスワード',

      login_span_need: '※',

      // ログインのデータ
      login_mail: '',

      login_pw: '',

      login_errors: {

        login_mail: [],

        login_pw: []
      },


      // items
      items_h1: 'ラインナップ',

      // ナビゲーション
      items_tab_active: 0,

      items_nav: [{
        label: 'ALL'
      }, {
        label: 'JUCKET'
      }, {
        label: 'SHIRTS'
      }, {
        label: 'BOTTOMS'
      }, {
        label: 'ACCESARY'
      }],

      // 全商品のデータ
      all_items_contents: [{
        item_id: 'item-1',
        item_path: './img/items/jucket/jucket2.jpg',
        item_name: 'Denim Taired Jackt',
        item_price: '¥7,500',
        btn_id: 'item-like-btn-1',
      }, {
        item_id: 'item-2',
        item_path: './img/items/jucket/jucket1.jpg',
        item_name: 'Denim Taired Jackt',
        item_price: '¥22,500',
        btn_id: 'item-like-btn-2',
      }, {
        item_id: 'item-3',
        item_path: './img/items/jucket/jucket5.jpg',
        item_name: 'Two way long caught',
        item_price: '¥34,500',
        btn_id: 'item-like-btn-3',
      }, {
        item_id: 'item-4',
        item_path: './img/items/bottoms/bottoms1.jpg',
        item_name: 'Denim Pants',
        item_price: '¥7,500',
        btn_id: 'item-like-btn-4',
      }, {
        item_id: 'item-5',
        item_path: './img/items/accesarry/accesary2.jpg',
        item_name: 'Cap',
        item_price: '¥5,000',
        btn_id: 'item-like-btn-5',
      }, {
        item_id: 'item-6',
        item_path: './img/items/accesarry/accesary3.jpg',
        item_name: 'Barray Cap',
        item_price: '¥5,500',
        btn_id: 'item-like-btn-6',
      }, {
        item_id: 'item-7',
        item_path: './img/items/shirts/shirts2.jpg',
        item_name: 'White Shirts',
        item_price: '¥3,500',
        btn_id: 'item-like-btn-7',
      }, {
        item_id: 'item-8',
        item_path: './img/items/bottoms/bottoms2.jpg',
        item_name: 'Street Pants',
        item_price: '¥12,500',
        btn_id: 'item-like-btn-8',
      }, {
        item_id: 'item-9',
        item_path: './img/items/jucket/jucket4.jpg',
        item_name: 'Two way Jucket',
        item_price: '¥24,500',
        btn_id: 'item-like-btn-9',
      }, {
        item_id: 'item-10',
        item_path: './img/items/accesarry/accesary1.jpg',
        item_name: 'Sun grass',
        item_price: '¥3,500',
        btn_id: 'item-like-btn-10',
      }, {
        item_id: 'item-11',
        item_path: './img/items/jucket/jucket3.jpg',
        item_name: 'Denim Break Shirts',
        item_price: '¥22,500',
        btn_id: 'item-like-btn-11',
      }, {
        item_id: 'item-12',
        item_path: './img/items/shirts/shirts1.jpg',
        item_name: 'White Shirts',
        item_price: '¥5,500',
        btn_id: 'item-like-btn-12',
      }, {
        item_id: 'item-11',
        item_path: './img/items/shirts/shirts3.jpg',
        item_name: 'Aloha Shirts',
        item_price: '¥6,500',
        btn_id: 'item-like-btn-12',
      }, {
        item_id: 'item-12',
        item_path: './img/items/bottoms/bottoms3.jpg',
        item_name: 'Red skiny',
        item_price: '¥5,500',
        btn_id: 'item-like-btn-12',
      }, {
        item_id: 'item-13',
        item_path: './img/items/accesarry/accesary4.jpg',
        item_name: 'Smart-wach',
        item_price: '¥18,500',
        btn_id: 'item-like-btn-13',
      }, {
        item_id: 'item-14',
        item_path: './img/items/shirts/shirts4.jpg',
        item_name: 'White Brouse',
        item_price: '¥4,500',
        btn_id: 'item-like-btn-14',
      }, {
        item_id: 'item-15',
        item_path: './img/items/bottoms/bottoms4.jpg',
        item_name: 'Black skiny',
        item_price: '¥5,500',
        btn_id: 'item-like-btn-15',
      }, {
        item_id: 'item-16',
        item_path: 'img/items/shirts/shirts5.jpg',
        item_name: 'Summer Aloha',
        item_price: '¥5,500',
        btn_id: 'item-like-btn-16',
      }, {
        item_id: 'item-16',
        item_path: './img/items/shirts/shirts6.jpg',
        item_name: 'Sexy Tanktop',
        item_price: '¥5,500',
        btn_id: 'item-like-btn-17',
      }, {
        item_id: 'item-16',
        item_path: './img/items/bottoms/bottoms5.jpg',
        item_name: 'Sexy Jeans',
        item_price: '¥5,500',
        btn_id: 'item-like-btn-17',
      }, ],

      // ジャケットのデータ
      jucket_items_contents: [{
        item_id: 'item-jucket-1',
        item_path: './img/items/jucket/jucket2.jpg',
        item_name: 'Denim Taired Jackt',
        item_price: '¥7,500',
        btn_id: 'item-like-jucket-btn-1',
      }, {
        item_id: 'item-jucket-2',
        item_path: './img/items/jucket/jucket1.jpg',
        item_name: 'Denim Taired Jackt',
        item_price: '¥22,500',
        btn_id: 'item-like-jucket-btn-2',
      }, {
        item_id: 'item-jucket-3',
        item_path: './img/items/jucket/jucket5.jpg',
        item_name: 'Two way long caught',
        item_price: '¥34,500',
        btn_id: 'item-like-jucket-btn-3',
      }, {
        item_id: 'item-jucket-4',
        item_path: './img/items/jucket/jucket4.jpg',
        item_name: 'Two way Jucket',
        item_price: '¥24,500',
        btn_id: 'item-like-jucket-btn-4',
      }, {
        item_id: 'item-jucket-5',
        item_path: './img/items/jucket/jucket3.jpg',
        item_name: 'Denim Break Shirts',
        item_price: '¥22,500',
        btn_id: 'item-like-jucket-btn-5',
      }],

      // シャツのデータ
      shirts_items_contents: [{
        item_id: 'item-shirts-1',
        item_path: './img/items/shirts/shirts2.jpg',
        item_name: 'White Shirts',
        item_price: '¥3,500',
        btn_id: 'item-like-shirts-btn-1',
      }, {
        item_id: 'item-shirts-2',
        item_path: './img/items/shirts/shirts1.jpg',
        item_name: 'White Shirts',
        item_price: '¥5,500',
        btn_id: 'item-like-shirts-btn-2',
      }, {
        item_id: 'item-shirts-3',
        item_path: './img/items/shirts/shirts3.jpg',
        item_name: 'Aloha Shirts',
        item_price: '¥6,500',
        btn_id: 'item-like-shirts-btn-3',
      }, {
        item_id: 'item-shirts-4',
        item_path: './img/items/shirts/shirts4.jpg',
        item_name: 'White Brouse',
        item_price: '¥4,500',
        btn_id: 'item-like-shirts-btn-4',
      }, {
        item_id: 'item-shirts-5',
        item_path: './img/items/shirts/shirts6.jpg',
        item_name: 'Sexy Tanktop',
        item_price: '¥5,500',
        btn_id: 'item-like-shirts-btn-5',
      }],

      // ボトムスのデータ
      bottoms_items_contents: [{
        item_id: 'item-bottoms-1',
        item_path: './img/items/bottoms/bottoms1.jpg',
        item_name: 'Denim Pants',
        item_price: '¥7,500',
        btn_id: 'item-like-bottoms-btn-1',
      }, {
        item_id: 'item-bottoms-2',
        item_path: './img/items/bottoms/bottoms2.jpg',
        item_name: 'Street Pants',
        item_price: '¥12,500',
        btn_id: 'item-like-bottoms-btn-2',
      }, {
        item_id: 'item-bottoms-3',
        item_path: './img/items/bottoms/bottoms3.jpg',
        item_name: 'Red skiny',
        item_price: '¥5,500',
        btn_id: 'item-like-btn-3',
      }, {
        item_id: 'item-bottoms-3',
        item_path: './img/items/bottoms/bottoms4.jpg',
        item_name: 'Black skiny',
        item_price: '¥5,500',
        btn_id: 'item-like-bottoms-btn-3',
      }, ],

      // アクセサリーのデータ
      accesarry_items_contents: [{
        item_id: 'item-accesarry-1',
        item_path: './img/items/accesarry/accesary2.jpg',
        item_name: 'Cap',
        item_price: '¥5,000',
        btn_id: 'item-like-accesarry-btn-1',
      }, {
        item_id: 'item-accesarry-2',
        item_path: './img/items/accesarry/accesary3.jpg',
        item_name: 'Barray Cap',
        item_price: '¥5,500',
        btn_id: 'item-like-accesarry-btn-2',
      }, {
        item_id: 'item-accesarry-3',
        item_path: './img/items/accesarry/accesary1.jpg',
        item_name: 'Sun grass',
        item_price: '¥3,500',
        btn_id: 'item-like-accesarry-btn-3',
      }, {
        item_id: 'item-accesarry-4',
        item_path: './img/items/accesarry/accesary4.jpg',
        item_name: 'Smart-wach',
        item_price: '¥18,500',
        btn_id: 'item-like-accesarry-btn-4',
      }, ],

      // いいね機能
      likedIsActive: false,

      // items

      // footer
      footer_logo_path: './img/logo/logo_footer.png',

      site_map: 'サイトマップ',

      footer_btn_label: 'お申し込み',

      btn_path: './img/footer_btn/btn.png',

      footer_sitemap_links: [{
        link: '・TOP'
      }, {
        link: '・ABOUT '
      }, {
        link: '・SERVICE'
      }, {
        link: '・REVIEW'
      }],

      footer_relation_site: '関連サイト',

      footer_relation_site_links: [{
        link: 'http//aaaa/bb/ccccccccc'
      }, {
        link: 'http//aaaa/bb/ccccccccc'
      }, {
        link: 'http//aaaa/bb/ccccccccc'
      }],

      footer_address: 'お問い合わせ',

      footer_address_links: [{
        link: '住所:東京都渋谷区1-1'
      }, {
        link: 'TEL:00-1234-5678'
      }, {
        link: 'E-mail:yours_@co.jp'
      }],

      footer_sns: '公式SNS'


    };
  },
  created() {
    // PC
    window.addEventListener("scroll", this.handScrollAbout);
    window.addEventListener("scroll", this.handScrollService);
    window.addEventListener("scroll", this.handScrollReview);

    //SP
    window.addEventListener("scroll", this.handScrollAboutSp);
    window.addEventListener("scroll", this.handScrollServiceSp);
    window.addEventListener("scroll", this.handScrollReviewSp);
  },
  destroyed() {
    // PC
    window.addEventListener("scroll", this.handScrollAbout);
    window.addEventListener("scroll", this.handScrollService);
    window.addEventListener("scroll", this.handScrollReview);

    //SP
    window.addEventListener("scroll", this.handScrollAboutSp);
    window.addEventListener("scroll", this.handScrollServiceSp);
    window.addEventListener("scroll", this.handScrollReviewSp);
  },
  methods: {

    // header
    // タブの切り替え(PC)
    activate(i) {
      this.tab_active = i;
    },

    spActive(i) {
      this.sp_tab_active = i;
    },

    //ハンバーガーメニューの切り替え
    humbergerButton() {
      this.humbergerisActive = !this.humbergerisActive;
    },
    // header

    // index

    // スクロールイベント
    // about(PC)
    handScrollAbout() {
      if (!this.visible_about) {
        this.visible_about = window.scrollY > 300;
      } else if (window.scrollY < 290) {
        this.visible_about = !this.visible_about;
      }
    },
    // about(SP)
    handScrollAboutSp() {
      if (!this.visible_about_sp) {
        this.visible_about_sp = window.scrollY > 30;
      } else if (window.scrollY < 20) {
        this.visible_about_sp = !this.visible_about_sp;
      }
    },

    // service(PC)
    handScrollService() {
      if (!this.visible_service) {
        this.visible_service = window.scrollY > 600;
      } else if (window.scrollY < 590) {
        this.visible_service = !this.visible_service;
      }
    },

    // service(SP)
    handScrollServiceSp() {
      if (!this.visible_service_sp) {
        this.visible_service_sp = window.scrollY > 180;
      } else if (window.scrollY < 170) {
        this.visible_service_sp = !this.visible_service_sp;
      }
    },

    // review(PC)
    handScrollReview() {
      if (!this.visible_review) {
        this.visible_review = window.scrollY > 900;
      } else if (window.scrollY < 890) {
        this.visible_review = !this.visible_review;
      }
    },

    // review(SP)
    handScrollReviewSp() {
      if (!this.visible_review_sp) {
        this.visible_review_sp = window.scrollY > 280;
      } else if (window.scrollY < 270) {
        this.visible_review_sp = !this.visible_review_sp;
      }
    },

    // サービスボタンのタブの切り替え(PC)
    serviceTabActivePc(i) {
      this.service_tab_active_pc = i;
    },

    //モーダルの非表示
    closeModal() {
      this.isShown = false;
    },

    //モーダルの表示
    openModal() {
      this.isShown = true;
    },

    //モーダルの画像のセット
    onDisplayImg(path) {
      this.setImage(path);
      this.openModal();
    },

    setImage(path) {
      this.displayImgPath = path;
    },
    // index

    // apply
    // 住所検索
    displayAddres: function() {
      var self = this;
      new YubinBango.Core(this.apply_address_number, function(addr) {
        if (addr.region_id) {
          self.apply_pre = addr.region;
          self.apply_address = addr.locality + addr.street;
        } else {
          self.apply_errors.apply_address_number.push('該当する住所がありません');
        }
      })
    },

    // バリデーション
    applyValidate() {
      var apply_errors = {
        apply_name: [],

        apply_email: [],

        apply_tel: [],

        apply_kind: [],

        apply_img: [],

        apply_address_number: [],

        apply_pre: [],

        apply_address: [],

        apply_other: [],
      };

      if (!this.apply_name) {
        apply_errors.apply_name.push('この項目は必須です');
      } else if (this.apply_name.lengh > 20) {
        apply_errors.apply_name.push('20文字以内で入力して下さい');
      }

      if (!this.apply_email) {
        apply_errors.apply_email.push('この項目は必須です');
      }
      if (!this.apply_kind) {
        apply_errors.apply_kind.push('この項目は必須です');
      }
      if (!this.apply_address_number) {
        apply_errors.apply_address_number.push('この項目は必須です');
      }
      if (!this.apply_pre) {
        apply_errors.apply_pre.push('この項目は必須です');
      }
      if (!this.apply_address) {
        apply_errors.apply_address.push('この項目は必須です');
      }
      this.apply_errors = apply_errors;
    },

    // 画像のセット
    applyUploadFile() {
      const file = this.$refs.preview.files[0];
      this.apply_img_url = URL.createObjectURL(file);
    },
    // apply

    // login
    loginValidate() {
      var login_errors = {
        login_mail: [],

        login_pw: [],
      };
      if (!this.login_mail) {
        login_errors.login_mail.push('この項目は必須です');
      }
      if (!this.login_pw) {
        login_errors.login_pw.push('この項目は必須です');
      }
      this.login_errors = login_errors;
    },

    // items
    itemsTabactive(i) {
      this.items_tab_active = i;
    },

    likedToggle() {
      this.likedIsActive = !this.likedIsActive;
    }

  }
});
