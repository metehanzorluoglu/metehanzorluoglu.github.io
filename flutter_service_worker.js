'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9366a07433f3ffeb176512ea39be17fd",
"version.json": "37dbbab8a551aec1f3f607ea2a482212",
"index.html": "426c4f12ee14178a223e919dbde1e49c",
"/": "426c4f12ee14178a223e919dbde1e49c",
"main.dart.js": "7f049bb54573ba8f5a21f805b67e1c1b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9ea14516d7408fa3bec72d6b351b4a88",
".git/config": "f4c62b3678c3dcbd57fe1c6bc90bd086",
".git/objects/50/7849d1a17c77867a3986452fc11f760c90ac88": "dfd6099f3f706c50f84854c610530195",
".git/objects/50/fb005fc9631098b48e429727b2349ea3b26f92": "8ecc022e49094927ef7ffe36ef1b8d91",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/3b/3b0d447824edf78d22b771e531ea9c4daf74e4": "860597b08b28f4012e819b568882bc84",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/35/158c1846612c7556ca551e1a5de7b996e5c85c": "ed1961adf3fbd13df668b433c6a4092a",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/a18bca5fb2a0e6cfde7aaf14ad1db3d1f2af1c": "76725854fe7b27b807d03a3c073199cc",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/3d/867211150b05b7e2ef5666cffdb8310f25e167": "41419484d03bf629f43897f079b46869",
".git/objects/58/19a0024343a9b43af4234a69f89301b767e0af": "e2087512f8a5989bbe7ece62b785cd3c",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/93/43cfb107c883077fcf045e7cdc4aa9c884d591": "2fc410b25c02a32e8ac45ef1e1da8e26",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/5a/a3e775a1fb7e8bdfbe27d5b4f9d9817d757c92": "94e985e4ac9837409df2e4b93e969c49",
".git/objects/9c/f04d065c51a3340316f5fff05757c26d87ff59": "6ac25a5c3f0ab66864eb5a2bea36dd6d",
".git/objects/b5/80003761f9ba0ea7f1cc2d117eacbb408936fc": "ac920a04d12fb95d82c27678ea94277a",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b3/5ccf3fa2da876b7f8afd94e2a0ed37133bb813": "6fe576481ea3b0443304511c4c3fd09b",
".git/objects/d1/9e81eecfd64ad11d98d8d3ce1573f5d161ac3b": "4d0493c351bba0cbcfb8b385f75d41b3",
".git/objects/e2/aea2d5eac47264c41c7288fc8848e2f556a5d2": "38580bf62e965a40a92cad0d173fa44e",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/ff40f3d8679df3a7a824da3dd5b44d7ec1832f": "17a01f9c81d908b3dd9ca70be367c318",
".git/objects/7d/fde86fc60d24c3f91bc8382155cf7dc80ffd61": "da314cb2fc138d0bc3879ca43d4c3565",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/1a/d2c65f2c43e0746121eef4d09b4c402d2c4957": "757f84f5d09f72cb17ce86bdf1480b85",
".git/objects/7b/6b145b250e1486890eb9f28bcaa660a35c1c1c": "5c53c4923c3bc427bbdce2b75d7ca85c",
".git/objects/8a/d189a8aff7e488ad27d02624a6936c96beb229": "e4ffdd3db82f0ae23c2e32c0de87bc10",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/d2f059df49af695194ae2236584f0f5c0b1cef": "ada3d06f34927568c06442fe9e30b289",
".git/objects/19/ecc2f2fa7b74aae851d9b83be2c716d4824f3e": "588cad4fee3c1ce9d30ec155efe2d455",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/44/ad26c812e5b9ed4087b7beeec1c4296cc792bc": "753fec06bd593692f36ded558b6f44b5",
".git/objects/2f/ce39b9ddf39b62daa760b27a2e52a6adc06054": "6a435b8c92fdbadd114492067b586c8a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0936bcdddabd72c22f13dddbdad624247177b3": "ba052709bacd49b062202dd8dc2ef1f7",
".git/objects/9f/21bfaaeede2ce590c70c5da40d7faf8f55590e": "debad64e6f2d490f0bd2a9ae72e0dc6a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/9d6a2af536dab8acec11d851d205ee82ff8f6f": "528736166e45cde556f37675e88d8994",
".git/objects/38/616b918388090042f870f07d696bfd0ea586de": "ac0265825d41b3aa0397ace14cb94b10",
".git/objects/36/e9f0c86a4064d1d5f5f402beab0f0f315854a5": "fe548ac402bebe2428841aa54413a0f8",
".git/objects/36/0372f1df4f661786f07400beb2cf3c82b43d8a": "5023d96c34c5a1b08153643a7fa2e977",
".git/objects/5d/6e879bcc08d31db2741fce15ba388fd8ef7a61": "158135f264ba69c265304c8514e8e0c3",
".git/objects/5d/fe1a45250dc0eebbe2d9642257d5a2933b6eb3": "104ca005fdc612f37a520d556e934772",
".git/objects/96/5ae7d96f2a299b43745166e073e3e1123c7dfe": "ef105f3d971945a999c47f292cfefce0",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/54/3c9f4de62a4b9c5fe711901b60463520887af6": "1a84dda584274d4f2d63d26f19d42afd",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6d/7d9dbc61b85033694dfe5ec5dda8c24d6fbfeb": "ea1ba1b0022016f6c3475c89d9ca4807",
".git/objects/6d/ab6859b73857e9f08e29bcb9c409e83894f7db": "9aaf452d5d54d3a3064fc088592abdc4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/42165391e848f5dcff138f3d7b9c8efc571eca": "af85c0d9c8e97a70340e69e49fe01476",
".git/objects/dd/23cd92d9920255dfdfc5e496fe6b3c5c5c30fe": "1ef378c8106db2a283a1754b4be618d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/5a0503bbc9a131213f863b542dddf0c5f8793c": "6a29e3cec8bd18b94d8d78c37337cfe5",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c3/d0822bbe3f5c0b5f69e1cece31121e4f2d9aca": "bee520ae0999be24560bd3abe43c1523",
".git/objects/c4/dddf25ed8e303aa587b3ac0cf315ece8a4e332": "6efef02b48f49fecef147d6524e7b782",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/e8/c6f990c0d3f9690ef872ea653d60b4aaa19df0": "c52db0caa93b62245eaf2bfdded68329",
".git/objects/fa/d4bacaef53f31cda20e0f06172cb20e0028a76": "9c667ad4b6dd99b671e8b7348fcd9a15",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/b7eca3247451b310a339c8d73efb0669294419": "9e5dac4c789251906af985125eb36ac6",
".git/objects/cb/a199cb2545d3ccf874bfaf056f6af453ebf2c6": "7f0822ab5ec1ab065e9801d7eee11a58",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/48/1c69ae50101dd96d5d8fb17824ad380dbc5075": "e5a6403789043e7b806c26a5616af4d0",
".git/objects/24/b6868ffbbf69d5866fa21d9e7b74afbac5a24b": "38d71225ada69ba83db92d360f7e079f",
".git/objects/23/b8c94be3ad097236474a0cf981807de68f4774": "a7304f9b6c1c83f933e0346460bad464",
".git/objects/12/e3320dad7312f1fc751c5606d3919cba3e06f6": "55e35dfdc1e6a4811146d20ba5b866f5",
".git/objects/85/0a6ec214a69cea8980ad20e6df0606a2351021": "8b6856a25469d448a528aaa9ea02e901",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/40/f528f97b0f876551d04c30f18992ee8c22e1ad": "0fd7c89717649ad43ac4063ff1ec5c42",
".git/objects/47/300ba3160574f01ad6943343d1f34b9288782d": "a3f3044ee071bcbd026f2edece480a5f",
".git/objects/78/c6c74455f28ff5837cabe5f88057331d7be185": "76491caf3b3a442adfd512c9bf77ac38",
".git/objects/7f/cb5850909cecba8015f18f1fa80cc7342a47ea": "7f7b253b0f5fecf1b2234e61e16c57fa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "53f7551d3b4fac148cd91ac366eda7a2",
".git/logs/refs/heads/main": "53f7551d3b4fac148cd91ac366eda7a2",
".git/logs/refs/remotes/origin/main": "73d7f01511fd0cce289dda380adb2b6a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7f9736763285d2fcfa59971a6b70a935",
".git/refs/remotes/origin/main": "7f9736763285d2fcfa59971a6b70a935",
".git/index": "bb256e2ed72f5091110ebc349b092432",
".git/COMMIT_EDITMSG": "69a1896a9bb4c8b676a9be42b58112e7",
"assets/NOTICES": "930cd8261c065285786d59e9049c3c04",
"assets/FontManifest.json": "5f79ac56d64767f6b6355e2d8ac63f39",
"assets/AssetManifest.bin.json": "ca282fe0bf2c36520c2035c664fa6b91",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "5e7aac33894345a2111d236f1f034984",
"assets/fonts/MaterialIcons-Regular.otf": "b7877df635d6e5de826cdeaa61ed2821",
"assets/assets/question_info/public-parks.toml": "442afc34eecfa0c4a2831887da8b7ae6",
"assets/assets/question_info/comfort-level.toml": "83b0b8977625885645ee54c171905267",
"assets/assets/question_info/bus-stops-google-earth.toml": "1297f342501d79abbcb10c44da7fbd4c",
"assets/assets/question_info/walkability.toml": "a7acd50983fa8389ba7ca5bccf040d9b",
"assets/assets/question_info/maps-mini.toml": "cdd55afef78e550e5ce0bc09b1ad845c",
"assets/assets/question_info/bike-lanes-rtc.toml": "4de0615d8292627598bec0bd71d5be38",
"assets/assets/question_info/schools-las-vegas.toml": "c9c9a5ec0fe8cb688b019588ab6c5e5a",
"assets/assets/question_info/land-use-diversity.toml": "b91a1127a65645f22dbc2893749bbbf2",
"assets/assets/question_info/usage.csv": "687348e21ecad14356d98efcdbb6c8f5",
"assets/assets/question_info/biking-rate.toml": "9ede4f44de0ed2bc9406a20abaea66d5",
"assets/assets/question_info/bus-stops-rtc.toml": "8d365fbd31f3f2b2427df7f6b8045182",
"assets/assets/question_info/walking-rate.toml": "e2d8a19feb5b8ca7ffa87bb7e0ee96a8",
"assets/assets/question_info/underserved.toml": "9ebc1ef6d1c6e3590688f5330f074e38",
"assets/assets/question_info/bus-stops-las-vegas.toml": "717fa33934cb5b81a6dca51240e43ccf",
"assets/assets/question_info/public-parks-las-vegas.toml": "08873b4053ac465cb4a70ece3de07aa3",
"assets/assets/question_info/pedestrian-crash.toml": "daf5eab61c82f7110aa85250987e7e6d",
"assets/assets/question_info/bike-lanes-henderson.toml": "12919d780a62aae2708d21b77868305c",
"assets/assets/question_info/schools.toml": "654605839ad45148db0fb117e673a2ad",
"assets/assets/question_info/bicycle-crash.toml": "47d9f0c4a6eebf38e61c623972cad07e",
"assets/assets/question_info/hu-jpa.toml": "d039b5aa46856e807c24c0e7b5af2ae8",
"assets/assets/assessment_info/henderson.toml": "c3aa1a9ade49b685316555f4e6a3228e",
"assets/assets/assessment_info/mesquite.toml": "c7f5fa6b7aea9deb9b90c8d04ca5aceb",
"assets/assets/assessment_info/boulder.toml": "348fd2bb4156cd6d1bfb1d94956fb59d",
"assets/assets/assessment_info/north-las-vegas.toml": "1cf6de8fd9e3e95c65a42b5ca4c16286",
"assets/assets/assessment_info/clark-county.toml": "04aa094eb20ebea6c57e365aa2f79ec8",
"assets/assets/assessment_info/las-vegas.toml": "da501d1cca571c71aa4a161559a49114",
"assets/assets/recommendations_info/nv-recommendations-info.toml": "a963d8c160e71faf03cbded3052508bb",
"assets/assets/fonts/arial-unicode-ms.ttf": "91f4475d007aa64dd9a0e79927f3d095",
"assets/assets/data/clark_county_schools.json": "beeb9ee866f7ba143721c513dac6fbc0",
"assets/assets/data/crashes_bicyclist.csv": "158e69348dcf1421e171083dcb0eec9b",
"assets/assets/data/nevada_adi_data.json": "6040e50053cc1f9122432b5bf6ebc5ad",
"assets/assets/data/crashes_pedestrian.csv": "6b9c88043f360594d0f121ad55600a71",
"assets/assets/data/clark_county_biking_rate.json": "589221ea03aef90fdd0294023d56912a",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
