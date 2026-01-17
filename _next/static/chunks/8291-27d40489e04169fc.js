(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8291],
  {
    3422: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => n });
      let n = t(23464).A.create({
        headers: { "Content-Type": "application/json" },
      });
    },
    8169: (e, a, t) => {
      "use strict";
      t.d(a, { T: () => s });
      var n = t(23464);
      class i {
        async setup() {
          this.isVisitActionLogged ||
            ((this.isVisitActionLogged = !0),
            await this.logAction({ action: "VISIT" }));
        }
        async logAction(e) {
          if (this.serverUrl)
            try {
              var a;
              let t = document.referrer,
                i = await n.A.post(
                  "".concat(this.serverUrl, "api/log-user-action"),
                  { ...e, href: this.href, referral_url: t },
                  {
                    headers: {
                      token:
                        null != (a = localStorage.getItem("_cc_token"))
                          ? a
                          : "",
                    },
                  }
                );
              i.data._token && localStorage.setItem("_cc_token", i.data._token);
            } catch (e) {}
        }
        constructor() {
          (this.isVisitActionLogged = !1),
            (this.serverUrl = "https://tapzi-campaign-manager.vercel.app/"),
            (this.href = window.location.href);
        }
      }
      let s = new i();
    },
    12467: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => A });
      var n = t(95155),
        i = t(6874),
        s = t.n(i),
        r = t(12115),
        u = t(30285),
        o = t(55095),
        p = t(45799),
        l = t(86124),
        d = t(59434),
        y = t(2145),
        c = t(56671),
        m = t(66766),
        b = t(35695);
      let f = [
          { name: "Home", href: "/" },
          { name: "How to buy", href: "/how-to-buy" },
          { name: "Games", href: "/game" },
        ],
        A = () => {
          let [e, a] = (0, r.useState)(!1),
            { open: t } = (0, l.o1)(),
            { address: i, isConnected: A } = (0, y.F)(),
            g = (0, b.useRouter)();
          return (
            (0, r.useEffect)(() => {
              let e = () => {
                a(window.scrollY > 200);
              };
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, n.jsx)("nav", {
              className: (0, d.cn)(
                "max-w-[1600px] mx-auto pr-2 lg:px-6 py-4 relative",
                "sticky top-0 z-50",
                e && "bg-background/50 transition-all duration-300"
              ),
              style: { backdropFilter: "blur(5px)" },
              children: (0, n.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: [
                  (0, n.jsx)(p.A, {
                    children: (0, n.jsx)("div", {
                      className: "flex flex-wrap gap-4 mt-4 justify-center",
                      children: (0, n.jsxs)(u.$, {
                        className:
                          "font-semibold text-base h-10 cursor-pointer rounded-md flex md:hidden flex-nowrap",
                        variant: "ghost",
                        onClick: () => {
                          t();
                        },
                        style: {
                          boxShadow:
                            "0px 10px 45px 0px #FFFFFF26, 0px -7px 20px 0px #FFFFFF4D inset",
                          borderRadius: "10px",
                        },
                        children: [
                          (0, n.jsx)(o.A, { className: "w-4" }),
                          " ",
                          i ? (0, d.O)(i) : "Connect Wallet",
                        ],
                      }),
                    }),
                  }),
                  (0, n.jsx)(s(), {
                    href: "/",
                    children: (0, n.jsx)(m.default, {
                      src: "/logo.webp",
                      className: "h-8 md:h-12 w-auto object-fit-contain",
                      width: 100,
                      height: 100,
                      alt: "Logo",
                    }),
                  }),
                  (0, n.jsx)("div", { className: "flex-grow" }),
                  (0, n.jsxs)("div", {
                    className: "text-lg items-center gap-6 hidden lg:flex",
                    children: [
                      f.map((e) =>
                        (0, n.jsx)(
                          s(),
                          {
                            className: (0, d.cn)(
                              "hover:underline",
                              e.className
                            ),
                            ...("#" === e.href
                              ? {
                                  href: "#",
                                  onClick: () => {
                                    c.o.info("Coming soon !", {
                                      duration: 2e3,
                                      position: "top-center",
                                    });
                                  },
                                }
                              : {
                                  href: e.href,
                                  target: e.href.startsWith("http")
                                    ? "_blank"
                                    : "_self",
                                }),
                            children: e.name,
                          },
                          e.name
                        )
                      ),
                  
                    ],
                  }),
                  (0, n.jsx)("div", { className: "flex-grow" }),
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [
                      (0, n.jsx)(u.$, {
                        onClick: () => {
                          A
                            ? g.push("/dashboard")
                            : g.push("https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x27e0f917d9df4d1febc7593bffb8bb09c63e44d6", { scroll: !0 });
                        },
                        style: {
                          boxShadow:
                            "0px 8px 25px 0px #694DFBA6, 0px -7px 20px 0px #FFFFFF4D inset",
                        },
                        className:
                          "rounded-lg bg-primary-violet text-white h-12 lg:h-14 text-lg lg:text-xl font-semibold px-6 md:px-10 hover:bg-primary-violet/80",
                        children: i ? "Dashboard" : "Buy Now",
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
    },
    14046: (e, a, t) => {
      "use strict";
      t.d(a, { y: () => n });
      let n = () =>
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          let a = (16 * Math.random()) | 0;
          return ("x" == e ? a : (3 & a) | 8).toString(16);
        });
    },
    23204: (e, a, t) => {
      "use strict";
      t.d(a, { $W: () => m, Lg: () => y, tN: () => b });
      var n = t(17449),
        i = t(70051),
        s = t(57394),
        r = t(37200),
        u = t(65730),
        o = t(37120),
        p = t(40016),
        l = t(56886),
        d = t(55557);
      let y =
        t(87358).env.NEXT_PUBLIC_PROJECT_ID ||
        "bf3389810983a6aa0870f68f57a5af96";
      if (!y) throw Error("Project ID is not defined");
      let c = [r.r, u.n, o.N, p.E, l.D, d.G],
        m = (0, n.B)({
          chains: c,
          projectId: y,
          metadata: {
            name: "Web3Modal",
            description: "Web3Modal Example",
            url: "https://tapziwinner.org",
            icons: ["https://avatars.githubusercontent.com/u/37784886"],
          },
          ssr: !0,
          storage: (0, i.wE)({ storage: s.iM }),
        }),
        b =
          "https://summer-white-ensemble.solana-mainnet.quiknode.pro/43f4a5802d6e7dd74c2b9aa42095b9cc9aa45098/";
    },
    24944: (e, a, t) => {
      "use strict";
      t.d(a, { k: () => r });
      var n = t(95155);
      t(12115);
      var i = t(55863),
        s = t(59434);
      function r(e) {
        let { className: a, indicatorClassName: t, value: r, ...u } = e;
        return (0, n.jsx)(i.bL, {
          "data-slot": "progress",
          className: (0, s.cn)(
            "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
            a
          ),
          ...u,
          children: (0, n.jsx)(i.C1, {
            "data-slot": "progress-indicator",
            className: (0, s.cn)(
              "bg-primary h-full w-full flex-1 transition-all",
              t
            ),
            style: { transform: "translateX(-".concat(100 - (r || 0), "%)") },
          }),
        });
      }
    },
    29038: (e, a, t) => {
      "use strict";
      t.d(a, { B: () => r, Q: () => o });
      var n = t(45530),
        i = t(3422),
        s = t(95838);
      let r = {
          eth: 3143.6365286611667,
          bnb: 692.2674495004885,
          matic: 0.2330347603120211,
          trx: 0.3002571643645591,
          sol: 164.5364722001612,
          arb: 0.4406958212040459,
          base: 4452e-9,
        },
        u = async () => {
          let e = r;
          try {
            var a;
            e =
              null == (a = (await i.A.get((0, n.I)("api/prices"))).data)
                ? void 0
                : a.prices;
          } catch (e) {
            throw e;
          }
          return e;
        },
        o = () =>
          (0, s.useQuery)({
            queryKey: ["unit-prices"],
            queryFn: u,
            placeholderData: r,
          });
    },
    31839: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => s });
      var n = t(45530),
        i = t(12115);
      let s = () => {
        let [e, a] = (0, i.useState)({
            round: 1,
            price: 0.0035,
            next_price: 0.0045,
            target: 5e5,
            total_target: 5e5,
            raised: 24612.282670058194,
            raised_till_yesterday: 16902.746853995846,
            percent_increase: 28.57,
          }),
          [t, s] = (0, i.useState)(!1),
          r = async () => {
            s(!0),
              fetch((0, n.I)("api/round"))
                .then((e) => e.json())
                .then((e) => {
                  let { data: t } = e;
                  a(t);
                })
                .catch((e) => {})
                .finally(() => {
                  s(!1);
                });
          };
        return (
          (0, i.useEffect)(() => {
            r();
          }, []),
          { round: e, isLoadingRound: t, fetchRound: r }
        );
      };
    },
    41993: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => el });
      var n = t(2145),
        i = t(12607),
        s = t(18224),
        r = t(45530),
        u = t(3422),
        o = t(5041);
      let p = async (e) =>
          (await u.A.post((0, r.I)("api/create-order"), e)).data,
        l = () => (0, o.useMutation)({ mutationFn: p });
      var d = t(12115),
        y = t(56671),
        c = t(8777);
      let m = (e) => (0, c.createHash)("sha256").update(e).digest("hex"),
        b = () => ({
          conversion: async (e) => {
            let a = {
              data: [
                {
                  event_name: "Purchase",
                  event_time: Math.round(new Date().getTime() / 1e3),
                  action_source: "website",
                  user_data: {
                    em: (null == e ? void 0 : e.email)
                      ? [m(null == e ? void 0 : e.email)]
                      : [],
                    ph: [],
                    ...((null == e ? void 0 : e.country) && {
                      country: [m(null == e ? void 0 : e.country)],
                    }),
                  },
                  custom_data: { value: e.value, currency: "USD" },
                  opt_out: !1,
                },
              ],
            };
            try {
              var t;
              null == (t = window) ||
                t.fbq("track", "Purchase", {
                  value: +e.value,
                  currency: "USD",
                });
            } catch (e) {}
            try {
              window.plausible("sale-final", {
                revenue: { currency: "USD", amount: +e.value },
              });
            } catch (e) {}
            fetch("/api/meta-pixel", {
              method: "POST",
              body: JSON.stringify(a),
              headers: { "Content-Type": "application/json" },
            })
              .then((e) => e.json())
              .catch((e) => {});
          },
        });
      var f = t(8169);
      let A = (e) => {
        let { handleRefetch: a } = e,
          { conversion: t } = b(),
          n = async (e) =>
            fetch((0, r.I)("api/check-transaction"), {
              method: "POST",
              body: JSON.stringify(e),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }).then((e) => e.json());
        return {
          checkTransactionStatus: (e, i) => {
            y.o.dismiss(),
              y.o.loading("Transaction processing...", { duration: 1 / 0 });
            let s = setInterval(() => {
              n(e)
                .then(async (e) => {
                  if (e.success) {
                    var n;
                    clearInterval(s),
                      a(),
                      t({
                        value: null == i ? void 0 : i.purchase_usd_amount,
                        email:
                          (null == i ? void 0 : i.email) ||
                          (null == i || null == (n = i.fromAddress)
                            ? void 0
                            : n.toLowerCase()),
                        ...(!!(null == i ? void 0 : i.country) && {
                          country: null == i ? void 0 : i.country,
                        }),
                      }),
                      f.T.logAction({
                        action: "BUY",
                        ref: null == i ? void 0 : i.clickId,
                        value: null == i ? void 0 : i.purchase_usd_amount,
                        isCompleted: !0,
                        wallet_address: null == i ? void 0 : i.fromAddress,
                      }),
                      y.o.dismiss(),
                      y.o.success("Transaction Success", { duration: 1e4 });
                  }
                })
                .catch((e) => console.log(e));
            }, 5e3);
          },
        };
      };
      var g = t(95838);
      let h = async () => (await u.A.get((0, r.I)("api/get-info"))).data.data,
        T = () => (0, g.useQuery)({ queryKey: ["info"], queryFn: h });
      var v = t(35695);
      let w = {
          "Europe/Andorra": "Andorra",
          "Asia/Dubai": "United Arab Emirates",
          "Asia/Kabul": "Afghanistan",
          "Europe/Tirane": "Albania",
          "Asia/Yerevan": "Armenia",
          "Antarctica/Casey": "Antarctica",
          "Antarctica/Davis": "Antarctica",
          "Antarctica/Mawson": "Antarctica",
          "Antarctica/Palmer": "Antarctica",
          "Antarctica/Rothera": "Antarctica",
          "Antarctica/Troll": "Antarctica",
          "Antarctica/Vostok": "Antarctica",
          "America/Argentina/Buenos_Aires": "Argentina",
          "America/Argentina/Cordoba": "Argentina",
          "America/Argentina/Salta": "Argentina",
          "America/Argentina/Jujuy": "Argentina",
          "America/Argentina/Tucuman": "Argentina",
          "America/Argentina/Catamarca": "Argentina",
          "America/Argentina/La_Rioja": "Argentina",
          "America/Argentina/San_Juan": "Argentina",
          "America/Argentina/Mendoza": "Argentina",
          "America/Argentina/San_Luis": "Argentina",
          "America/Argentina/Rio_Gallegos": "Argentina",
          "America/Argentina/Ushuaia": "Argentina",
          "Pacific/Pago_Pago": "Samoa (American)",
          "Europe/Vienna": "Austria",
          "Australia/Lord_Howe": "Australia",
          "Antarctica/Macquarie": "Australia",
          "Australia/Hobart": "Australia",
          "Australia/Melbourne": "Australia",
          "Australia/Sydney": "Australia",
          "Australia/Broken_Hill": "Australia",
          "Australia/Brisbane": "Australia",
          "Australia/Lindeman": "Australia",
          "Australia/Adelaide": "Australia",
          "Australia/Darwin": "Australia",
          "Australia/Perth": "Australia",
          "Australia/Eucla": "Australia",
          "Asia/Baku": "Azerbaijan",
          "America/Barbados": "Barbados",
          "Asia/Dhaka": "Bangladesh",
          "Europe/Brussels": "Belgium",
          "Europe/Sofia": "Bulgaria",
          "Atlantic/Bermuda": "Bermuda",
          "Asia/Brunei": "Brunei",
          "America/La_Paz": "Bolivia",
          "America/Noronha": "Brazil",
          "America/Belem": "Brazil",
          "America/Fortaleza": "Brazil",
          "America/Recife": "Brazil",
          "America/Araguaina": "Brazil",
          "America/Maceio": "Brazil",
          "America/Bahia": "Brazil",
          "America/Sao_Paulo": "Brazil",
          "America/Campo_Grande": "Brazil",
          "America/Cuiaba": "Brazil",
          "America/Santarem": "Brazil",
          "America/Porto_Velho": "Brazil",
          "America/Boa_Vista": "Brazil",
          "America/Manaus": "Brazil",
          "America/Eirunepe": "Brazil",
          "America/Rio_Branco": "Brazil",
          "Asia/Thimphu": "Bhutan",
          "Europe/Minsk": "Belarus",
          "America/Belize": "Belize",
          "America/St_Johns": "Canada",
          "America/Halifax": "Canada",
          "America/Glace_Bay": "Canada",
          "America/Moncton": "Canada",
          "America/Goose_Bay": "Canada",
          "America/Toronto": "Canada",
          "America/Nipigon": "Canada",
          "America/Thunder_Bay": "Canada",
          "America/Iqaluit": "Canada",
          "America/Pangnirtung": "Canada",
          "America/Winnipeg": "Canada",
          "America/Rainy_River": "Canada",
          "America/Resolute": "Canada",
          "America/Rankin_Inlet": "Canada",
          "America/Regina": "Canada",
          "America/Swift_Current": "Canada",
          "America/Edmonton": "Canada",
          "America/Cambridge_Bay": "Canada",
          "America/Yellowknife": "Canada",
          "America/Inuvik": "Canada",
          "America/Dawson_Creek": "Canada",
          "America/Fort_Nelson": "Canada",
          "America/Whitehorse": "Canada",
          "America/Dawson": "Canada",
          "America/Vancouver": "Canada",
          "Indian/Cocos": "Cocos (Keeling) Islands",
          "Europe/Zurich": "Switzerland",
          "Africa/Abidjan": "C\xf4te d'Ivoire",
          "Pacific/Rarotonga": "Cook Islands",
          "America/Santiago": "Chile",
          "America/Punta_Arenas": "Chile",
          "Pacific/Easter": "Chile",
          "Asia/Shanghai": "China",
          "Asia/Urumqi": "China",
          "America/Bogota": "Colombia",
          "America/Costa_Rica": "Costa Rica",
          "America/Havana": "Cuba",
          "Atlantic/Cape_Verde": "Cape Verde",
          "Indian/Christmas": "Christmas Island",
          "Asia/Nicosia": "Cyprus",
          "Asia/Famagusta": "Cyprus",
          "Europe/Prague": "Czech Republic",
          "Europe/Berlin": "Germany",
          "Europe/Copenhagen": "Denmark",
          "America/Santo_Domingo": "Dominican Republic",
          "Africa/Algiers": "Algeria",
          "America/Guayaquil": "Ecuador",
          "Pacific/Galapagos": "Ecuador",
          "Europe/Tallinn": "Estonia",
          "Africa/Cairo": "Egypt",
          "Africa/El_Aaiun": "Western Sahara",
          "Europe/Madrid": "Spain",
          "Africa/Ceuta": "Spain",
          "Atlantic/Canary": "Spain",
          "Europe/Helsinki": "Finland",
          "Pacific/Fiji": "Fiji",
          "Atlantic/Stanley": "Falkland Islands",
          "Pacific/Chuuk": "Micronesia",
          "Pacific/Pohnpei": "Micronesia",
          "Pacific/Kosrae": "Micronesia",
          "Atlantic/Faroe": "Faroe Islands",
          "Europe/Paris": "France",
          "Europe/London": "Britain (UK)",
          "Asia/Tbilisi": "Georgia",
          "America/Cayenne": "French Guiana",
          "Europe/Gibraltar": "Gibraltar",
          "America/Nuuk": "Greenland",
          "America/Danmarkshavn": "Greenland",
          "America/Scoresbysund": "Greenland",
          "America/Thule": "Greenland",
          "Europe/Athens": "Greece",
          "Atlantic/South_Georgia":
            "South Georgia & the South Sandwich Islands",
          "America/Guatemala": "Guatemala",
          "Pacific/Guam": "Guam",
          "Africa/Bissau": "Guinea-Bissau",
          "America/Guyana": "Guyana",
          "Asia/Hong_Kong": "Hong Kong",
          "America/Tegucigalpa": "Honduras",
          "America/Port-au-Prince": "Haiti",
          "Europe/Budapest": "Hungary",
          "Asia/Jakarta": "Indonesia",
          "Asia/Pontianak": "Indonesia",
          "Asia/Makassar": "Indonesia",
          "Asia/Jayapura": "Indonesia",
          "Europe/Dublin": "Ireland",
          "Asia/Jerusalem": "Israel",
          "Asia/Kolkata": "India",
          "Indian/Chagos": "British Indian Ocean Territory",
          "Asia/Baghdad": "Iraq",
          "Asia/Tehran": "Iran",
          "Atlantic/Reykjavik": "Iceland",
          "Europe/Rome": "Italy",
          "America/Jamaica": "Jamaica",
          "Asia/Amman": "Jordan",
          "Asia/Tokyo": "Japan",
          "Africa/Nairobi": "Kenya",
          "Asia/Bishkek": "Kyrgyzstan",
          "Pacific/Tarawa": "Kiribati",
          "Pacific/Kanton": "Kiribati",
          "Pacific/Kiritimati": "Kiribati",
          "Asia/Pyongyang": "Korea (North)",
          "Asia/Seoul": "Korea (South)",
          "Asia/Almaty": "Kazakhstan",
          "Asia/Qyzylorda": "Kazakhstan",
          "Asia/Qostanay": "Kazakhstan",
          "Asia/Aqtobe": "Kazakhstan",
          "Asia/Aqtau": "Kazakhstan",
          "Asia/Atyrau": "Kazakhstan",
          "Asia/Oral": "Kazakhstan",
          "Asia/Beirut": "Lebanon",
          "Asia/Colombo": "Sri Lanka",
          "Africa/Monrovia": "Liberia",
          "Europe/Vilnius": "Lithuania",
          "Europe/Luxembourg": "Luxembourg",
          "Europe/Riga": "Latvia",
          "Africa/Tripoli": "Libya",
          "Africa/Casablanca": "Morocco",
          "Europe/Monaco": "Monaco",
          "Europe/Chisinau": "Moldova",
          "Pacific/Majuro": "Marshall Islands",
          "Pacific/Kwajalein": "Marshall Islands",
          "Asia/Yangon": "Myanmar (Burma)",
          "Asia/Ulaanbaatar": "Mongolia",
          "Asia/Hovd": "Mongolia",
          "Asia/Choibalsan": "Mongolia",
          "Asia/Macau": "Macau",
          "America/Martinique": "Martinique",
          "Europe/Malta": "Malta",
          "Indian/Mauritius": "Mauritius",
          "Indian/Maldives": "Maldives",
          "America/Mexico_City": "Mexico",
          "America/Cancun": "Mexico",
          "America/Merida": "Mexico",
          "America/Monterrey": "Mexico",
          "America/Matamoros": "Mexico",
          "America/Mazatlan": "Mexico",
          "America/Chihuahua": "Mexico",
          "America/Ojinaga": "Mexico",
          "America/Hermosillo": "Mexico",
          "America/Tijuana": "Mexico",
          "America/Bahia_Banderas": "Mexico",
          "Asia/Kuala_Lumpur": "Malaysia",
          "Asia/Kuching": "Malaysia",
          "Africa/Maputo": "Mozambique",
          "Africa/Windhoek": "Namibia",
          "Pacific/Noumea": "New Caledonia",
          "Pacific/Norfolk": "Norfolk Island",
          "Africa/Lagos": "Nigeria",
          "America/Managua": "Nicaragua",
          "Europe/Amsterdam": "Netherlands",
          "Europe/Oslo": "Norway",
          "Asia/Kathmandu": "Nepal",
          "Asia/Katmandu": "Nepal",
          "Pacific/Nauru": "Nauru",
          "Pacific/Niue": "Niue",
          "Pacific/Auckland": "New Zealand",
          "Pacific/Chatham": "New Zealand",
          "America/Panama": "Panama",
          "America/Lima": "Peru",
          "Pacific/Tahiti": "French Polynesia",
          "Pacific/Marquesas": "French Polynesia",
          "Pacific/Gambier": "French Polynesia",
          "Pacific/Port_Moresby": "Papua New Guinea",
          "Pacific/Bougainville": "Papua New Guinea",
          "Asia/Manila": "Philippines",
          "Asia/Karachi": "Pakistan",
          "Europe/Warsaw": "Poland",
          "America/Miquelon": "St Pierre & Miquelon",
          "Pacific/Pitcairn": "Pitcairn",
          "America/Puerto_Rico": "Puerto Rico",
          "Asia/Gaza": "Palestine",
          "Asia/Hebron": "Palestine",
          "Europe/Lisbon": "Portugal",
          "Atlantic/Madeira": "Portugal",
          "Atlantic/Azores": "Portugal",
          "Pacific/Palau": "Palau",
          "America/Asuncion": "Paraguay",
          "Asia/Qatar": "Qatar",
          "Indian/Reunion": "R\xe9union",
          "Europe/Bucharest": "Romania",
          "Europe/Belgrade": "Serbia",
          "Europe/Kaliningrad": "Russia",
          "Europe/Moscow": "Russia",
          "Europe/Simferopol": "Russia",
          "Europe/Kirov": "Russia",
          "Europe/Volgograd": "Russia",
          "Europe/Astrakhan": "Russia",
          "Europe/Saratov": "Russia",
          "Europe/Ulyanovsk": "Russia",
          "Europe/Samara": "Russia",
          "Asia/Yekaterinburg": "Russia",
          "Asia/Omsk": "Russia",
          "Asia/Novosibirsk": "Russia",
          "Asia/Barnaul": "Russia",
          "Asia/Tomsk": "Russia",
          "Asia/Novokuznetsk": "Russia",
          "Asia/Krasnoyarsk": "Russia",
          "Asia/Irkutsk": "Russia",
          "Asia/Chita": "Russia",
          "Asia/Yakutsk": "Russia",
          "Asia/Khandyga": "Russia",
          "Asia/Vladivostok": "Russia",
          "Asia/Ust-Nera": "Russia",
          "Asia/Magadan": "Russia",
          "Asia/Sakhalin": "Russia",
          "Asia/Srednekolymsk": "Russia",
          "Asia/Kamchatka": "Russia",
          "Asia/Anadyr": "Russia",
          "Asia/Riyadh": "Saudi Arabia",
          "Pacific/Guadalcanal": "Solomon Islands",
          "Indian/Mahe": "Seychelles",
          "Africa/Khartoum": "Sudan",
          "Europe/Stockholm": "Sweden",
          "Asia/Singapore": "Singapore",
          "America/Paramaribo": "Suriname",
          "Africa/Juba": "South Sudan",
          "Africa/Sao_Tome": "Sao Tome & Principe",
          "America/El_Salvador": "El Salvador",
          "Asia/Damascus": "Syria",
          "America/Grand_Turk": "Turks & Caicos Is",
          "Africa/Ndjamena": "Chad",
          "Indian/Kerguelen": "French Southern & Antarctic Lands",
          "Asia/Bangkok": "Thailand",
          "Asia/Dushanbe": "Tajikistan",
          "Pacific/Fakaofo": "Tokelau",
          "Asia/Dili": "East Timor",
          "Asia/Ashgabat": "Turkmenistan",
          "Africa/Tunis": "Tunisia",
          "Pacific/Tongatapu": "Tonga",
          "Europe/Istanbul": "Turkey",
          "Pacific/Funafuti": "Tuvalu",
          "Asia/Taipei": "Taiwan",
          "Europe/Kiev": "Ukraine",
          "Europe/Uzhgorod": "Ukraine",
          "Europe/Zaporozhye": "Ukraine",
          "Pacific/Wake": "US minor outlying islands",
          "America/New_York": "United States",
          "America/Detroit": "United States",
          "America/Kentucky/Louisville": "United States",
          "America/Kentucky/Monticello": "United States",
          "America/Indiana/Indianapolis": "United States",
          "America/Indiana/Vincennes": "United States",
          "America/Indiana/Winamac": "United States",
          "America/Indiana/Marengo": "United States",
          "America/Indiana/Petersburg": "United States",
          "America/Indiana/Vevay": "United States",
          "America/Chicago": "United States",
          "America/Indiana/Tell_City": "United States",
          "America/Indiana/Knox": "United States",
          "America/Menominee": "United States",
          "America/North_Dakota/Center": "United States",
          "America/North_Dakota/New_Salem": "United States",
          "America/North_Dakota/Beulah": "United States",
          "America/Denver": "United States",
          "America/Boise": "United States",
          "America/Phoenix": "United States",
          "America/Los_Angeles": "United States",
          "America/Anchorage": "United States",
          "America/Juneau": "United States",
          "America/Sitka": "United States",
          "America/Metlakatla": "United States",
          "America/Yakutat": "United States",
          "America/Nome": "United States",
          "America/Adak": "United States",
          "Pacific/Honolulu": "United States",
          "America/Montevideo": "Uruguay",
          "Asia/Samarkand": "Uzbekistan",
          "Asia/Tashkent": "Uzbekistan",
          "America/Caracas": "Venezuela",
          "Asia/Ho_Chi_Minh": "Vietnam",
          "Pacific/Efate": "Vanuatu",
          "Pacific/Wallis": "Wallis & Futuna",
          "Pacific/Apia": "Samoa (western)",
          "Africa/Johannesburg": "South Africa",
          "America/Antigua": "Antigua & Barbuda",
          "America/Anguilla": "Anguilla",
          "Africa/Luanda": "Angola",
          "Antarctica/McMurdo": "Antarctica",
          "Antarctica/DumontDUrville": "Antarctica",
          "Antarctica/Syowa": "Antarctica",
          "America/Aruba": "Aruba",
          "Europe/Mariehamn": "\xc5land Islands",
          "Europe/Sarajevo": "Bosnia & Herzegovina",
          "Africa/Ouagadougou": "Burkina Faso",
          "Asia/Bahrain": "Bahrain",
          "Africa/Bujumbura": "Burundi",
          "Africa/Porto-Novo": "Benin",
          "America/St_Barthelemy": "St Barthelemy",
          "America/Kralendijk": "Caribbean NL",
          "America/Nassau": "Bahamas",
          "Africa/Gaborone": "Botswana",
          "America/Blanc-Sablon": "Canada",
          "America/Atikokan": "Canada",
          "America/Creston": "Canada",
          "Africa/Kinshasa": "Congo (Dem. Rep.)",
          "Africa/Lubumbashi": "Congo (Dem. Rep.)",
          "Africa/Bangui": "Central African Rep.",
          "Africa/Brazzaville": "Congo (Rep.)",
          "Africa/Douala": "Cameroon",
          "America/Curacao": "Cura\xe7ao",
          "Europe/Busingen": "Germany",
          "Africa/Djibouti": "Djibouti",
          "America/Dominica": "Dominica",
          "Africa/Asmara": "Eritrea",
          "Africa/Addis_Ababa": "Ethiopia",
          "Africa/Libreville": "Gabon",
          "America/Grenada": "Grenada",
          "Europe/Guernsey": "Guernsey",
          "Africa/Accra": "Ghana",
          "Africa/Banjul": "Gambia",
          "Africa/Conakry": "Guinea",
          "America/Guadeloupe": "Guadeloupe",
          "Africa/Malabo": "Equatorial Guinea",
          "Europe/Zagreb": "Croatia",
          "Europe/Isle_of_Man": "Isle of Man",
          "Europe/Jersey": "Jersey",
          "Asia/Phnom_Penh": "Cambodia",
          "Indian/Comoro": "Comoros",
          "America/St_Kitts": "St Kitts & Nevis",
          "Asia/Kuwait": "Kuwait",
          "America/Cayman": "Cayman Islands",
          "Asia/Vientiane": "Laos",
          "America/St_Lucia": "St Lucia",
          "Europe/Vaduz": "Liechtenstein",
          "Africa/Maseru": "Lesotho",
          "Europe/Podgorica": "Montenegro",
          "America/Marigot": "St Martin (French)",
          "Indian/Antananarivo": "Madagascar",
          "Europe/Skopje": "North Macedonia",
          "Africa/Bamako": "Mali",
          "Pacific/Saipan": "Northern Mariana Islands",
          "Africa/Nouakchott": "Mauritania",
          "America/Montserrat": "Montserrat",
          "Africa/Blantyre": "Malawi",
          "Africa/Niamey": "Niger",
          "Asia/Muscat": "Oman",
          "Africa/Kigali": "Rwanda",
          "Atlantic/St_Helena": "St Helena",
          "Europe/Ljubljana": "Slovenia",
          "Arctic/Longyearbyen": "Svalbard & Jan Mayen",
          "Europe/Bratislava": "Slovakia",
          "Africa/Freetown": "Sierra Leone",
          "Europe/San_Marino": "San Marino",
          "Africa/Dakar": "Senegal",
          "Africa/Mogadishu": "Somalia",
          "America/Lower_Princes": "St Maarten (Dutch)",
          "Africa/Mbabane": "Eswatini (Swaziland)",
          "Africa/Lome": "Togo",
          "America/Port_of_Spain": "Trinidad & Tobago",
          "Africa/Dar_es_Salaam": "Tanzania",
          "Africa/Kampala": "Uganda",
          "Pacific/Midway": "US minor outlying islands",
          "Europe/Vatican": "Vatican City",
          "America/St_Vincent": "St Vincent",
          "America/Tortola": "Virgin Islands (UK)",
          "America/St_Thomas": "Virgin Islands (US)",
          "Asia/Aden": "Yemen",
          "Indian/Mayotte": "Mayotte",
          "Africa/Lusaka": "Zambia",
          "Africa/Harare": "Zimbabwe",
          "Asia/Colcata": "India",
          "Asia/Culcatta": "India",
          "Asia/Kolkota": "India",
          "Asia/Kolcata": "India",
          "Asia/Kalkata": "India",
          "Asia/Calcutta": "India",
        },
        _ = () => w[Intl.DateTimeFormat().resolvedOptions().timeZone] || "";
      var x = t(14046),
        k = t(32109),
        M = t.n(k);
      let S = M().enc.Hex.parse("0000000000000000"),
        C = (e) =>
          M()
            .AES.encrypt(e.toString(), M().enc.Utf8.parse("8860aa0397ecbc4a"), {
              mode: M().mode.CBC,
              padding: M().pad.Pkcs7,
              iv: S,
            })
            .toString();
      var I = t(53412),
        N = t(84661);
      let E = () => {
          y.o.dismiss(),
            y.o.loading("Transaction processing...", { duration: 1 / 0 });
        },
        B = (e) => {
          let { data: a, writeContractAsync: t, reset: n } = (0, I.x)(),
            { isLoading: i, isSuccess: s, data: r } = (0, N.g)({ hash: a });
          return (
            (0, d.useEffect)(() => {
              i && E();
            }, [i]),
            (0, d.useEffect)(() => {
              s && r && (null == e || e(r), n());
            }, [s, r]),
            { writeTransactionAsync: t }
          );
        };
      var P = t(58322),
        U = t(48812),
        D = t(7200);
      let R = [
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "SafeERC20FailedOperation",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "_user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "_price",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
            ],
            name: "BoughtTokensWithWert",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
            ],
            name: "BoughtWithNativeToken",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
            ],
            name: "BoughtWithUSDC",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
            ],
            name: "BoughtWithUSDT",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Paused",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Unpaused",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensNative",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensUSDC",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensUSDT",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "uint256", name: "price", type: "uint256" },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensWert",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "i_eth_usd_priceFeed",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "i_usdt_usd_priceFeed",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "s_usdc",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "s_usdt",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "unpause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_tokenAddress",
                type: "address",
              },
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "withdrawERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "withdrawNative",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        F = [
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "SafeERC20FailedOperation",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
            ],
            name: "BoughtWithBASE",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
            ],
            name: "BoughtWithNativeToken",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
            ],
            name: "BoughtWithUSDC",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
            ],
            name: "BoughtWithUSDT",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Paused",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Unpaused",
            type: "event",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensBASE",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensNative",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensUSDC",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensUSDT",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "i_eth_usd_priceFeed",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "i_usdt_usd_priceFeed",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "s_base",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "s_usdc",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "s_usdt",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "unpause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_tokenAddress",
                type: "address",
              },
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "withdrawERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "withdrawNative",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        L = [
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "SafeERC20FailedOperation",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
            ],
            name: "BoughtWithARB",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
            ],
            name: "BoughtWithNativeToken",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
            ],
            name: "BoughtWithUSDC",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "string",
                name: "clickid",
                type: "string",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
            ],
            name: "BoughtWithUSDT",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Paused",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Unpaused",
            type: "event",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensARB",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensNative",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensUSDC",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "uint256",
                name: "token_quantity",
                type: "uint256",
              },
              { internalType: "string", name: "clickid", type: "string" },
            ],
            name: "buyTokensUSDT",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "i_eth_usd_priceFeed",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "i_usdt_usd_priceFeed",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "s_arb",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "s_usdc",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "s_usdt",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "unpause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_tokenAddress",
                type: "address",
              },
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "withdrawERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "withdrawNative",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        O = [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "delegator",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "fromDelegate",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "toDelegate",
                type: "address",
              },
            ],
            name: "DelegateChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "delegate",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "previousBalance",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newBalance",
                type: "uint256",
              },
            ],
            name: "DelegateVotesChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "MINT_CAP_DENOMINATOR",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "MINT_CAP_NUMERATOR",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "MIN_MINT_INTERVAL",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "burn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "burnFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "uint32", name: "pos", type: "uint32" },
            ],
            name: "checkpoints",
            outputs: [
              {
                components: [
                  { internalType: "uint32", name: "fromBlock", type: "uint32" },
                  { internalType: "uint224", name: "votes", type: "uint224" },
                ],
                internalType: "struct ERC20VotesUpgradeable.Checkpoint",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "delegatee", type: "address" },
            ],
            name: "delegate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "delegatee", type: "address" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "delegateBySig",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "delegates",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "blockNumber", type: "uint256" },
            ],
            name: "getPastTotalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "uint256", name: "blockNumber", type: "uint256" },
            ],
            name: "getPastVotes",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "getVotes",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_l1TokenAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "_initialSupply",
                type: "uint256",
              },
              { internalType: "address", name: "_owner", type: "address" },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "l1Address",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "nextMint",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "numCheckpoints",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_to", type: "address" },
              { internalType: "uint256", name: "_value", type: "uint256" },
              { internalType: "bytes", name: "_data", type: "bytes" },
            ],
            name: "transferAndCall",
            outputs: [{ internalType: "bool", name: "success", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        z = [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOperator",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOperator",
                type: "address",
              },
            ],
            name: "OperatorTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "burn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "burnFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
              },
              { internalType: "uint256", name: "_amount", type: "uint256" },
              { internalType: "address", name: "_to", type: "address" },
            ],
            name: "governanceRecoverUnsupported",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "isOperator",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "recipient_", type: "address" },
              { internalType: "uint256", name: "amount_", type: "uint256" },
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "operator",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "rewardPoolDistributed",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newOperator_",
                type: "address",
              },
            ],
            name: "transferOperator",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        K = [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "allowance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientAllowance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "balance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientBalance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "approver", type: "address" },
            ],
            name: "ERC20InvalidApprover",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "receiver", type: "address" },
            ],
            name: "ERC20InvalidReceiver",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "ERC20InvalidSender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "ERC20InvalidSpender",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        j = [
          {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "_upgradedAddress", type: "address" }],
            name: "deprecate",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_spender", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            name: "approve",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "deprecated",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "_evilUser", type: "address" }],
            name: "addBlackList",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_from", type: "address" },
              { name: "_to", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "upgradedAddress",
            outputs: [{ name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "", type: "address" }],
            name: "balances",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "maximumFee",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "_totalSupply",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "unpause",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "_maker", type: "address" }],
            name: "getBlackListStatus",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { name: "", type: "address" },
              { name: "", type: "address" },
            ],
            name: "allowed",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "paused",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "who", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "pause",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getOwner",
            outputs: [{ name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "owner",
            outputs: [{ name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_to", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "newBasisPoints", type: "uint256" },
              { name: "newMaxFee", type: "uint256" },
            ],
            name: "setParams",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "amount", type: "uint256" }],
            name: "issue",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "amount", type: "uint256" }],
            name: "redeem",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { name: "_owner", type: "address" },
              { name: "_spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ name: "remaining", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "basisPointsRate",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "", type: "address" }],
            name: "isBlackListed",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "_clearedUser", type: "address" }],
            name: "removeBlackList",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "MAX_UINT",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "newOwner", type: "address" }],
            name: "transferOwnership",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "_blackListedUser", type: "address" }],
            name: "destroyBlackFunds",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "_initialSupply", type: "uint256" },
              { name: "_name", type: "string" },
              { name: "_symbol", type: "string" },
              { name: "_decimals", type: "uint256" },
            ],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !1, name: "amount", type: "uint256" }],
            name: "Issue",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !1, name: "amount", type: "uint256" }],
            name: "Redeem",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !1, name: "newAddress", type: "address" }],
            name: "Deprecate",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !1, name: "feeBasisPoints", type: "uint256" },
              { indexed: !1, name: "maxFee", type: "uint256" },
            ],
            name: "Params",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !1, name: "_blackListedUser", type: "address" },
              { indexed: !1, name: "_balance", type: "uint256" },
            ],
            name: "DestroyedBlackFunds",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !1, name: "_user", type: "address" }],
            name: "AddedBlackList",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !1, name: "_user", type: "address" }],
            name: "RemovedBlackList",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Transfer",
            type: "event",
          },
          { anonymous: !1, inputs: [], name: "Pause", type: "event" },
          { anonymous: !1, inputs: [], name: "Unpause", type: "event" },
        ],
        q = () => {
          let e = (0, s.i)(),
            a =
              e === U.t.polygon
                ? "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
                : e === U.t.bsc
                ? "0x55d398326f99059fF775485246999027B3197955"
                : e === U.t.eth
                ? "0xdAC17F958D2ee523a2206206994597C13D831ec7"
                : e === U.t.arbitrum
                ? "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
                : "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
            t =
              e === U.t.polygon
                ? "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"
                : e === U.t.bsc
                ? "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
                : e === U.t.eth
                ? "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                : e === U.t.arbitrum
                ? "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
                : "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
          return {
            USDT_TOKEN_SA: a,
            USDC_TOKEN_SA: t,
            USDT_TOKEN_ABI: { 1: j, 56: K, 137: K, 42161: K, 8453: K }[
              String(e)
            ],
            USDC_TOKEN_ABI: K,
            PRESALE_SA:
              e === U.t.polygon
                ? P.EI
                : e === U.t.bsc
                ? P.IP
                : e === U.t.eth
                ? P.WA
                : e === U.t.arbitrum
                ? P.$_
                : P.bu,
          };
        };
      var G = t(88180),
        W = t(75684);
      let V = "0x912CE59144191C1204E64559FE8253a0e49E6548",
        H = "0xd07379a755A8f11B57610154861D694b2A0f615a";
      var J = t(12361),
        Y = t(11392);
      let Q = () => {
        let { connection: e } = (0, J.w)();
        return { wallet: (0, Y.v)(), connection: e };
      };
      var X = t(12131),
        Z = t(49494),
        $ = t(23570),
        ee = t(58019),
        ea = t(13244);
      let et = (e) => {
        let {
            USDC_TOKEN_ABI: a,
            USDC_TOKEN_SA: t,
            USDT_TOKEN_ABI: i,
            USDT_TOKEN_SA: r,
            PRESALE_SA: u,
          } = q(),
          { address: o } = (0, n.F)(),
          p = e.toLowerCase(),
          l = (0, s.i)(),
          d =
            p === ee.l.usdt ? r : p === ee.l.usdc ? t : p === ee.l.arb ? V : H,
          y =
            p === ee.l.usdt ? i : p === ee.l.usdc ? a : p === ee.l.arb ? O : z,
          { data: c, refetch: m } = (0, ea.Q)({
            abi: y,
            address: d,
            functionName: "allowance",
            args: [o, u],
            chainId: l,
          });
        return { allowance: Number(c || 0), refetchAllowance: m };
      };
      var en = t(32757),
        ei = t.n(en),
        es = t(93482);
      let er = async (e) =>
          (await u.A.post((0, r.I)("api/mark-card-payment"), e)).data,
        eu = () => (0, o.useMutation)({ mutationFn: er });
      var eo = t(47012);
      let ep = (e) => {
          let { tokenAmount: a, inputUSD: t, onSuccess: i, value: s } = e,
            { mutateAsync: r } = eu(),
            [u, o] = (0, d.useState)(null),
            { address: p } = (0, n.F)(),
            l = new eo.Ay$(window.ethereum),
            c = l.utils.toWei(a.toString(), "ether"),
            m = D.XS(String(t), 18),
            b = {
              partner_id: "01K0E4078GRZ5F715G1840TX56",
              origin: "https://widget.wert.io",
              theme: "dark",
              padding: 2,
              currency: "USD",
              extra: {
                item_info: {
                  author: "Tapzi",
                  author_image_url: "https://tapziwinner.org/coin.webp",
                  image_url: "https://tapziwinner.org/android-chrome-512x512.png",
                  name: "$TAPZI",
                  category: "",
                },
              },
            };
          return {
            open: (e) => {
              console.log("Wert Open Called : ", {
                token_in_wei: c,
                amountWei: m,
              });
              let a = l.eth.abi.encodeFunctionCall(
                {
                  inputs: [
                    { internalType: "address", name: "user", type: "address" },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    { internalType: "string", name: "clickid", type: "string" },
                    {
                      internalType: "uint256",
                      name: "token_quantity",
                      type: "uint256",
                    },
                  ],
                  name: "buyTokensUSDTWert",
                  outputs: [],
                  stateMutability: "payable",
                  type: "function",
                },
                [p || "", m, e, c]
              );
              console.log({ value: s });
              let n = (0, es.signSmartContractData)(
                  {
                    address: null == p ? void 0 : p.toLowerCase(),
                    commodity: "USDT",
                    network: "bsc",
                    sc_address: "0x1B073ba70Ae3c510ad734537eA3c6C490a8a8304",
                    sc_input_data: a,
                    commodity_amount: t,
                  },
                  "0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
                ),
                u = new (ei())({
                  ...b,
                  ...n,
                  skip_init_navigation: !0,
                  listeners: {
                    loaded: () => console.log("loaded"),
                    error: (e) => {
                      let { name: a, message: t } = e;
                      y.o.error("Wert Error : ".concat(a, " ").concat(t));
                    },
                    "payment-status": async (a) => {
                      if ("success" === a.status)
                        try {
                          i(),
                            await r({ clickId: e, txnHash: a.tx_id }),
                            y.o.dismiss(),
                            y.o.success(
                              "Your transaction has been successfully confirmed.",
                              { duration: 5e3 }
                            );
                        } catch (e) {
                          y.o.dismiss(), y.o.error("Transaction failed.");
                        }
                      ["failed", "failover", "canceled"].includes(a.status) &&
                        (y.o.dismiss(), y.o.error("Transaction failed.")),
                        "pending" === a.status &&
                          (y.o.dismiss(),
                          y.o.loading(
                            "Wait, your transaction is processing...",
                            { duration: 1 / 0 }
                          ));
                    },
                  },
                  click_id: e,
                });
              o(u), u.open();
            },
            wertWidget: u,
          };
        },
        el = (e) => {
          let {
              currency: a,
              pricesPerUnit: t,
              inputState: r,
              bonuses: u,
              handleRefetch: o,
              round: p,
              token: c,
              isNative: m,
            } = e,
            [b, g] = (0, d.useState)({ show: !1, message: "", type: "error" }),
            { wallet: h, connection: w } = Q(),
            [k, M] = (0, d.useState)(0),
            S = ep({
              tokenAmount: k,
              inputUSD: +r,
              value:
                Number(Math.ceil((r / (null == t ? void 0 : t.bnb)) * 1e3)) /
                1e3,
              onSuccess: o,
            }),
            { publicKey: I, sendTransaction: N, signTransaction: E } = h,
            { signTransaction: K, address: j } = (0, Z.v)(),
            { mutateAsync: J, isPending: Y } = l(),
            ee = (0, v.useSearchParams)(),
            { address: ea } = (0, n.F)(),
            {
              USDT_TOKEN_ABI: en,
              USDC_TOKEN_ABI: ei,
              USDC_TOKEN_SA: es,
              USDT_TOKEN_SA: er,
              PRESALE_SA: eu,
            } = q(),
            { switchChainAsync: eo } = (0, i.R)(),
            [el, ed] = (0, d.useState)(!1),
            { allowance: ey, refetchAllowance: ec } = et(c),
            em = (0, s.i)(),
            [eb, ef] = (0, d.useState)({ order: null, response: null }),
            { data: eA } = T(),
            [eg, eh] = (0, d.useState)(!1),
            { checkTransactionStatus: eT } = A({ handleRefetch: o }),
            { writeTransactionAsync: ev } = B(function (e) {
              let { order: a, response: t } = eb;
              y.o.success("Transaction Confirmed", { duration: 2e3 }),
                ex(e, a, t);
            }),
            { writeTransactionAsync: ew } = B(ek),
            e_ = u
              .filter((e) => e.checked)
              .map((e) => e.value)
              .join(","),
            ex = async (e, a, t) => {
              let n = "";
              "wait" in e &&
                "hash" in e &&
                ((n = e.hash),
                y.o.dismiss(),
                y.o.loading("Wait, your transaction is processing...", {
                  duration: 1 / 0,
                }),
                await e.wait()),
                "transactionHash" in e && (n = e.transactionHash);
              try {
                y.o.dismiss(),
                  y.o.success(
                    "Your transaction has been successfully confirmed",
                    { duration: 5e3 }
                  );
                let e = null == t ? void 0 : t.data;
                eT(
                  {
                    value: Number(null == e ? void 0 : e.value),
                    clickId: null == a ? void 0 : a.clickId,
                    fromAddress: null == e ? void 0 : e.fromAddress,
                    txnHash: n,
                  },
                  a
                );
              } catch (e) {
                g({
                  ...b,
                  show: !0,
                  message: "Transaction failed",
                  type: "error",
                });
              }
            };
          async function ek() {
            if (em === U.t.eth && el) return;
            let e = c.toLowerCase(),
              t = sessionStorage.getItem("clickId"),
              n =
                e === W.l.usdt
                  ? "buyTokensUSDT"
                  : e === W.l.usdc
                  ? "buyTokensUSDC"
                  : e === W.l.arb
                  ? "buyTokensARB"
                  : "buyTokensBASE",
              i =
                em === U.t.bsc ||
                (em === U.t.arbitrum && "USDT" !== c && "USDC" !== c) ||
                (em === U.t.base && "USDT" !== c && "USDC" !== c)
                  ? 18
                  : 6,
              s = D.XS(String(r), i),
              u = a === W.l.arb ? L : a === W.l.base ? F : R;
            console.log({
              allowance: ey,
              amountWei: s,
              decimal: i,
              functionName: n,
            });
            try {
              await ev({
                address: eu,
                abi: u,
                functionName: n,
                args: [s, k.toString(), t],
              });
            } catch (e) {
              console.log(e), eS(e);
            } finally {
              ec();
            }
          }
          let eM = () => {
              var e;
              let a = ee.get("utm_campaign") || "",
                t = ee.get("utm_source") || "",
                n = (null == eA ? void 0 : eA.name) || _(),
                i = null == (e = document.referrer) ? void 0 : e.slice(0, 250);
              return {
                campaign: a,
                source: t,
                country: n,
                referral_domain: i ? new URL(i).host : "",
                referral_url: i,
              };
            },
            eS = (e, a) => {
              y.o.dismiss(),
                e && ("ACTION_REJECTED" === e.code || 4001 === e.code)
                  ? g({
                      ...b,
                      show: !0,
                      message: "You have rejected the transaction",
                      type: "error",
                    })
                  : e &&
                    ("INSUFFICIENT_FUNDS" === e.code ||
                      (e.error && -32e3 === e.error.code) ||
                      (e.data && -32e3 === e.data.code))
                  ? g({
                      ...b,
                      show: !0,
                      message: "Insufficient funds in your wallet",
                      type: "error",
                    })
                  : e &&
                    ((null == e ? void 0 : e.shortMessage) ||
                      (null == e ? void 0 : e.name) ||
                      (null == e ? void 0 : e.message))
                  ? g({
                      ...b,
                      show: !0,
                      message:
                        (null == e ? void 0 : e.shortMessage) ||
                        (null == e ? void 0 : e.name) ||
                        (null == e ? void 0 : e.message),
                      type: "error",
                    })
                  : g({
                      ...b,
                      show: !0,
                      message: "Error occured",
                      type: "error",
                    });
            },
            eC = () => {
              let e = Math.floor(0.01 / p.price);
              return +k < e
                ? (g({
                    ...b,
                    show: !0,
                    message: "The amount to tokens must be at least ".concat(
                      Number(e).toFixed(0)
                    ),
                  }),
                  !0)
                : (g({ ...b, show: !1, message: "" }), !1);
            },
            eI = (e) => {
              let { clickId: a, purchase_usd_amount: t, wallet_address: n } = e;
              f.T.logAction({
                action: "BUY",
                ref: a,
                value: t,
                isCompleted: !1,
                wallet_address: n,
              });
            },
            eN = async () => {
              if (!eC() && !eg) {
                if ((g({ ...b, show: !1 }), eh(!0), !m)) {
                  if (c.toLowerCase() === W.l.usdt) return eD();
                  else if (c.toLowerCase() === W.l.usdc) return eR();
                }
                if (a === W.l.card) return eE();
                if (a === W.l.sol) return eK();
                if (a === W.l.trx) return ej();
                else if (a === W.l.matic) return eU();
                else if (a === W.l.eth) return eB();
                else if (a === W.l.bnb) return eP();
                else if (a === W.l.arb) {
                  if (c.toLowerCase() === W.l.arb) return eF();
                  else if (c.toLowerCase() === W.l.eth) return eL();
                } else if (a === W.l.base) {
                  if (c.toLowerCase() === W.l.base) return eO();
                  else if (c.toLowerCase() === W.l.eth) return ez();
                }
              }
            },
            eE = async () => {
              try {
                let e = (0, x.y)();
                sessionStorage.setItem("clickId", e);
                let a = {
                    value: Number(r),
                    clickId: e,
                    fromAddress: (null == ea ? void 0 : ea.toLowerCase()) || "",
                    currency: "USD",
                    chain: "card",
                    round_number: p.round,
                    round_value: p.price,
                    purchase_usd_amount: Number(r),
                    token_quantity: Number(k),
                    token: C(1),
                    bonus: e_,
                    ...eM(),
                  },
                  t = await J(a);
                eI({
                  clickId: e,
                  purchase_usd_amount: a.purchase_usd_amount,
                  wallet_address: a.fromAddress,
                }),
                  ef({ order: a, response: t }),
                  S.open(e);
              } catch (i) {
                var e, a, t, n;
                (null == i || null == (a = i.response) || null == (e = a.data)
                  ? void 0
                  : e.message) &&
                  y.o.error(
                    null == i ||
                      null == (n = i.response) ||
                      null == (t = n.data)
                      ? void 0
                      : t.message
                  ),
                  eS(i);
              } finally {
                eh(!1);
              }
            },
            eB = async () => {
              if (em !== U.t.eth)
                try {
                  await (null == eo ? void 0 : eo({ chainId: U.t.eth }));
                } catch (e) {}
              let e = eM();
              try {
                let n = +r,
                  i = Number(t.eth) * Number(r),
                  s = (0, x.y)();
                sessionStorage.setItem("clickId", s);
                let u = {
                    value: n,
                    clickId: s,
                    fromAddress: (null == ea ? void 0 : ea.toLowerCase()) || "",
                    currency: a.toUpperCase(),
                    chain: "eth",
                    purchase_usd_amount: i,
                    round_value: p.price,
                    token_quantity: Number(k),
                    round_number: p.round,
                    token: C(t.eth),
                    bonus: e_,
                    ...e,
                  },
                  o = await J(u);
                eI({
                  clickId: s,
                  purchase_usd_amount: u.purchase_usd_amount,
                  wallet_address: u.fromAddress,
                });
                let l = D.g5(String(n));
                y.o.dismiss(),
                  y.o.loading("Click confirm", { duration: 1 / 0 }),
                  await ev({
                    address: P.WA,
                    abi: R,
                    functionName: "buyTokensNative",
                    value: BigInt(l),
                    chainId: U.t.eth,
                    args: [k.toString(), s],
                  }),
                  ef({ order: u, response: o });
              } catch (e) {
                var n, i, s, u;
                (null == e || null == (i = e.response) || null == (n = i.data)
                  ? void 0
                  : n.message) &&
                  y.o.error(
                    null == e ||
                      null == (u = e.response) ||
                      null == (s = u.data)
                      ? void 0
                      : s.message
                  ),
                  eS(e);
              } finally {
                eh(!1);
              }
            },
            eP = async () => {
              if (em !== U.t.bsc)
                try {
                  await (null == eo ? void 0 : eo({ chainId: U.t.bsc }));
                } catch (e) {}
              let e = eM();
              try {
                let n = +r,
                  i = Number(t.bnb) * Number(r),
                  s = (0, x.y)();
                sessionStorage.setItem("clickId", s);
                let u = {
                    value: n,
                    clickId: s,
                    fromAddress: (null == ea ? void 0 : ea.toLowerCase()) || "",
                    currency: a.toUpperCase(),
                    chain: "bsc",
                    purchase_usd_amount: i,
                    round_value: p.price,
                    token_quantity: Number(k),
                    round_number: p.round,
                    token: C(t.bnb),
                    bonus: e_,
                    ...e,
                  },
                  o = await J(u);
                eI({
                  clickId: s,
                  purchase_usd_amount: u.purchase_usd_amount,
                  wallet_address: u.fromAddress,
                });
                let l = D.g5(String(n));
                y.o.dismiss(),
                  y.o.loading("Click confirm", { duration: 1 / 0 }),
                  await ev({
                    address: P.IP,
                    abi: R,
                    functionName: "buyTokensNative",
                    value: BigInt(l),
                    chainId: U.t.bsc,
                    args: [k.toString(), s],
                  }),
                  ef({ order: u, response: o });
              } catch (e) {
                var n, i, s, u;
                (null == e || null == (i = e.response) || null == (n = i.data)
                  ? void 0
                  : n.message) &&
                  y.o.error(
                    null == e ||
                      null == (u = e.response) ||
                      null == (s = u.data)
                      ? void 0
                      : s.message
                  ),
                  eS(e);
              } finally {
                eh(!1);
              }
            },
            eU = async () => {
              if (em !== U.t.polygon)
                try {
                  await (null == eo ? void 0 : eo({ chainId: U.t.polygon }));
                } catch (e) {}
              let e = eM();
              try {
                let n = +r,
                  i = Number(t.matic) * Number(r),
                  s = (0, x.y)();
                sessionStorage.setItem("clickId", s);
                let u = {
                    value: n,
                    clickId: s,
                    fromAddress: (null == ea ? void 0 : ea.toLowerCase()) || "",
                    currency: a.toUpperCase(),
                    chain: "polygon",
                    purchase_usd_amount: i,
                    round_value: p.price,
                    token_quantity: Number(k),
                    round_number: p.round,
                    token: C(t.matic),
                    bonus: e_,
                    ...e,
                  },
                  o = await J(u);
                eI({
                  clickId: s,
                  purchase_usd_amount: u.purchase_usd_amount,
                  wallet_address: u.fromAddress,
                });
                let l = D.g5(String(n));
                y.o.dismiss(),
                  y.o.loading("Click confirm", { duration: 1 / 0 }),
                  await ev({
                    address: P.EI,
                    abi: R,
                    functionName: "buyTokensNative",
                    value: BigInt(l),
                    chainId: U.t.polygon,
                    args: [k.toString(), s],
                  }),
                  ef({ order: u, response: o });
              } catch (e) {
                var n, i, s, u;
                (null == e || null == (i = e.response) || null == (n = i.data)
                  ? void 0
                  : n.message) &&
                  y.o.error(
                    null == e ||
                      null == (u = e.response) ||
                      null == (s = u.data)
                      ? void 0
                      : s.message
                  ),
                  eS(e);
              } finally {
                eh(!1);
              }
            },
            eD = async () => {
              let e = eM();
              try {
                let a = +r,
                  t = +r,
                  n = (0, x.y)();
                sessionStorage.setItem("clickId", n);
                let i = {
                    value: a,
                    clickId: n,
                    fromAddress: (null == ea ? void 0 : ea.toLowerCase()) || "",
                    currency: "USDT",
                    chain: G._3[em.toString()],
                    purchase_usd_amount: t,
                    round_value: p.price,
                    token_quantity: Number(k),
                    round_number: p.round,
                    token: C(1),
                    bonus: e_,
                    ...e,
                  },
                  s = await J(i);
                eI({
                  clickId: n,
                  purchase_usd_amount: i.purchase_usd_amount,
                  wallet_address: i.fromAddress,
                }),
                  ef({ order: i, response: s });
                let u = D.XS(String(a), em === U.t.bsc ? 18 : 6);
                if (ey >= Number(u)) return ek();
                em === U.t.eth &&
                  (0 !== ey &&
                    (ed(!0),
                    y.o.dismiss(),
                    y.o.loading("Initial Approving...", { duration: 1 / 0 }),
                    await ew({
                      address: er,
                      abi: en,
                      functionName: "approve",
                      args: [eu, "0"],
                    })),
                  ed(!1)),
                  await ew({
                    address: er,
                    abi: en,
                    functionName: "approve",
                    args: [eu, u],
                  });
              } catch (e) {
                var a, t, n, i;
                (null == e || null == (t = e.response) || null == (a = t.data)
                  ? void 0
                  : a.message) &&
                  y.o.error(
                    null == e ||
                      null == (i = e.response) ||
                      null == (n = i.data)
                      ? void 0
                      : n.message
                  ),
                  eS(e);
              } finally {
                eh(!1);
              }
            },
            eR = async () => {
              let e = eM();
              try {
                let a = +r,
                  t = +r,
                  n = (0, x.y)();
                sessionStorage.setItem("clickId", n);
                let i = {
                    value: a,
                    clickId: n,
                    fromAddress: (null == ea ? void 0 : ea.toLowerCase()) || "",
                    currency: "USDC",
                    chain: G._3[em.toString()],
                    purchase_usd_amount: t,
                    round_value: p.price,
                    token_quantity: Number(k),
                    round_number: p.round,
                    token: C(1),
                    bonus: e_,
                    ...e,
                  },
                  s = await J(i);
                eI({
                  clickId: n,
                  purchase_usd_amount: i.purchase_usd_amount,
                  wallet_address: i.fromAddress,
                }),
                  ef({ order: i, response: s });
                let u = D.XS(String(a), em === U.t.bsc ? 18 : 6);
                if (ey >= Number(u)) return ek();
                await ew({
                  address: es,
                  abi: ei,
                  functionName: "approve",
                  args: [eu, u],
                });
              } catch (e) {
                var a, t, n, i;
                (null == e || null == (t = e.response) || null == (a = t.data)
                  ? void 0
                  : a.message) &&
                  y.o.error(
                    null == e ||
                      null == (i = e.response) ||
                      null == (n = i.data)
                      ? void 0
                      : n.message
                  ),
                  eS(e);
              } finally {
                eh(!1);
              }
            },
            eF = async () => {
              if (em !== U.t.arbitrum)
                try {
                  await (null == eo ? void 0 : eo({ chainId: U.t.arbitrum }));
                } catch (e) {}
              let e = eM();
              try {
                let a = +r,
                  n = Number(t.arb) * Number(r),
                  i = (0, x.y)();
                sessionStorage.setItem("clickId", i);
                let s = {
                    value: a,
                    clickId: i,
                    fromAddress: (null == ea ? void 0 : ea.toLowerCase()) || "",
                    currency: "ARB",
                    chain: "arbitrum",
                    purchase_usd_amount: n,
                    round_value: p.price,
                    token_quantity: Number(k),
                    round_number: p.round,
                    token: C(t.arb),
                    bonus: e_,
                    ...e,
                  },
                  u = await J(s);
                eI({
                  clickId: i,
                  purchase_usd_amount: s.purchase_usd_amount,
                  wallet_address: s.fromAddress,
                }),
                  ef({ order: s, response: u });
                let o = D.g5(String(a));
                if (ey >= Number(o)) return ek();
                await ew({
                  address: V,
                  abi: O,
                  functionName: "approve",
                  args: [eu, o],
                });
              } catch (e) {
                var a, n, i, s;
                (null == e || null == (n = e.response) || null == (a = n.data)
                  ? void 0
                  : a.message) &&
                  y.o.error(
                    null == e ||
                      null == (s = e.response) ||
                      null == (i = s.data)
                      ? void 0
                      : i.message
                  ),
                  eS(e);
              } finally {
                eh(!1);
              }
            },
            eL = async () => {
              if (em !== U.t.arbitrum)
                try {
                  await (null == eo ? void 0 : eo({ chainId: U.t.arbitrum }));
                } catch (e) {}
              let e = eM();
              try {
                let a = +r,
                  n = Number(t.eth) * Number(r),
                  i = (0, x.y)();
                sessionStorage.setItem("clickId", i);
                let s = {
                    value: a,
                    clickId: i,
                    fromAddress: (null == ea ? void 0 : ea.toLowerCase()) || "",
                    currency: "ETH",
                    chain: "arbitrum",
                    purchase_usd_amount: n,
                    round_value: p.price,
                    token_quantity: Number(k),
                    round_number: p.round,
                    token: C(t.eth),
                    bonus: e_,
                    ...e,
                  },
                  u = await J(s);
                eI({
                  clickId: i,
                  purchase_usd_amount: s.purchase_usd_amount,
                  wallet_address: s.fromAddress,
                });
                let o = D.g5(String(a));
                y.o.dismiss(),
                  y.o.loading("Click confirm", { duration: 1 / 0 }),
                  await ev({
                    address: P.$_,
                    abi: L,
                    functionName: "buyTokensNative",
                    value: BigInt(o),
                    chainId: U.t.arbitrum,
                    args: [k.toString(), i],
                  }),
                  ef({ order: s, response: u });
              } catch (e) {
                var a, n, i, s;
                (null == e || null == (n = e.response) || null == (a = n.data)
                  ? void 0
                  : a.message) &&
                  y.o.error(
                    null == e ||
                      null == (s = e.response) ||
                      null == (i = s.data)
                      ? void 0
                      : i.message
                  ),
                  eS(e);
              } finally {
                eh(!1);
              }
            },
            eO = async () => {
              if (em !== U.t.base)
                try {
                  await (null == eo ? void 0 : eo({ chainId: U.t.base }));
                } catch (e) {}
              let e = eM();
              try {
                let a = +r,
                  n = Number(t.base) * Number(r),
                  i = (0, x.y)();
                sessionStorage.setItem("clickId", i);
                let s = {
                    value: a,
                    clickId: i,
                    fromAddress: (null == ea ? void 0 : ea.toLowerCase()) || "",
                    currency: "BASE",
                    chain: "base",
                    purchase_usd_amount: n,
                    round_value: p.price,
                    token_quantity: Number(k),
                    round_number: p.round,
                    token: C(t.base),
                    bonus: e_,
                    ...e,
                  },
                  u = await J(s);
                eI({
                  clickId: i,
                  purchase_usd_amount: s.purchase_usd_amount,
                  wallet_address: s.fromAddress,
                }),
                  ef({ order: s, response: u });
                let o = D.g5(String(a));
                if (ey >= Number(o)) return ek();
                await ew({
                  address: H,
                  abi: z,
                  functionName: "approve",
                  args: [eu, o],
                });
              } catch (e) {
                var a, n, i, s;
                (null == e || null == (n = e.response) || null == (a = n.data)
                  ? void 0
                  : a.message) &&
                  y.o.error(
                    null == e ||
                      null == (s = e.response) ||
                      null == (i = s.data)
                      ? void 0
                      : i.message
                  ),
                  eS(e);
              } finally {
                eh(!1);
              }
            },
            ez = async () => {
              if (em !== U.t.base)
                try {
                  await (null == eo ? void 0 : eo({ chainId: U.t.base }));
                } catch (e) {}
              let e = eM();
              try {
                let a = +r,
                  n = Number(t.eth) * Number(r),
                  i = (0, x.y)();
                sessionStorage.setItem("clickId", i);
                let s = {
                    value: a,
                    clickId: i,
                    fromAddress: (null == ea ? void 0 : ea.toLowerCase()) || "",
                    currency: "ETH",
                    chain: "base",
                    purchase_usd_amount: n,
                    round_value: p.price,
                    token_quantity: Number(k),
                    round_number: p.round,
                    token: C(t.eth),
                    bonus: e_,
                    ...e,
                  },
                  u = await J(s);
                eI({
                  clickId: i,
                  purchase_usd_amount: s.purchase_usd_amount,
                  wallet_address: s.fromAddress,
                });
                let o = D.g5(String(a));
                y.o.dismiss(),
                  y.o.loading("Click confirm", { duration: 1 / 0 }),
                  await ev({
                    address: P.bu,
                    abi: F,
                    functionName: "buyTokensNative",
                    value: BigInt(o),
                    chainId: U.t.base,
                    args: [k.toString(), i],
                  }),
                  ef({ order: s, response: u });
              } catch (e) {
                var a, n, i, s;
                (null == e || null == (n = e.response) || null == (a = n.data)
                  ? void 0
                  : a.message) &&
                  y.o.error(
                    null == e ||
                      null == (s = e.response) ||
                      null == (i = s.data)
                      ? void 0
                      : i.message
                  ),
                  eS(e);
              } finally {
                eh(!1);
              }
            },
            eK = async () => {
              var e, a, n, i, s;
              let o = eM();
              if (!I) throw new X.kW();
              try {
                let a = Number(t.sol) * Number(r),
                  n = (0, x.y)();
                sessionStorage.setItem("clickId", n);
                let i = {
                    value: +r,
                    clickId: n,
                    fromAddress: (null == I ? void 0 : I.toBase58()) || "",
                    currency: "SOL",
                    chain: "solana",
                    purchase_usd_amount: a,
                    round_value: +p.price,
                    round_number: p.round,
                    token: C(t.sol),
                    token_quantity: Number(k),
                    bonus: u
                      .filter((e) => e.checked)
                      .map((e) => e.value)
                      .join(","),
                    ...o,
                  },
                  s = await J(i);
                f.T.logAction({
                  action: "BUY",
                  ref: n,
                  value: i.purchase_usd_amount,
                  isCompleted: !1,
                  wallet_address: i.fromAddress,
                }),
                  ef({ order: i, response: s });
                let l = new $.PublicKey(
                    "BMPg3AVwxkAQnoC9tyF9va8rsbf6UF8NodeD8D9NW8UD"
                  ),
                  d = 1e9 * r,
                  c = new $.Transaction().add(
                    $.SystemProgram.transfer({
                      fromPubkey: I,
                      toPubkey: l,
                      lamports: d,
                    })
                  );
                console.log({
                  transaction: c,
                  connection: w,
                  amountToLamports: d,
                  destinoPublicKey: l,
                });
                try {
                  let {
                    context: { slot: a },
                    value: { blockhash: t, lastValidBlockHeight: n },
                  } = await w.getLatestBlockhashAndContext();
                  (c.recentBlockhash = t),
                    (c.lastValidBlockHeight = n),
                    (c.feePayer = I);
                  let r = await (null == E ? void 0 : E(c));
                  if (r) {
                    let a = await w.sendRawTransaction(r.serialize(), {
                      preflightCommitment: "confirmed",
                    });
                    if (
                      null ==
                      (e = (
                        await w.confirmTransaction({
                          blockhash: t,
                          lastValidBlockHeight: n,
                          signature: a,
                        })
                      ).value)
                        ? void 0
                        : e.err
                    )
                      return y.o.error(
                        "Transaction error occured. Please check it in block explorer."
                      );
                    await ex({ transactionHash: a }, i, s);
                  } else
                    throw Error(
                      "Something went wrong while signing the transaction."
                    );
                } catch (e) {
                  eS(e);
                }
              } catch (e) {
                (null == e || null == (n = e.response) || null == (a = n.data)
                  ? void 0
                  : a.message) &&
                  y.o.error(
                    null == e ||
                      null == (s = e.response) ||
                      null == (i = s.data)
                      ? void 0
                      : i.message
                  ),
                  eS(e);
              } finally {
                eh(!1);
              }
            },
            ej = async () => {
              let e = eM(),
                a = C(t.trx),
                n = (0, x.y)();
              try {
                let l = Number(t.trx) * Number(r);
                sessionStorage.setItem("clickId", n);
                let d = {
                    value: +r,
                    clickId: n,
                    fromAddress: (null == j ? void 0 : j.toLowerCase()) || "",
                    currency: "TRX",
                    chain: "tron",
                    purchase_usd_amount: l,
                    round_value: +p.price,
                    round_number: p.round,
                    token_quantity: Number(k),
                    token: a,
                    bonus: u
                      .filter((e) => e.checked)
                      .map((e) => e.value)
                      .join(","),
                    ...e,
                  },
                  y = await J(d);
                f.T.logAction({
                  action: "BUY",
                  ref: n,
                  value: d.purchase_usd_amount,
                  isCompleted: !1,
                  wallet_address: d.fromAddress,
                }),
                  ef({ order: d, response: y });
                try {
                  var i, s, o;
                  let e = null == (i = window) ? void 0 : i.tronWeb.toSun(+r),
                    a = await (null == (s = window)
                      ? void 0
                      : s.tronWeb.transactionBuilder.sendTrx(
                          "TCcQFmhiFBfSD1gAH7abwFk4gZvzxPYiAN",
                          e,
                          j
                        )),
                    t = await K(a),
                    n = await (null == (o = window)
                      ? void 0
                      : o.tronWeb.trx.sendRawTransaction(t));
                  n.result &&
                    (await ex({ transactionHash: n.transaction.txID }, d, y));
                } catch (e) {
                  console.log("TRX Error", e);
                }
              } catch (e) {
                console.log(e);
              } finally {
                setTimeout(() => {
                  y.o.dismiss();
                }, 2e3),
                  eh(!1);
              }
            },
            eq = (e) => {
              a === W.l.arb
                ? M(
                    Math.floor(
                      (Number("ETH" === c ? t.eth : "ARB" === c ? t.arb : 1) /
                        p.price) *
                        e
                    )
                  )
                : "base" === a
                ? M(
                    Math.floor(
                      (Number("ETH" === c ? t.eth : "BASE" === c ? t.base : 1) /
                        p.price) *
                        e
                    )
                  )
                : "card" === a || ["USDC", "USDT"].includes(c)
                ? M(Math.floor(Number(e) / p.price))
                : "eth" === a
                ? M(Math.floor((Number(t.eth) / p.price) * e))
                : "matic" === a
                ? M(Math.floor((Number(t.matic) / p.price) * e))
                : "bnb" === a
                ? M(Math.floor((Number(t.bnb) / p.price) * e))
                : "sol" === a
                ? M(Math.floor((Number(t.sol) / p.price) * e))
                : "trx" === a && M(Math.floor((Number(t.trx) / p.price) * e));
            };
          return (
            (0, d.useEffect)(() => {
              eq(Number(r));
            }, [r, a, t, p, c]),
            (0, d.useEffect)(() => {
              r && eC();
            }, [r, k]),
            {
              handleBuy: eN,
              setTokenAmount: M,
              error: b,
              isBuying: eg,
              setIsBuying: eh,
              checkError: eC,
              tokenAmount: k,
            }
          );
        };
    },
    45530: (e, a, t) => {
      "use strict";
      t.d(a, { I: () => n });
      let n = (e) => "".concat("https://api.tapzi.io", "/").concat(e);
    },
    47790: () => {},
    48812: (e, a, t) => {
      "use strict";
      t.d(a, { t: () => n });
      let n = {
        eth: 1,
        bsc: 56,
        polygon: 137,
        arbitrum: 42161,
        avalanche: 43114,
        fantom: 250,
        harmony: 16666e5,
        optimism: 10,
        gnosis: 100,
        heco: 128,
        base: 8453,
      };
    },
    50477: () => {},
    58019: (e, a, t) => {
      "use strict";
      t.d(a, { l: () => n });
      let n = {
        bnb: "bnb",
        eth: "eth",
        matic: "matic",
        card: "card",
        usdt: "usdt",
        usdc: "usdc",
        trx: "trx",
        sol: "sol",
        arb: "arb",
        base: "base",
      };
    },
    58322: (e, a, t) => {
      "use strict";
      t.d(a, {
        $_: () => r,
        EI: () => s,
        IP: () => i,
        Qf: () => o,
        WA: () => n,
        bu: () => u,
      });
      let n = "0xde6ffac93aa6a8cf2307b41a5d8c29ecbfd7f88b",
        i = "0xde6ffac93aa6a8cf2307b41a5d8c29ecbfd7f88b",
        s = "0xdb2b2201e89a3adb897d9a9d60b0b91f663d272e",
        r = "0xde6ffac93aa6a8cf2307b41a5d8c29ecbfd7f88b",
        u = "0xDb2b2201E89a3adb897d9A9d60b0B91F663D272e",
        o = [
          {
            round: 1,
            price: 0.0035,
            next_price: 0.0045,
            target: 5e5,
            total_target: 5e5,
          },
          {
            round: 2,
            price: 0.0045,
            next_price: 0.0055,
            target: 15e5,
            total_target: 2e6,
          },
          {
            round: 3,
            price: 0.0055,
            next_price: 0.0065,
            target: 15e5,
            total_target: 35e5,
          },
          {
            round: 4,
            price: 0.0065,
            next_price: 0.009,
            target: 15e5,
            total_target: 5e6,
          },
        ];
    },
    62523: (e, a, t) => {
      "use strict";
      t.d(a, { p: () => s });
      var n = t(95155);
      t(12115);
      var i = t(59434);
      function s(e) {
        let { className: a, type: t, ...s } = e;
        return (0, n.jsx)("input", {
          type: t,
          "data-slot": "input",
          className: (0, i.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            a
          ),
          ...s,
        });
      }
    },
    73776: () => {},
    75684: (e, a, t) => {
      "use strict";
      t.d(a, { l: () => n });
      var n = (function (e) {
        return (
          (e.bnb = "bnb"),
          (e.eth = "eth"),
          (e.matic = "matic"),
          (e.card = "card"),
          (e.usdt = "usdt"),
          (e.usdc = "usdc"),
          (e.trx = "trx"),
          (e.sol = "sol"),
          (e.arb = "arb"),
          (e.base = "base"),
          e
        );
      })({});
    },
    79368: () => {},
    88180: (e, a, t) => {
      "use strict";
      t.d(a, {
        Rd: () => u,
        Ur: () => o,
        Xv: () => r,
        _3: () => i,
        qN: () => s,
      });
      var n = t(48812);
      let i = {
          1: "eth",
          56: "bsc",
          137: "polygon",
          42161: "arbitrum",
          8453: "base",
        },
        s = {
          eth: n.t.eth,
          matic: n.t.polygon,
          bnb: n.t.bsc,
          arb: n.t.arbitrum,
          base: n.t.base,
        },
        r = {
          eth: "Ethereum",
          matic: "Polygon",
          bnb: "BSC",
          arb: "Arbitrum",
          base: "Base",
        },
        u = {
          eth: "/image/tokens/eth-round.png",
          matic: "/image/tokens/matic.png",
          bnb: "/image/tokens/bnb.png",
          usdt: "/image/tokens/tether.svg",
          usdc: "/image/tokens/usdc.png",
          card: "/image/tokens/card.svg",
          sol: "/image/tokens/solana.svg",
          trx: "/image/tokens/tron.svg",
          arb: "/image/tokens/arb-round.png",
          base: "/image/tokens/base-round.png",
        },
        o = {
          eth: "https://etherscan.io/tx/",
          bsc: "https://bscscan.com/tx/",
          polygon: "https://polygonscan.com/tx/",
          arbitrum: "https://arbiscan.io/tx/",
          base: "https://basescan.org/tx/",
          solana: "https://solscan.io/tx/",
          tron: "https://tronscan.org/#/transaction/",
        };
    },
  },
]);
