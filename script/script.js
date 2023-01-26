// ハンバーガーメニュー
const humbergerLists = Vue.component('humbergerlists', {
    props: {
        regiser: {
            type: String,
            default: ''             
        },regiser_btn_label: {
            type: String,
            default: ''             
        },regiser_btn_path: {
            type: String,
            default: ''             
        },login_btn_label: {
            type: String,
            default: ''             
        },login_btn_path: {
            type: String,
            default: ''             
        },order: {
            type: String,
            default: ''             
        },order_btn_label: {
            type: String,
            default: ''             
        },order_btn_path: {
            type: String,
            default: ''             
        },sns: {
            type: String,
            default: ''             
        },insta: {
            type: String,
            default: ''             
        },twitter: {
            type: String,
            default: ''             
        },facebook: {
            type: String,
            default: ''             
        },site_map: {
            type: String,
            default: ''             
        },label_top: {
            type: String,
            default: ''             
        },label_apply: {
            type: String,
            default: ''             
        },label_login: {
            type: String,
            default: ''             
        },label_items: {
            type: String,
            default: ''             
        },label_myorder: {
            type: String,
            default: ''             
        },
    },template: `
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
        view_arrow_2_path:  {
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
        btn_id: {
            type: String,
            default: ''               
        },
        btn_path: { 
            type: String,
            default: ''                
        },
    },
    template:`
    <div class="review-main-img-area-sp">
        <img :src="img_path" 
             alt="レビュー画面の画像" 
             :id="img_id" 
             @click="$emit('clickopenmodal($event)')"             
             class="review-main-img-sp">
        <div class="review-main-img-area-explain-sp">
            <p class="date explain">{{ date }}</p>
            <p class="initial">{{ initial }}</p>
            <p class="san explain">さん</p>
        </div>
        <button 
            class="review-detail-btn-sp" 
            :id="btn_id"
            @click="$emit('clickopenmodal($event)')">
            拡大表示で見る
            <img :src="btn_path" class="detail-btn-arrow">
        </button>
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
const reviewMainimgareaPc = Vue.component('reviewmainimgareapc',{
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
             @click="$emit('clickopenmodal($event)')"              
             class="review-main-img-pc">
            <div class="review-main-img-info">
                <p class="date">{{ date }}</p>
                <p class="initial">{{ initial }}</p>
                <p class="san">さん</p>
            </div>
            <button
             class="review-detail-btn" 
             :id="btn_id"
             @click="$emit('clickopenmodal($event)')">
                拡大表示で見る
                <img :src="btn_path" class="detail-btn-arrow">                
            </button>            
        </div>
    </div>
    `
});
// reviewの画面

// モーダル
const modal = Vue.component('modal', {
    props: {
        isShown: {
            type: Boolean,
            default: false
        },
        id: {
            type: String,
            default: ''  
        },
        initial: {
            type: String,
            default: ''  
        },
        date: {
            type: String,
            default: ''  
        },
        slider_img_path: {
            type: String,
            default: ''              
        },
        item: {
            type: String,
            default: ''                 
        },
        like_btn_path: {
            type: String,
            default: ''   
        },
        price: {
            type: String,
            default: ''  
        },
        explain_list: {
            type: String,
            default: ''              
        }

    },
    template: `<div
                    v-if="isShown"
                    class="modal"
                    :id="id.displayList"
                    >

                </div>
                `
});

// swiperの読み込み
Vue.use(VueAwesomeSwiper);
// swiperの読み込み

const app = new Vue({
    el: '#app',
    components: {
        'carousel': VueCarousel.Carousel,
        'slide': VueCarousel.Slide,
        'toph1' : topH1,
        'humbergerlists' : humbergerLists,
        'applybtn': applyBtn,
        'servicebtn' : serviceBtn,
        'itemsbtn' : itemsBtn,
        'reviewmainimgareasp' : reviewMainimgareaSp,
        'reviewh2' : reviewH2,
        'reviewcontent1' : reviewContent1,
        'reviewcontent2' : reviewContent2,
        'reviewmainimgareapc' : reviewMainimgareaPc,
        'modal' : modal,
    },
    data(){
        return{

            // headder
            // logoのパス
            logo_path: './img/logo/logo.png',

            //headerのサイトマップナビゲーション(PC)
            header_nav_menus: [{
                label: 'TOP',
                path: './index.html'
            },{
                label: 'APPLY',
                path: './index.html'            
            },{
                label: 'LOGIN',
                path: './index.html'
            },{
                label: 'ITEMS',
                path: './index.html'
            },{
                label: 'MY ORDER',
                path: './index.html'
            }],
            
            //headerのサイトマップナビゲーション(SP)
            header_nav_menus_sp: [{
                label: 'APPLY',
                path: './index.html'                   
            },{
                label: 'ITEMS',
                path: './index.html'                
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

            // applyボタン
            // arrowの画像パス
            btn_arrow_path: './img/btn_arrow/btn_arrow.png',

            // topページ
            top_h1: [{
                h1: 'Design Your'
            },{
                h1: 'SPECIAL'
            },{
                h1: 'with Us'
            }],

            //スライダーの写真
            slider_img_list: [{
                path: './img/top_slider_img/slider_img_1.png'
            },{
                path: './img/top_slider_img/slider_img_2.png'
            },{
                path: './img/top_slider_img/slider_img_3.png'
            },{
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
            }},                        
            // topページ

            // about
            // aboutのh1
            about_h1: 'ABOUT',

            // aboutのh2
            about_h2: [{
                h2: 'あなたらしさとは？'
            },{
                h2: 'それを一緒に考えましょう！！'
            }],

            // aboutの説明文
            about_explains: [{
                explain: '我々は従来のオーダーメイドではありません。'
            },{
                explain: 'あなただけのオリジナルファッションを生み出すプロ集団です'
            },{
                explain: 'どういうことかというと、あなたが着たい1着を現役の'
            },{
                explain: 'ファッションデザイナーがジャンルを問わず1からデザインします。'
            },{
                explain: 'デザインや素材などは我々プロにお任せ下さい。'
            },{
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
            },{
                id: 'shirts-service-btn',                
                service_icons_path: './img/icons_img/icon_2.png',
                span_outer_class: 'shirts-service-btn-outer',
                span_inner_class: 'shirts-service-btn-inner',                
                service_name: 'SHIRTS',           
                servise_plice: '¥ 5,000~',  
                view_more: 'VIEW MORE',
                view_arrow_1_path: './img/icons_img/service_arrow_1.png',
                view_arrow_2_path: './img/icons_img/service_arrow_2.png'                                                            
            },{
                id: 'bottoms-service-btn',
                service_icons_path: './img/icons_img/icon_3.png',
                span_outer_class: 'bottoms-service-btn-outer',
                span_inner_class: 'bottoms-service-btn-inner',
                service_name: 'BOTTOMS',
                servise_plice: '¥ 10,000~',  
                view_more: 'VIEW MORE',
                view_arrow_1_path: './img/icons_img/service_arrow_1.png',
                view_arrow_2_path: './img/icons_img/service_arrow_2.png'                                               
            },{
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
            // service

            // review画面
            // reviewのh1
            review_h1: 'REVIEW',

            //SP画面のメイン画像 
            review_main_img_list_sp: [{
                img_id: 'review-img-1',
                img_path: './img/phone_main_img/review_img_1.png',
                date: '2022.07.08',
                initial: 'K.H',
                btn_id: 'review-detail-btn-1',
                btn_path: './img/review_arrow/sp_arrow.png'
            },{
                img_id: 'review-img-2',
                img_path: './img/phone_main_img/review_img_2.png',
                date: '2022.08.07',
                initial: 'I.S',                                             
                btn_id: 'review-detail-btn-2',
                btn_path: './img/review_arrow/sp_arrow.png',   
            }],

            // reviewのh2
            review_h2: [{
                h2: '実際の利用者の声をリアルにお届け！！'
            },{
                h2: '用途ははそれぞれ！'
            }],

            // reviewの概要
            review_explains_list_1: [{
                explain: '作成するものはあなたの人生の一着。'
            },{
                explain: '一緒に創り上げた作品を一部ではありますがご紹介させて頂きます。'
            },{
                explain: 'バンドのライブ衣装やビジネスカジュアルなシーンにて、'
            },{
                explain: '勝負の一着を創作する。'
            },{
                explain: 'デザインや素材などは我々プロにお任せ下さい。'
            }],   

            review_explains_list_2: [{
                explain: '用途は様々ですが、共通点が一つだけあります。'
            },{
                explain: 'それは、どの作品もお客様と共作したという点です。'
            },{
                explain: 'あなたの個性を表現する時、是非ご参考にして下さい！'
            }],    

            //PC画面のメイン画像 
            review_main_img_area_pc: [{
                img_id: 'review-img-1',
                img_path: './img/display_img/display_img_2.png',
                date: '2022.07.08',
                initial: 'K.H',                
                btn_id: 'review-detail-btn-1',
                btn_path: './img/review_arrow/pc_arrow.png'
            },{
                img_id: 'review-img-2',
                img_path: './img/display_img/display_img_3.png',
                date: '2022.08.07',
                initial: 'I.S',                    
                btn_id: 'review-detail-btn-2',
                btn_path: './img/review_arrow/pc_arrow.png'                
            }],
            // review画面

            // モーダル
            isShown: false,

            //モーダル(商品情報)
            displayList: '',

            // 

            // footer

            footer_logo_path: './img/logo/logo_footer.png',

            site_map: 'サイトマップ',

            footer_btn_label: 'お申し込み',

            btn_path: './img/footer_btn/btn.png',

            footer_sitemap_links: [{
                link: '・TOP'
            },{
                link: '・ABOUT '
            },{
                link: '・SERVICE'
            },{
                link: '・REVIEW'
            }],

            footer_relation_site: '関連サイト',

            footer_relation_site_links: [{
                link: 'http//aaaa/bb/ccccccccc'
            },{
                link: 'http//aaaa/bb/ccccccccc'
            },{
                link: 'http//aaaa/bb/ccccccccc'
            }],

            footer_address: 'お問い合わせ',

            footer_address_links: [{
                link: '住所:東京都渋谷区1-1'
            },{
                link: 'TEL:00-1234-5678'
            },{
                link: 'E-mail:yours_@co.jp'
            }],

            footer_sns: '公式SNS'
            

        };    
        // モーダル    
    },
    methods: {

        //ハンバーガーメニューの切り替え
        humbergerButton() {
            this.humbergerisActive = !this.humbergerisActive;
        },

        // モーダルの表示リスト
        onDisplayList(item_lists) {
            this.setDisplayList(item_lists);
        },

        //モーダルの非表示 
        closeModal() {
            this.isShown = false;
        },

       //モーダルの表示 
        openModal() {
            this.isShown = true;  
            this. onDisplayList(); 
        },      

        // displayリストの設定
        setDisplayList (item_lists) {
            this.displayList = item_lists;
        },

    }
});