"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8380],{67998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(16758);const o={},p=void 0,l={unversionedId:"frontend/Swift/\u8fdc\u7a0b\u901a\u77e5",id:"frontend/Swift/\u8fdc\u7a0b\u901a\u77e5",title:"\u8fdc\u7a0b\u901a\u77e5",description:"\u4e0d\u540c\u5e73\u53f0\u4e4b\u95f4\u7684\u63a8\u9001\u6709\u4e9b\u4e0d\u4e00\u6837\uff0c\u6b64\u5904\u4ee5IOS\u4e3a\u4f8b\u3002",source:"@site/docs/frontend/Swift/\u8fdc\u7a0b\u901a\u77e5.md",sourceDirName:"frontend/Swift",slug:"/frontend/Swift/\u8fdc\u7a0b\u901a\u77e5",permalink:"/en/docs/frontend/Swift/\u8fdc\u7a0b\u901a\u77e5",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/Swift/\u8fdc\u7a0b\u901a\u77e5.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u5b57\u4f53",permalink:"/en/docs/frontend/Swift/\u81ea\u5b9a\u4e49\u5b57\u4f53"},next:{title:"\u91cd\u542fapp\u540e\u6570\u636e\u4fdd\u5b58",permalink:"/en/docs/frontend/Swift/\u91cd\u542fapp\u540e\u6570\u636e\u4fdd\u5b58"}},r={},d=[{value:"\u8bc1\u4e66\u6a21\u5f0f",id:"\u8bc1\u4e66\u6a21\u5f0f",level:2},{value:"Token\u6a21\u5f0f",id:"token\u6a21\u5f0f",level:2},{value:"\u751f\u6210Token",id:"\u751f\u6210token",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:3},{value:"data\u53c2\u6570",id:"data\u53c2\u6570",level:3},{value:"\u9759\u9ed8\u63a8\u9001\uff08Background Notification\uff09",id:"\u9759\u9ed8\u63a8\u9001background-notification",level:3}],s={toc:d};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u4e0d\u540c\u5e73\u53f0\u4e4b\u95f4\u7684\u63a8\u9001\u6709\u4e9b\u4e0d\u4e00\u6837\uff0c\u6b64\u5904\u4ee5IOS\u4e3a\u4f8b\u3002")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u53d1\u9001\u7684aps\u5982\u679cjson\u683c\u5f0f\u4e0d\u5bf9\u4e5f\u4f1a\u51fa\u73b0Response(200)\u7ec8\u7aef\u5374\u5e76\u6ca1\u6709\u6536\u5230\u63a8\u9001\u7684\u73b0\u8c61\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u5927\u62ec\u53f7\u662f\u5426\u9f50\u5168"),(0,i.kt)("li",{parentName:"ul"},"json\u6570\u636e\u5b57\u6bb5\u7684key\u662f\u5426\u6b63\u5e38\u88ab",(0,i.kt)("inlineCode",{parentName:"li"},'""'),"\u5305\u88f9\uff0c\u6ce8\u610fpython\u4e2d\u7684json5\u5e93\u4f1a\u81ea\u52a8\u53bb\u6389key\u7684\u53cc\u5f15\u53f7\u3002"))),(0,i.kt)("h2",{id:"\u8bc1\u4e66\u6a21\u5f0f"},"\u8bc1\u4e66\u6a21\u5f0f"),(0,i.kt)("p",null,"\u8f83\u5c11\u4f7f\u7528\uff0c\u4e0d\u592a\u65b9\u4fbf\uff0c\u6b64\u5904\u6682\u65f6\u7701\u7565\u3002"),(0,i.kt)("h2",{id:"token\u6a21\u5f0f"},"Token\u6a21\u5f0f"),(0,i.kt)("p",null,"\u80fd\u529b\u3001\u8bc1\u4e66\u914d\u7f6e\u5728\u6700\u65b0\u7248\u672c\u7684Xcode\u53ef\u4ee5\u5728\u5e94\u7528\u754c\u9762\u4e2d\u53ef\u4ee5\u5168\u81ea\u52a8\u914d\u7f6e\uff0c\u6b64\u5904\u7701\u7565\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212182137479.png",alt:null})),(0,i.kt)("h3",{id:"\u751f\u6210token"},"\u751f\u6210Token"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/establishing_a_token-based_connection_to_apns"},"\u5b98\u7f51\u6587\u6863")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u751f\u6210\u65b0\u7684key")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/account/resources/authkeys/list"},"Apple Developer")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212161140314.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212161141832.png",alt:null})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u6570\u636e\u51c6\u5907")),(0,i.kt)("p",null,"KEYID"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212161143310.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/account"},"Apple Developer\u8d26\u53f7\u4fe1\u606f")),(0,i.kt)("p",null,"\u56e2\u961fID\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212161151053.png",alt:null})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"alg")),(0,i.kt)("td",{parentName:"tr",align:null},"\u7f16\u7801\u7b97\u6cd5\uff0c\u82f9\u679c\u76ee\u524d\u53ea\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"td"},"ES256"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kid")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e0a\u9762\u8bb0\u5f55\u4e0b\u6765\u7684Key ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"iss")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684\u5f00\u53d1\u8005\u8d26\u53f7\u7684Team ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"iat")),(0,i.kt)("td",{parentName:"tr",align:null},"Token\u7684\u751f\u6210\u65f6\u95f4\uff08UTC\u65f6\u533a\uff0c\u4eceEpoch\u4ee5\u6765\u7684\u79d2\u6570\uff09")))),(0,i.kt)("p",null,"JSON\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "alg" : "ES256",\n   "kid" : "ABC123DEFG"\n}\n{\n   "iss": "DEF123GHIJ",\n   "iat": 1437179036\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"JWT\u7f16\u7801")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u751f\u6210\u7684\u5c31\u662f\u6700\u7ec8\u5411APNS\u670d\u52a1\u5668\u53d1\u9001\u7684\u8bf7\u6c42\u7684\u8bf7\u6c42\u5934\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"authorization: bearer ***"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"***"),"\u5b57\u6bb5\u3002"),(0,i.kt)("p",null,"python\u7248\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import jwt\nimport time\nteamId = '***'\nkeyId = '***'\n\npayload = {\n    \"iss\": teamId,\n    \"iat\": time.time()\n}\n\nheaders = {\n    \"alg\" : \"ES256\",\n    \"kid\" : keyId\n}\n\n# Apple Developer\u4e0b\u8f7d\u7684p8\u6587\u4ef6\nwith open('./AuthKey_****.p8', 'r') as f:\n    privateKey = f.read()\n\ntoken = jwt.encode(payload=payload, algorithm='ES256', headers=headers, key=privateKey)\nprint('token:', token)\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u6ce8\u518c\u7ec8\u7aef\u5e76\u4e14\u83b7\u53d6deviceToken")),(0,i.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2aAppDelegate\u6587\u4ef6\u53bb\u5bf9\u5e94\u5e94\u7528\u7684\u751f\u547d\u5468\u671f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=AppDelegate.swift",title:"AppDelegate.swift"},'import SwiftUI\n\n// \u6269\u5c55Data\uff0c\u5c06Data\u7f16\u7801\u8f6c\u6210\u6b63\u5e38\u5b57\u7b26\u4e32\nextension Data {\n    var hexString: String {\n        return map { String(format: "%02.2hhx", arguments: [$0]) }.joined()\n    }\n}\n\nclass AppDelegate: NSObject, UIApplicationDelegate {\n    func application(_ application: UIApplication,\n               didFinishLaunchingWithOptions launchOptions:\n                     [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n       // Override point for customization after application launch.you\u2019re\n       // \u7533\u8bf7\u6ce8\u518c\u672c\u673a\n        UIApplication.shared.registerForRemoteNotifications()\n        return true\n    }\n\n    func application(_ application: UIApplication,\n                didRegisterForRemoteNotificationsWithDeviceToken\n                    deviceToken: Data) {\n                     // \u5982\u679c\u6ce8\u518c\u6210\u529f\uff0c\u90a3\u4e48\u4f1a\u8c03\u7528\u6b64\u5904\u51fd\u6570\n        print("deviceToken:", deviceToken.hexString)\n//       self.sendDeviceTokenToServer(data: deviceToken)\n    }\n\n    func application(_ application: UIApplication,\n                didFailToRegisterForRemoteNotificationsWithError\n                    error: Error) {\n        print("error:", error)\n       // Try again later.\n    }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"didRegisterForRemoteNotificationsWithDeviceToken"),"\u8fd4\u56de\u7684deviceToken\u9ed8\u8ba4\u5df2\u7ecf\u53d8\u6210Data\u683c\u5f0f\uff0c\u8981\u8f6c\u6210\u5b57\u7b26\u4e32\u9700\u8981\u6269\u5c55Data\u7c7b\u578b\uff0c\u6216\u8005\u76f4\u63a5\u5904\u7406\u6570\u636e\u4e5f\u884c\u3002"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u6269\u5c55Data\uff0c\u5c06Data\u7f16\u7801\u8f6c\u6210\u6b63\u5e38\u5b57\u7b26\u4e32\nextension Data {\n    var hexString: String {\n        return map { String(format: "%02.2hhx", arguments: [$0]) }.joined()\n    }\n}\n'))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u5e94\u7528\u7533\u8bf7\u901a\u77e5\u6743\u9650")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'func requestNotificationAuth(){\n   let center = UNUserNotificationCenter.current()\n   \n   center.requestAuthorization(options: [.alert, .badge, .sound]) { success, error in\n      if success {\n            print("\u7533\u8bf7\u6743\u9650\u6210\u529f\u3002")\n      } else {\n            print("D\'oh!")\n      }\n   }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6ca1\u6709\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"didFinishLaunchingWithOptions"),"\uff0c\u53ef\u80fd\u662f\u4f60\u6ca1\u6709\u6388\u6743\u5e94\u7528\uff0c\u53bb\u8bbe\u7f6e\uff0c\u901a\u77e5\u91cc\u9762\u68c0\u67e5\u4e00\u4e0b\u6743\u9650\u72b6\u6001\u3002")),(0,i.kt)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,i.kt)("p",null,"Development server: api.sandbox.push.apple.com:443"),(0,i.kt)("p",null,"Production server: api.push.apple.com:443`"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -XPOST https://api.sandbox.push.apple.com/3/device/<deviceToken> -H "authorization: bearer <token>" -H "apns-topic: <bundleId>" -H "apns-id: <UUID>" -d "<data>"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apns-id")," \u4f60\u7684\u8fd9\u6761\u63a8\u9001\u7684ID\uff0c\u5982\u679c\u63a8\u9001\u51fa\u73b0\u4e86\u95ee\u9898\uff0c\u90a3\u4e48\u8fd9\u90e8\u5206ID\u4f1a\u8fd4\u56de\u7ed9\u4f60\u7684\u670d\u52a1\u7aef\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authorization")," JWT Token"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apns-topic")," \u5e94\u7528\u7684App Id/Bundle Id"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deviceToken")," \u8bbe\u5907\u7684ID\uff0c\u901a\u8fc7\u5e94\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"registerForRemoteNotifications"),"\u6ce8\u518c\u83b7\u53d6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," \u5177\u4f53\u7684\u901a\u77e5\u5185\u5bb9")),(0,i.kt)("p",null,"data\u8303\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "aps" : {\n        // \u5f39\u7a97\u4fe1\u606f\n        "alert" : {\n            "title" : "Game Request",\n            "subtitle" : "Five Card Draw",\n            "body" : "Bob wants to play poker"\n        },\n        // \u5e94\u7528\u56fe\u6807\u4e0a\u663e\u793a\u7684\u5c0f\u7ea2\u70b9\u6570\u76ee\n        "badge": 0,\n        // \u58f0\u97f3\u7b80\u5355\u7248\u672c   "sound": "default", \n        // \u58f0\u97f3\u81ea\u5b9a\u4e49\u7248\u672c\n        "sound": {\n            // The critical alert flag. Set to 1 to enable the critical alert.\n            "critical": 1,\n            // The name of a sound file in your app\u2019s main bundle or in the Library/Sounds folder of your app\u2019s container directory. Specify the string \u201cdefault\u201d to play the system sound. \n            "name": "default",\n            // The volume for the critical alert\u2019s sound. Set this to a value between 0 (silent) and 1 (full volume).\n            "volume": 1\n        }\n    },\n    // \u81ea\u5b9a\u4e49\u952e\u503c\u5bf9\n    "gameID" : "12345678"\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u9664\u4e86Apple\u5b9a\u4e49\u7684\u952e\u503c\u5bf9\u4ee5\u5916, \u4f60\u4e5f\u53ef\u4ee5\u5f80data\u4e2d\u589e\u52a0\u81ea\u5b9a\u4e49\u7684\u952e\u503c\u5bf9\uff08\u5c11\u91cf\u6570\u636e\uff09\u6765\u4f20\u9012\u7ed9\u4f60\u7684App\u3002\u503c\u5fc5\u987b\u662f\u539f\u59cb\u7c7b\u578b, \u50cfdictionary, array, string, number, \u6216\u8005Boolean. \u81ea\u5b9a\u4e49\u952e\u503c\u5bf9\u80fd\u591f\u5728\u9012\u9001\u7ed9App\u7684UNNotificationContent\u7684userInfo\u7684\u5b57\u5178\u5bf9\u8c61\u4e2d\u83b7\u53d6\u5230\u3002")),(0,i.kt)("h3",{id:"data\u53c2\u6570"},"data\u53c2\u6570"),(0,i.kt)("p",null,"\u8be6\u7ec6\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification"},"Apple Developer generating_a_remote_notification")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u53d1\u9001\u6210\u529f\u4e86\uff0c\u90a3\u4e48\u4f1a\u8fd4\u56de\u4e00\u4e2a200\u7684Response\uff0c\u5982\u679c\u5931\u8d25\u4e86\uff0c\u90a3\u4e48\u8fd4\u56de\u7684\u4f1a\u662f",(0,i.kt)("inlineCode",{parentName:"p"},'{"reason": ""}'),"\u5e76\u4e14\u8bf4\u660e\u539f\u56e0\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u5982\u679c\u53d1\u9001\u7684\u65f6\u5019\u4f60\u672c\u8eab\u5c31\u5728APP\u6253\u5f00\u7684\u754c\u9762\uff0c\u90a3\u4e48\u662f\u4e0d\u4f1a\u6536\u5230\u901a\u77e5\u7684\u3002")),(0,i.kt)("h3",{id:"\u9759\u9ed8\u63a8\u9001background-notification"},"\u9759\u9ed8\u63a8\u9001\uff08Background Notification\uff09"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u9759\u9ed8\u63a8\u9001\u65f6",(0,i.kt)("strong",{parentName:"p"},"aps\u7684\u5185\u5bb9\u53ea\u80fd"),"\u5305\u542b",(0,i.kt)("inlineCode",{parentName:"p"},'"content-available" : 1'),"\uff0c\u4f46\u540c\u65f6\u53ef\u4ee5\u5305\u542b\u81ea\u5b9a\u4e49\u7684\u952e\u503c\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u9759\u9ed8\u63a8\u9001\u65f6\u901a\u77e5\u7684\u8bf7\u6c42\u5fc5\u987b\u5305\u542b",(0,i.kt)("inlineCode",{parentName:"p"},"apns-push-type"),(0,i.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934"),(0,i.kt)("inlineCode",{parentName:"p"},"background"),"\uff0c\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"apns-priority"),"\u7684\u8bf7\u6c42\u5934\u503c\u7b49\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"5"),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "aps" : {\n      "content-available" : 1\n   },\n   "acme1" : "bar",\n   "acme2" : 42\n}\n')),(0,i.kt)("p",null,"\u6ce8\u610f\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the system receives a new background notification, it discards the older notification and only holds the newest one."),(0,i.kt)("li",{parentName:"ul"},"If something force quits or kills the app, the system discards the held notification."),(0,i.kt)("li",{parentName:"ul"},"If the user launches the app, the system immediately delivers the held notification.")),(0,i.kt)("p",null,"\u63a5\u6536\u63a8\u9001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'func application(\n    _ application: UIApplication,\n    didReceiveRemoteNotification userInfo: [AnyHashable : Any],\n    fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void\n){\n    print("userInfo:", userInfo)\n}\n')),(0,i.kt)("p",null,"\u4f60\u7684App\u53ea\u670930s\u6765\u8fdb\u884c\u4efb\u4f55\u7684tasks\u5e76\u4e14\u8c03\u7528\u63d0\u4f9b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"completion handler"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -XPOST https://api.sandbox.push.apple.com/3/device/<deviceToken> -H "apns-push-type: background" -H "apns-priority: 5" -H "authorization: bearer <token>" -H "apns-topic: <bundleId>" -H "apns-id: <UUID>" -d "<data>"\n')))}k.isMDXComponent=!0}}]);