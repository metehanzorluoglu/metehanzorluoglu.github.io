'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "54c5e2c2b432fde28a181771b338dc70",
"version.json": "37dbbab8a551aec1f3f607ea2a482212",
"index.html": "f494738c8493dcff233175d4aa611839",
"/": "f494738c8493dcff233175d4aa611839",
"CNAME": "6311b6eeadf58e8aff0992d64a6ade5b",
"main.dart.js": "f22e6e933d64d16e30af662c8e610432",
"404.html": "f494738c8493dcff233175d4aa611839",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9ea14516d7408fa3bec72d6b351b4a88",
".git/ORIG_HEAD": "3f7626538d0d38c5e84b5ccd48a39a21",
".git/config": "5106636d125358fed24b88b8c1c22753",
".git/objects/66/54574a8ac45cc24cac81a2c7798b37a35f6ae0": "df1071ebf5bf1f3368dfd503f6d73ef1",
".git/objects/03/850b201a5b1bd2b9a912335b36126ad086aebf": "f9d93ba5ee0088c7e01473111e7747f3",
".git/objects/69/7a1f0249e2edb1615e58185c4809906fada400": "166a050e882e8ba621c2932d2308921a",
".git/objects/56/2885b59cbf5ce5ffc2adf211694ab8785f1a48": "70938b5cc686d6bb775a260277bc4e40",
".git/objects/58/5e213b4d93d9b616858bcf1d65b8e9161df19f": "c6bc8945419d6e36a4142e78dcf7a187",
".git/objects/67/ec20fd24ff06ae7041100448499c59fdef83c4": "4cdee03edba18ea930fc60c754c5b1a4",
".git/objects/33/bf644fb5189c88cd862319af2636e9783036cd": "749321ec98f3495ec7f10706f88cb690",
".git/objects/9d/a15c37e023279664e88c6b41f13f71885f2618": "4eeb3ccc7a5bfc69e8616392e8515206",
".git/objects/df/a58f67cf65065de97c0ed70a92075a911375b7": "b3910ff2782e0c998da6f6bca8f1fd84",
".git/objects/e2/40a229300208478eb143a3278a455e0f9a10e7": "93c69feb7b57d8300ac50ae420d80dfd",
".git/objects/f4/bc2e22dd52476b4d327f55e4862ac6ff6e07cc": "73d08d26d3d6251aaf03a7778eb192ac",
".git/objects/c8/235b0ee252875335e56542813b710722e35100": "32d95d13ce914115461e784481922bf8",
".git/objects/18/bc75aaa7a097c8f04b2a46149be26ce5c0ec05": "23244936288ac4a5c8c769344fbd29cf",
".git/objects/pack/pack-ffd1c063e6bc0a446a81bcd4fb671cc15ab466dd.pack": "38bb38ae98126961641098467d0db8ad",
".git/objects/pack/pack-ffd1c063e6bc0a446a81bcd4fb671cc15ab466dd.rev": "dfb2b0dd14f81ef71281c0fa2a3f0bc8",
".git/objects/pack/pack-ffd1c063e6bc0a446a81bcd4fb671cc15ab466dd.idx": "7863d2c955aafd94fb3e054dcc175cf5",
".git/objects/8f/2514522aa7c4eeaaad35779917b09078488af2": "71c11eed12cf77aa172fbd58e6020bb7",
".git/objects/72/55b0426e8089fbc97073a56a9818a52b69f99c": "976ce0207716f8502e12c5761a8999d3",
".git/objects/2f/c26e9c96e041c208e01453d497e34400d8f0c0": "59fab3dedadad4bcb67a94f3d304237a",
".git/objects/88/4d5a52b5f8f2cb733ca5364daa20562d755713": "2d778655dbcfbbf690ac0a857306671d",
".git/objects/07/b520cca3474e64986eab23908f66a3bcf3aaed": "4262f3ebf496a0ec3d1ced24ec7d697c",
".git/objects/9a/1b158d24c5b317bd7639fc092f7216ec052de5": "49b4a0bb76dbd8974a434a6a8ab17700",
".git/objects/info/commit-graphs/graph-1013bc60c87b605081d58a371aab42adaaa5c80b.graph": "63043f1861b5a3396ea8df7396b629a4",
".git/objects/info/commit-graphs/graph-7df3fc6762926944f6bf40756383bc221ff5105a.graph": "ad94b05123122512468189a1804b6e9a",
".git/objects/info/commit-graphs/commit-graph-chain": "75ca6072a324c7cbdc57a61f7942b376",
".git/objects/5e/e961d3bd467630bf72fb3abef61ed3b9240828": "bc8cec276f450aeb11eeb4ef7ae098fb",
".git/objects/bf/b5fee67bd87da0ad1c40e54c16507fb6092de2": "30bde9454392a2d5ff3433c4400f4cfe",
".git/objects/d3/52a16856f095d25aa77cbffc03fe4703af88c8": "6aa32a535c441e690e73993cafe67be5",
".git/objects/dc/c7f736ff1c0c1c870062e2b846ed61e14b350e": "7c57d5af83567f4a46d69530fd5bb75f",
".git/objects/b6/0730f934129ec7d65cbf15795434268c1c050b": "f49cbfada2cb9fdc3a5b682a8e0d1ace",
".git/objects/b9/ff9ce289b5cee272f291977d7749e8a723391b": "552081693dd3b8d9c162721ff79e87bd",
".git/objects/c4/41d8a0784bf19e58289581209fdeeda379e035": "3620db84487db4de7d68af38f8835805",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/c5/98015e7078cfca6ce987ca5fe9d959dbed98a8": "8bb0f2f306234aaa205928b5f0eb945d",
".git/objects/c2/84a9a5ef14acc11c34a12619a1325dbe4bafa4": "6d3ce08b470063485df359bb621bc354",
".git/objects/41/e3e69a68949fd7e86faa11030fc6b257fa7fad": "ecd99c71d39c390694fb6b20ec7231f6",
".git/objects/41/396f03834706b18837ced69ec3d8034dd2e523": "04fccf5f997e98af434355111b0213c4",
".git/objects/70/6d97223e0793277220aa55331dd435f7f9f230": "98057b64757457c26601b72c0d8706b8",
".git/objects/84/00caf369c04b82d20abbc413338799e3b56821": "9778fec3c8c42d09b1a6a6360c53bf01",
".git/objects/4f/f3b8f2213cb5caa67e175bd66d79c8c1f8d0fd": "5b2299c801e3034cf74f55292ff52217",
".git/objects/47/f4cc921b15e68cd1045062a6ec14610eb0650b": "45ffbf601f8b1728277e2142f8c51a14",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aafcd854411151dd901383930c2664c2",
".git/logs/refs/heads/production": "1861e3c822095a9fd0a91f2a3b587f11",
".git/logs/refs/heads/main": "ce85582abfb58fdd8b8f08ab55a5fb6c",
".git/logs/refs/remotes/origin/HEAD": "050c31c2a77c1e9b2ab521fda9f58bfe",
".git/logs/refs/remotes/origin/production": "9fceac945475cdea8522f76bebf244e9",
".git/logs/refs/remotes/origin/main": "33bb98151722e2ce54820f217ec52bc8",
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
".git/refs/heads/production": "3f7626538d0d38c5e84b5ccd48a39a21",
".git/refs/heads/main": "3f7626538d0d38c5e84b5ccd48a39a21",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/production": "3f7626538d0d38c5e84b5ccd48a39a21",
".git/refs/remotes/origin/main": "3f7626538d0d38c5e84b5ccd48a39a21",
".git/gk/config": "9952651f12dc7337f5dbf9e0721ff9cc",
".git/index": "4359f8e86b54a7c47237f36eefeec766",
".git/packed-refs": "2330dc54c25a0f62cd27a5846b8942f7",
".git/COMMIT_EDITMSG": "cbdfbcc89941605c92c7b661e4e14c04",
".git/FETCH_HEAD": "ce62555ba83d706525d0ef8b6379e995",
"assets/NOTICES": "930cd8261c065285786d59e9049c3c04",
"assets/FontManifest.json": "5f79ac56d64767f6b6355e2d8ac63f39",
"assets/AssetManifest.bin.json": "77e20c0e3a48d42285546ceeacc92d67",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "4013feac05db3fad3edccd3702ebf369",
"assets/fonts/MaterialIcons-Regular.otf": "f68458045d8a96978f08daab59a10b9c",
"assets/assets/question_info/schools-washoe.toml": "0db46c98610860a8ed826ec0d9b48681",
"assets/assets/question_info/bus-stops-washoe.toml": "deaec1cc3ea089819484894be12a24fd",
"assets/assets/question_info/public-parks.toml": "c698597d028891232fa8ae644f24b322",
"assets/assets/question_info/pedestrian-crash-washoe.toml": "23a9ae6e25ade60094d180355e324c74",
"assets/assets/question_info/comfort-level.toml": "f8cb2d70bc852c94396123952240d7ae",
"assets/assets/question_info/bus-stops-google-earth.toml": "68a1a3b62877d88878777bb193c83ef9",
"assets/assets/question_info/walkability.toml": "25d62c2cad9f6c778fe3a5803ce3fb97",
"assets/assets/question_info/maps-mini.toml": "193f916ba435f063ea0ba9fb87f385bd",
"assets/assets/question_info/shade.toml": "dad94b26fec22654e5e532ce5aa74eda",
"assets/assets/question_info/bike-lanes-rtc.toml": "a2132dfa10398851be665e4211f1b8ba",
"assets/assets/question_info/bike-lanes-washoe.toml": "7636b8b80a1a2cc0f962f1b463fd462d",
"assets/assets/question_info/schools-las-vegas.toml": "107a58d0a8f7545c2e0883b2042bd436",
"assets/assets/question_info/biking-rate-washoe.toml": "6d4c543cc0e9d439ff6fb5377e1da977",
"assets/assets/question_info/public-parks-washoe.toml": "da3c00b2ff40ff5199a46e9b5f0689cf",
"assets/assets/question_info/land-use-diversity.toml": "db1fdfe009d6b0fa8902f8c01d83b0ac",
"assets/assets/question_info/usage.csv": "687348e21ecad14356d98efcdbb6c8f5",
"assets/assets/question_info/biking-rate.toml": "e76881f71910af679aed450f8b14db77",
"assets/assets/question_info/bus-stops-rtc.toml": "e7d26ec4dba585cd1384992791931f7c",
"assets/assets/question_info/comfort-level-washoe.toml": "561dbe1319555de2a7788cfcd3ea51b2",
"assets/assets/question_info/walking-rate.toml": "ee1446a333ae6b2c1a4cf40cb094951d",
"assets/assets/question_info/underserved.toml": "9ebc1ef6d1c6e3590688f5330f074e38",
"assets/assets/question_info/bus-stops-las-vegas.toml": "6c8bd7396f942c50d8382eaf4b6b047c",
"assets/assets/question_info/public-parks-las-vegas.toml": "46bdd2ba145b267479a2b15082e1573c",
"assets/assets/question_info/bicycle-crash-washoe.toml": "1b2edf1e71bab748d2fe8580ff9b9427",
"assets/assets/question_info/shade-washoe.toml": "64b03f913b3eebf617f06ed34f4e0c7a",
"assets/assets/question_info/pedestrian-crash.toml": "97e454d226a7d89af8ee57d5c1d388a4",
"assets/assets/question_info/bike-lanes-henderson.toml": "a2132dfa10398851be665e4211f1b8ba",
"assets/assets/question_info/schools.toml": "75f5853bbe8bb86dbd3745f797548a5f",
"assets/assets/question_info/bicycle-crash.toml": "95eb9c3bd0cb1b6cf771a7f697504c32",
"assets/assets/question_info/hu-jpa.toml": "9f014471bdc31fe953134a10cebd0ef9",
"assets/assets/question_info/walking-rate-washoe.toml": "084a6b3edca2e6a4728b2c1f49a6ce1e",
"assets/assets/images/roadmap.png": "183a6a7252f5b1d0bfbf764d59c06ccb",
"assets/assets/assessment_info/henderson.toml": "82a8c4190f7816addd5e19d7c715d646",
"assets/assets/assessment_info/mesquite.toml": "3d853648b1cba535598ed3028ca03cfd",
"assets/assets/assessment_info/boulder.toml": "575b6fa8b928c32a24195af2e7b5af5c",
"assets/assets/assessment_info/north-las-vegas.toml": "df16d9e0deaf96c1c5208b42317004a2",
"assets/assets/assessment_info/clark-county.toml": "bbf81b58580edc866add6d036364b01c",
"assets/assets/assessment_info/washoe.toml": "f1e21c8a2132223c2826794a37a758d3",
"assets/assets/assessment_info/las-vegas.toml": "df0d189b90d96d8a9dd33ba26726afc4",
"assets/assets/recommendations_info/nv-recommendations-info.toml": "a963d8c160e71faf03cbded3052508bb",
"assets/assets/fonts/arial-unicode-ms.ttf": "91f4475d007aa64dd9a0e79927f3d095",
"assets/assets/data/clark_county_bike_lanes.json": "643eb75127842c89e3260c47e81a1a05",
"assets/assets/data/clark_county_schools.json": "6adfd2317956e5e5591b488e06737c3e",
"assets/assets/data/nevada_walking_rate.json": "68390d7f96b29d1ddbbcf54b1a052d88",
"assets/assets/data/nevada_land_use_diversity.json": "e60d22205fc90e5181b16334bcaa656b",
"assets/assets/data/crashes_bicyclist.csv": "158e69348dcf1421e171083dcb0eec9b",
"assets/assets/data/clark_county_parks.json": "083b169da1d65a2640b75bec419c8857",
"assets/assets/data/nevada_adi_data.json": "6040e50053cc1f9122432b5bf6ebc5ad",
"assets/assets/data/clark_county_bus_stops.json": "73bb3316b592b958ff9efa81e7eea6c0",
"assets/assets/data/nevada_activity_density.json": "23639b3e08d78cf940cf82d530383e92",
"assets/assets/data/nevada_biking_rate.json": "34dc2a58f393df9f77cd4056daeb372d",
"assets/assets/data/nevada_walkability_index.json": "30a5875ea9e3989bdbccbfd3426b2aea",
"assets/assets/data/crashes_pedestrian.csv": "6b9c88043f360594d0f121ad55600a71",
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
