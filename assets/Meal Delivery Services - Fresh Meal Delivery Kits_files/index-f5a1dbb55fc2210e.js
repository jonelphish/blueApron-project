(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9367:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Le}});var a=n(67294),i=n(9008),s=n.n(i),o=n(59499),r=n(2664),l=n(50029),c=n(87794),p=n.n(c),d=n(6317),g=n(44225),m=n(88569),h=n(58479),u=n(78528),_=n(83767),x=function(){_.Z.trackEvent({action:"Page View",category:"Homepage",exclusionList:[]})},b=function(){_.Z.trackEvent({action:"Browse Our Menus Button Click",category:"Homepage"})},j=function(){_.Z.trackEvent({action:"AppStore See Plans Button Click",category:"Homepage"})},S=function(){_.Z.trackEvent({action:"Prepared & Ready Hero Click",category:"Homepage"})},f=function(){_.Z.trackEvent({action:"Meal Kit Hero Click",category:"Homepage"})},y=n(9961),k=n(15008),v=n(52778),C=n(36808),N=n.n(C),B=n(12345),w=n(11163),H=n(3918),P=n.n(H),R=n(85893),T=function(e){var t=e.coupon,n=N().get("coupon_promotion_message"),a=(0,w.useRouter)(),i=t&&t.couponMessage||n&&decodeURI(n)||"$".concat(t.discount," off your first delivery");return(0,R.jsx)("div",{className:P().homepageCouponBannerContainer,children:(0,R.jsx)("div",{className:"promotion-container-original",children:(0,R.jsxs)("div",{className:P().promoContent,children:[(0,R.jsx)("span",{className:P().promoMessage,children:i}),(0,R.jsx)(B.zxk,{color:"orange",size:"small",text:"redeem offer",onClick:function(){a.push("/pricing")},styles:{height:"35px",fontSize:"12px",fontWeight:500}})]})})})},E=n(3649),O=n.n(E),M="homepage-coupon-banner",A=function(e){var t=e.reduxFetchCoupon,n=e.reduxRemoveNotice,i=e.coupon,s=e.hasAppliedCoupon,o=(0,r.v9)((function(e){return(0,u.U6)(e,v.b5.VARIATION)})),c=(0,a.useState)(!1),h=c[0],_=c[1],b=i&&i.code;return(0,a.useEffect)((function(){var e=function(){var e=(0,l.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:i?(i.discount,i.maxAmountPerUse,(0,k.$4)(i)||n(M),x()):x();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),function(){n(M)}}),[b]),i&&!(0,k.$4)(i)&&n(M),(0,R.jsx)(R.Fragment,{children:o?(0,R.jsxs)(a.Fragment,{id:"homepage-header-container",children:[i&&(0,R.jsx)(g.Z,{setShowCouponModal:_,coupon:i,isApplied:s}),(0,R.jsx)(d.Z,{isSticky:!0,couponPresent:!!i}),h&&(0,R.jsx)(m.Z,{setShowCouponModal:_,coupon:i,learnMore:!0})]}):(0,R.jsxs)("div",{className:O().container,id:"homepage-header-container",children:[(0,R.jsx)(d.Z,{}),i&&(0,R.jsx)(T,{coupon:i})]})})},I={reduxRemoveNotice:h.qq,reduxFetchCoupon:y.v3};A.defaultProps={coupon:null,hasAppliedCoupon:!1};var D=(0,r.$j)((function(e){return{coupon:(0,k.A7)(e.coupons)}}),I)(A),Z=n(34910),q=n(91103),z=n(37914),L=n(55793),F=n(83144),W=n(66147),Y=function(){var e=C.get("user_attributes");if(e)return JSON.parse(e)},G=n(21972),U=n.n(G),V=n(94184),X=n.n(V),Q=n(41664),K=n.n(Q),J=n(3384),$=n(73327),ee=n(49842),te=n.n(ee),ne=function(){return(0,R.jsx)("div",{id:"app-store-section",children:(0,R.jsxs)("div",{className:te().ratingsSection,children:[(0,R.jsxs)("span",{className:te().ratingsTitle,children:["Our customers think we're\xa0",(0,R.jsx)("span",{className:te().appStoreText,children:"EXCELLENT"})]}),(0,R.jsxs)("div",{className:te().ratingLogo,children:[(0,R.jsx)("img",{src:"https://media.blueapron.com/assets/registration/homepage/appstore_ratings_icon.svg",alt:"app store rating",loading:"lazy",className:te().ratingsImg}),"\xa0",(0,R.jsx)("span",{className:te().ratingText,children:"4.7"})]}),(0,R.jsxs)("p",{className:X()(te().ratingsSubText,te().appStoreSubtext),children:["Based on\xa0",(0,R.jsx)("strong",{children:"38.8K"}),"\xa0App Store Ratings"]}),(0,R.jsx)("a",{className:X()("btn",te().getCookingBtn),href:"/pricing",onClick:j,children:"See Plans"})]})})},ae=n(79774),ie=n.n(ae),se=function(){var e=(0,r.v9)((function(e){return(0,u.U6)(e,v.MX.PREPARED_AND_READY_ENABLED)})),t="/1fa7-c0e9-e530-c6fa";return(0,R.jsxs)("section",{className:X()(ie().ctaSplash),children:[(0,R.jsxs)("div",{className:X()(ie().backgroundImageOverlay),children:[(0,R.jsx)("img",{alt:"A spread of Blue Apron meals and ingredients",className:ie().homepageHero,src:"https://media.blueapron.com/assets/registration/homepage/desktop-splash-v3.png?&height=750&quality=100&format=pjpg",loading:"lazy"}),(0,R.jsx)("div",{className:ie().topContainer,children:(0,R.jsxs)("div",{className:ie().topContainerTxt,children:[(0,R.jsx)("h2",{className:"hero-title js-hero-image-title",children:"Easy meals. Quality ingredients. Delivered to your door."}),(0,R.jsx)(K(),{href:t,children:(0,R.jsx)("span",{onClick:function(){(0,$.xS)({event:J.eE.elementClicked,properties:{type:"link",text:"See Plans",destination:t}})},className:X()("btn",ie().getCookingBtn),id:"splash-get-cooking-btn",children:"See plans"})})]})})]}),!e&&(0,R.jsx)(ne,{})]})},oe=n(60770),re=n.n(oe),le=function(){return(0,R.jsxs)("section",{className:X()(re().ctaSplash),children:[(0,R.jsxs)("div",{className:X()(re().backgroundImageOverlay),children:[(0,R.jsx)("div",{className:X()(re().homepageHero,re().mealBackgroundImage)}),(0,R.jsx)("div",{className:re().topContainer,children:(0,R.jsxs)("div",{className:re().topContainerTxt,children:[(0,R.jsxs)("h2",{children:["Easy meal kits.",(0,R.jsx)("br",{}),"Quality ingredients.",(0,R.jsx)("br",{}),"Delivered to your door."]}),(0,R.jsx)(K(),{href:"/pricing",children:(0,R.jsx)("a",{className:X()("btn",re().getCookingBtn),onClick:f,children:"See plans"})})]})})]}),(0,R.jsx)("div",{className:re().spacer}),(0,R.jsxs)("div",{className:X()(re().backgroundImageOverlay),children:[(0,R.jsx)("div",{className:X()(re().homepageHero,re().preppedBackgroundImage)}),(0,R.jsxs)("div",{className:re().newBanner,children:[(0,R.jsx)("strong",{children:"New! "}),"Deliveries begin Jan 8th"]}),(0,R.jsx)("div",{className:X()(re().topContainer,re().withBanner),children:(0,R.jsxs)("div",{className:re().topContainerTxt,children:[(0,R.jsx)("h2",{children:"Prepared & Ready"}),(0,R.jsx)("p",{children:"Pre-made meals delivered fresh and ready to eat"}),(0,R.jsx)(K(),{href:"/pricing?plan=pnr",children:(0,R.jsx)("a",{className:X()("btn",re().getCookingBtn),onClick:S,children:"Pre-Order"})})]})})]})]})},ce=[["Before Blue Apron, I tried HelloFresh. Blue Apron beats them on all counts\u2014directions, freshness, packing, and prep.","\u2014 Cheryl"],["We love Blue Apron! It eliminates a ton of food waste while allowing us to try new things and have tasty meals. Really great quality food, awesome flavors, and things we wouldn't otherwise have any idea how to create.","\u2014 Christy"],["We changed from HelloFresh to Blue Apron and it was the best choice we made!","\u2014 Leslie"],["We'd tried many other food delivery services and none of them have compared in quality and variety to Blue Apron.","\u2014 Katie"],["My entire family loves the dishes I make! This truly makes my life easier as a working mom! It allows my family to sit down together and enjoy our dinner. I love that my kids love it.","\u2014 Angie"]],pe=[{image:"https://media.blueapron.com/assets/registration/homepage/craft.webp?width=300&amp;height=300&amp;quality=90",title:"Craft",subtitle:"Cheese Crisp Burgers",alt:"Burger with cheese crisps and fries"},{image:"https://media.blueapron.com/assets/registration/homepage/wellness.webp?width=300&amp;height=300&amp;quality=90",title:"Wellness",subtitle:"Turkey & Mushroom Lettuce Cups",alt:"Bowls with lettuce, cucumber, and turkey and pepper mix"},{image:"https://media.blueapron.com/assets/registration/homepage/family-friendly.webp?width=300&amp;height=300&amp;quality=90",title:"Family Friendly",subtitle:"Mafalda Pasta",alt:"Pasta covered with tomato based sauce mixed with capers and zucchini slices"},{image:"https://media.blueapron.com/assets/registration/homepage/fast-and-easy.webp?width=300&amp;height=300&amp;quality=90",title:"Fast & Easy",subtitle:"Sheet Pan Cheesy Jalape\xf1o Chicken",alt:"A tray with cheese covered chicken breasts and string beans covered in pepper flakes"},{image:"https://media.blueapron.com/assets/registration/homepage/vegetarian.webp?width=300&amp;height=300&amp;quality=90",title:"Vegetarian",subtitle:"Quinoa & Vegetable \u201cFried Rice\u201d",alt:"Bowl with broccoli and carrot medley topped with fried egg and peanuts"},{image:"https://media.blueapron.com/assets/registration/homepage/premium-steak.webp?width=300&amp;height=300&amp;quality=90",title:"Premium",subtitle:"NY Strip Steaks & Herb-Mushroom Pan Sauce",alt:"Plate with steak drizzled with mushrooms and sauce next to mashed potatoes and cooked greens"},{image:"https://media.blueapron.com/assets/registration/homepage/ready-to-cook.webp?width=300&amp;height=300&amp;quality=90",title:"Ready to Cook",subtitle:"Pesto Chicken and Orzo",alt:"Cooked meal in a ready made pan"},{image:"https://media.blueapron.com/assets/registration/homepage/heat-and-eat.webp?width=300&amp;height=300&amp;quality=90",title:"Heat & Eat",subtitle:"Cheesy Truffle Cavatappi",alt:"Microwave ready tray"},{image:"https://media.blueapron.com/assets/registration/homepage/breakfast.webp?width=300&amp;height=300&amp;quality=90",title:"Breakfast",subtitle:"Fried Egg & Prosciutto Sandwiches",alt:"Plate with Egg & Prosciutto peaking out of a potato bun"},{image:"https://media.blueapron.com/assets/registration/homepage/desserts.webp?width=300&amp;height=300&amp;quality=90",title:"Desserts",subtitle:"Flourless Chocolate Cake",alt:"Chocolate cake with corner slice moved to a plate and topped with whipped cream"}],de=[{image:"https://media.blueapron.com/assets/registration/homepage/chef-experience.webp?height=374&quality=90",alt:"ba chef",photoTitle:"5 decades of top restaurant experience",subtitle1:"Our chefs bring high standards to",subtitle2:"crafting your meals."},{image:"https://media.blueapron.com/assets/registration/homepage/fresh-ingredients.webp?height=374&quality=90",alt:"ba-ingredients",photoTitle:"Fresher ingredients faster",subtitle1:"80% of ingredients come directly from",subtitle2:"producers."},{image:"https://media.blueapron.com/assets/registration/homepage/flexible-mobile.webp?height=374&quality=90",alt:"ba flexible",photoTitle:"You're busy, so we're flexible",subtitle1:"Get boxes on your schedule. Skip,",subtitle2:"pause, or cancel anytime."}],ge=n(66271),me=n.n(ge),he=function(){return(0,R.jsxs)("section",{className:me().homePageSection,children:[(0,R.jsx)("span",{className:me().sectionTitle,children:" 465+ million meals shipped"}),(0,R.jsx)("p",{className:me().sectionDescription,children:" See why home cooks stick with the original American meal kit."}),(0,R.jsx)("div",{className:me().whyBaSection,children:de.map((function(e){return(0,R.jsxs)("div",{className:me().baPhoto,children:[(0,R.jsx)("img",{src:e.image,alt:e.alt}),(0,R.jsx)("p",{className:me().baPhotoTitle,children:e.photoTitle}),(0,R.jsx)("p",{className:me().baPhotoSubtitle,children:e.subtitle1}),(0,R.jsx)("p",{className:me().baPhotoSubtitle,children:e.subtitle2})]},e.photoTitle)}))}),(0,R.jsxs)("p",{className:me().getStarted,children:["Get started for as little as ",(0,R.jsx)("span",{className:me().textStyle1,children:"$7.99 per serving"})]}),(0,R.jsx)("a",{className:X()("btn",me().getCookingBtn),id:"splash-get-cooking-btn",href:"/1fa7-c0e9-e530-c6fa",children:"See plans"})]})},ue=n(81273),_e=n.n(ue),xe=function(){var e=(0,r.v9)((function(e){return(0,u.U6)(e,v.MX.PREPARED_AND_READY_ENABLED)}))?"80":"70";return(0,R.jsxs)("section",{className:_e().weeklyOptionsSection,children:[(0,R.jsx)("h2",{className:_e().sectionMainTitle,children:"Choose from"}),(0,R.jsxs)("h2",{className:_e().sectionSubTitle,children:[e,"+ weekly options"]}),(0,R.jsx)("div",{className:_e().weeklyPhotoSection,children:pe.map((function(e){return(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:_e().link,children:(0,R.jsx)(K(),{className:_e().link,onClick:function(){return t=e.title,void _.Z.trackEvent({category:"Homepage",action:"Tile Clicked",attributes:{tileTitle:t}});var t},href:"/on-the-menu",children:(0,R.jsx)("img",{src:e.image,alt:e.alt,className:"recipe-image",loading:"lazy"})})}),(0,R.jsx)("p",{className:_e().title,children:e.title}),(0,R.jsx)("p",{className:_e().subTitle,children:e.subtitle})]},e.title)}))}),(0,R.jsx)("a",{className:X()("btn",_e().browseMenusBtn),onClick:b,id:"browse-menus-btn",href:"/pages/sample-recipes",children:"Browse Our Menus"})]})},be=n(29182),je=n.n(be),Se=function(e){var t=e.isPreppedAndReadyHomepageEnabled,n=(0,a.useState)(0),i=n[0],s=n[1],r=ce.length;return(0,a.useEffect)((function(){var e=0,t=setInterval((function(){var t=(e+1)%r;e=t,s(t)}),5e3);return function(){return clearInterval(t)}}),[]),(0,R.jsxs)("section",{className:X()(je().testimonialSection,(0,o.Z)({},je().isPnR,t)),children:[(0,R.jsx)("img",{src:"https://media.blueapron.com/assets/registration/homepage/cooking-pot.webp?height=600&quality=90",alt:"ba chef",loading:"lazy"}),(0,R.jsxs)("div",{className:je().fixed,children:[(0,R.jsx)("img",{src:"https://media.blueapron.com/assets/registration/homepage/texture-pattern.webp?height=20&quality=90",alt:"texture pattern",loading:"lazy"}),(0,R.jsx)("p",{className:je().title,children:"Celebrating 10 years of happy customers"}),(0,R.jsx)("p",{className:je().testimonialText,id:"testimonial-text",children:ce[i][0]}),(0,R.jsx)("div",{className:je().rectangle}),(0,R.jsx)("p",{className:je().userName,id:"testimonial-user-name",children:ce[i][1]})]})]})};Se.defaultProps={isPreppedAndReadyHomepageEnabled:!1};var fe=Se,ye=n(3263),ke=n.n(ye),ve=function(){return(0,R.jsxs)("section",{className:ke().gettingStartedSection,children:[(0,R.jsx)("img",{src:"https://media.blueapron.com/assets/registration/homepage/gnocchi-ingredients.webp?height=400&quality=90",alt:"ba chef",loading:"lazy"}),(0,R.jsxs)("div",{className:ke().fixed,children:[(0,R.jsx)("p",{className:ke().title,children:"Get started now"}),(0,R.jsxs)("p",{className:ke().subTitle,children:["for as little as ",(0,R.jsx)("span",{children:"$7.99 per serving"})]}),(0,R.jsx)("a",{className:ke().splashGetStartedBtn,id:"splash-get-started-btn",href:"/1fa7-c0e9-e530-c6fa",children:"See plans"})]})]})},Ce=n(28441),Ne=n(75311),Be=n(73239),we=n(60948),He=n(81307),Pe=n.n(He),Re=function(e){var t=e.onSeePlansClick;return(0,R.jsxs)("div",{className:Pe().pnRBannerContainer,children:[(0,R.jsxs)("div",{className:Pe().copyContainer,children:[(0,R.jsxs)("h1",{className:Pe().copyHeading,children:[(0,R.jsx)("span",{children:"New!"})," Prepared & Ready"]}),(0,R.jsx)("p",{children:"Keep things easy with pre-made meals delivered fresh and ready to eat."}),(0,R.jsxs)("div",{className:Pe().new,onClick:t,children:["see plans",(0,R.jsx)("div",{className:Pe().linkUnderline})]})]}),(0,R.jsx)("div",{className:Pe().pnRBannerImg,children:(0,R.jsx)("img",{src:"https://media.blueapron.com/assets/registration/homepage/prep-and-ready.png?quality=90",alt:"ba chef",loading:"lazy"})})]})},Te=function(e){var t=e.onSeePlansClick;return(0,R.jsxs)("div",{className:Pe().pnRBannerMobileContainer,children:[(0,R.jsx)("div",{className:Pe().pnRBannerMobileImg,children:(0,R.jsx)("img",{src:"https://media.blueapron.com/assets/registration/homepage/prepped-and-ready-mobile.png?width=360&quality=90",alt:"ba chef",loading:"lazy"})}),(0,R.jsxs)("div",{className:Pe().copyContainerMobile,children:[(0,R.jsxs)("h1",{className:Pe().copyHeadingMobile,children:[(0,R.jsx)("span",{children:"New!"})," Prepared & Ready"]}),(0,R.jsx)("p",{children:"Keep things easy with pre-made meals delivered fresh and ready to eat."}),(0,R.jsxs)("div",{className:Pe().new,onClick:t,children:["see plans",(0,R.jsx)("div",{className:Pe().linkUnderlineMobile})]})]})]})},Ee=function(){var e=(0,r.I0)(),t=function(){e((0,Be.WN)("12")),e((0,Ne.qP)("12")),(0,$.xS)({event:J.eE.elementClicked,properties:{type:"link",text:"See Plans",destination:"/pricing"}}),window.location="/pricing"};return(0,Ce.useBreakpoint)(we.SA)?(0,R.jsx)(Te,{onSeePlansClick:t}):(0,R.jsx)(Re,{onSeePlansClick:t})},Oe=n(96038),Me=n.n(Oe),Ae=function(){return(0,R.jsx)("div",{id:"app-store-section",children:(0,R.jsxs)("div",{className:Me().ratingsSection,children:[(0,R.jsxs)("span",{className:Me().ratingsTitle,children:["Our customers think we're\xa0",(0,R.jsx)("span",{className:Me().appStoreText,children:"EXCELLENT"})]}),(0,R.jsxs)("div",{className:Me().ratingContainer,children:[(0,R.jsxs)("div",{className:Me().ratingLogo,children:[(0,R.jsx)("img",{src:"https://media.blueapron.com/assets/registration/homepage/appstore_ratings_icon.svg",alt:"app store rating",loading:"lazy",height:24,className:Me().ratingsImg}),(0,R.jsx)("span",{className:Me().ratingText,children:"4.7"})]}),(0,R.jsxs)("p",{className:X()(Me().ratingsSubText,Me().appStoreSubtext),children:[(0,R.jsx)("div",{className:Me().hideOnMobile,children:"Based on\xa0"}),(0,R.jsx)("strong",{children:"38.8K"}),"\xa0App Store Ratings"]})]})]})})};function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ze=function(e){var t=e.isZendeskLoggedOutEnabled;(0,W.QU)(),(0,W.vI)(null,t),(0,W.ZZ)(t);var n=(0,r.v9)((function(e){return(0,u.U6)(e,"DEPT Test 11: Mini Plan Selector on the Homepage Variation #1")})),i=(0,r.v9)((function(e){return(0,u.U6)(e,v.MX.PREPARED_AND_READY_ENABLED)})),s=(0,r.v9)((function(e){return(0,u.U6)(e,v.MX.PREPARED_AND_READY_HOMEPAGE_BANNER_VARIANT)}));if((0,a.useEffect)((function(){var e=Y();e&&e.id&&e.is_active&&(window.location="/account")}),[]),!i)return(0,R.jsxs)("div",{className:U().container,children:[(0,R.jsx)(q.Z,{children:(0,R.jsx)(Z.Z,{})}),(0,R.jsx)(D,{}),(0,R.jsx)(z.Z,{isSticky:!1,shouldScroll:!1}),(0,R.jsx)(se,{}),n&&(0,R.jsx)("div",{className:U().planSelectorWrapper,children:(0,R.jsx)(L.Z,{})}),(0,R.jsx)(xe,{}),(0,R.jsx)(he,{}),(0,R.jsx)(fe,{isPreppedAndReadyHomepageEnabled:i}),(0,R.jsx)(ve,{}),(0,R.jsx)(B.jCY,{}),(0,R.jsx)(B.$_C,{})]});var o=s?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(le,{}),(0,R.jsx)(Ae,{})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(se,{}),(0,R.jsx)(Ee,{})]});return(0,R.jsxs)("div",{className:U().container,children:[(0,R.jsx)(q.Z,{children:(0,R.jsx)(Z.Z,{})}),(0,R.jsx)(D,{}),(0,R.jsx)(z.Z,{isSticky:!1,shouldScroll:!1}),o,n&&(0,R.jsx)("div",{className:U().planSelectorWrapper,children:(0,R.jsx)(F.Z,{})}),(0,R.jsx)(xe,{}),(0,R.jsx)(he,{}),!s&&(0,R.jsx)(ne,{}),(0,R.jsx)(fe,{isPreppedAndReadyHomepageEnabled:i}),(0,R.jsx)(ve,{}),(0,R.jsx)(B.jCY,{}),(0,R.jsx)(B.$_C,{})]})};Ze.defaultProps={isZendeskLoggedOutEnabled:!1};(0,r.$j)((function(e){return De(De({},e),{},{isZendeskLoggedOutEnabled:(0,u.U6)(e,"live_chat_logged_out")})}))(Ze);var qe=n(64852),ze=n(12555),Le=function(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(s(),{children:[(0,R.jsx)("title",{children:qe.Z.home.title}),(0,R.jsx)("meta",{property:"og:title",content:qe.Z.home.title},"title"),(0,R.jsx)("meta",{name:"description",content:qe.Z.home.description},"description")]}),(0,R.jsx)(r.zt,{store:ze.Z,children:(0,R.jsx)(Ze,{})})]})}},45728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9367)}])},3263:function(e){e.exports={gettingStartedSection:"GetStarted_gettingStartedSection__pI4q6",splashGetStartedBtn:"GetStarted_splashGetStartedBtn__9__0L",title:"GetStarted_title__8FtVe",subTitle:"GetStarted_subTitle__89kDI",fixed:"GetStarted_fixed__olqXB",getStartedBtnMobile:"GetStarted_getStartedBtnMobile__NTum5",getStartedBtnMobileContainer:"GetStarted_getStartedBtnMobileContainer__D1Jxr","splash-get-started-btn":"GetStarted_splash-get-started-btn___rtpl"}},21972:function(e){e.exports={container:"HomeApp_container__t0So0",planSelectorWrapper:"HomeApp_planSelectorWrapper__HjbrI"}},3918:function(e){e.exports={homepageCouponBannerContainer:"HomepageCouponBanner_homepageCouponBannerContainer___sQcb",promoMessage:"HomepageCouponBanner_promoMessage__YNy_y",promoContent:"HomepageCouponBanner_promoContent__fqqCR"}},3649:function(e){e.exports={promoButton:"HomepageHeaderContainer_promoButton__bafBi",pricingCouponNotice:"HomepageHeaderContainer_pricingCouponNotice__bSVD8",couponBanner:"HomepageHeaderContainer_couponBanner___qB26",container:"HomepageHeaderContainer_container__sL5gn"}},79774:function(e){e.exports={ctaSplash:"HomepageHero_ctaSplash__Qh6Jx",topContainer:"HomepageHero_topContainer__JrAKN",topContainerTxt:"HomepageHero_topContainerTxt__wBcgK",homepageHero:"HomepageHero_homepageHero__UPJXn","cta-splash":"HomepageHero_cta-splash__J_DkN","top-container-txt":"HomepageHero_top-container-txt__kRyi8","get-cooking-btn":"HomepageHero_get-cooking-btn__BOuON",backgroundImageOverlay:"HomepageHero_backgroundImageOverlay__yvr9H",getCookingBtn:"HomepageHero_getCookingBtn__1rmzt"}},66271:function(e){e.exports={homePageSection:"HomepageSection_homePageSection__Z6rzR",baPhoto:"HomepageSection_baPhoto__58FAA",baPhotoTitle:"HomepageSection_baPhotoTitle__BfmfZ",baPhotoSubtitle:"HomepageSection_baPhotoSubtitle__OYX2c",whyBaSection:"HomepageSection_whyBaSection__GiHrf",sectionTitle:"HomepageSection_sectionTitle__gEyp4",sectionDescription:"HomepageSection_sectionDescription__yxEVC",getStarted:"HomepageSection_getStarted__qWSp4",textStyle1:"HomepageSection_textStyle1__sSHEv",getCookingBtn:"HomepageSection_getCookingBtn__dyDk1"}},81307:function(e){e.exports={pnRBannerContainer:"PnRBanner_pnRBannerContainer__yW76U",copyContainer:"PnRBanner_copyContainer____3iq",new:"PnRBanner_new__hnYur",linkUnderline:"PnRBanner_linkUnderline__p4MXG",copyHeading:"PnRBanner_copyHeading__8yEYz",pnRBannerImg:"PnRBanner_pnRBannerImg__vQ3oi",pnRBannerMobileContainer:"PnRBanner_pnRBannerMobileContainer__ND1ue",pnRBannerMobileImg:"PnRBanner_pnRBannerMobileImg__B4mK4",copyContainerMobile:"PnRBanner_copyContainerMobile__Qf9PB",copyHeadingMobile:"PnRBanner_copyHeadingMobile___SP9D",linkUnderlineMobile:"PnRBanner_linkUnderlineMobile__MNQb6"}},49842:function(e){e.exports={ratingsSection:"RatingsBanner_ratingsSection__OHZ8n",ratingsTitle:"RatingsBanner_ratingsTitle__F6F_j",appStoreText:"RatingsBanner_appStoreText__xT4i1",ratingText:"RatingsBanner_ratingText__CBpk3",ratingsSubText:"RatingsBanner_ratingsSubText__zNiSp",appStoreSubtext:"RatingsBanner_appStoreSubtext__CRwLn","get-cooking-btn":"RatingsBanner_get-cooking-btn__ooX9F",ratingLogo:"RatingsBanner_ratingLogo__VcNPC",ratingsImg:"RatingsBanner_ratingsImg__tvwlL",getCookingBtn:"RatingsBanner_getCookingBtn__YNFa3"}},96038:function(e){e.exports={ratingsSection:"ShortRatingsBanner_ratingsSection__I3kTz",ratingsTitle:"ShortRatingsBanner_ratingsTitle___yXup",appStoreText:"ShortRatingsBanner_appStoreText__j30kq",ratingText:"ShortRatingsBanner_ratingText__JH6RE",ratingsSubText:"ShortRatingsBanner_ratingsSubText__ENpbv",ratingContainer:"ShortRatingsBanner_ratingContainer__hoTK5",hideOnMobile:"ShortRatingsBanner_hideOnMobile__k6p5C",appStoreSubtext:"ShortRatingsBanner_appStoreSubtext__CiV_X","get-cooking-btn":"ShortRatingsBanner_get-cooking-btn__6Iwt7",ratingsImg:"ShortRatingsBanner_ratingsImg__E28TG",getCookingBtn:"ShortRatingsBanner_getCookingBtn__jzZ_5"}},60770:function(e){e.exports={spacer:"SplitHomepageHero_spacer__VzYQU",ctaSplash:"SplitHomepageHero_ctaSplash__3C_Yn",topContainer:"SplitHomepageHero_topContainer__CQx_g",withBanner:"SplitHomepageHero_withBanner__P8TYC",topContainerTxt:"SplitHomepageHero_topContainerTxt__IcUlS",darkBackground:"SplitHomepageHero_darkBackground__eeWI4",homepageHero:"SplitHomepageHero_homepageHero__z482t",mealBackgroundImage:"SplitHomepageHero_mealBackgroundImage__GuKYD",preppedBackgroundImage:"SplitHomepageHero_preppedBackgroundImage__YYZ_Q",homepageHeroImage:"SplitHomepageHero_homepageHeroImage__g6YfI",newBanner:"SplitHomepageHero_newBanner__CypOS","cta-splash":"SplitHomepageHero_cta-splash__6Q3tI","top-container-txt":"SplitHomepageHero_top-container-txt__Qnmqk","get-cooking-btn":"SplitHomepageHero_get-cooking-btn__b8050",backgroundImageOverlay:"SplitHomepageHero_backgroundImageOverlay__nJvJS",getCookingBtn:"SplitHomepageHero_getCookingBtn__0CLK6"}},29182:function(e){e.exports={testimonialSection:"TestimonialSection_testimonialSection__dVwx5",isPnR:"TestimonialSection_isPnR__3kmWP",title:"TestimonialSection_title__lxAOL",testimonialText:"TestimonialSection_testimonialText__t5Hcu",userName:"TestimonialSection_userName__iVZid",rectangle:"TestimonialSection_rectangle__mVXk8",fixed:"TestimonialSection_fixed__8sCAm"}},81273:function(e){e.exports={weeklyOptionsSection:"WeeklyOptions_weeklyOptionsSection__kDOe_",sectionMainTitle:"WeeklyOptions_sectionMainTitle__CqzhM",link:"WeeklyOptions_link__g5C8h",sectionSubTitle:"WeeklyOptions_sectionSubTitle__7YPqV",browseMenusBtn:"WeeklyOptions_browseMenusBtn__vO_4x",weeklyPhotoSection:"WeeklyOptions_weeklyPhotoSection__H6ys2",title:"WeeklyOptions_title__mKgLG",subTitle:"WeeklyOptions_subTitle__8fCp3"}}},function(e){e.O(0,[571,885,293,664,639,774,888,179],(function(){return t=45728,e(e.s=t);var t}));var t=e.O();_N_E=t}]);