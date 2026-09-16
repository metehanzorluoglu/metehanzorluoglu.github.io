'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "188d2f099d74657e916cb6f2604707bb",
"version.json": "37dbbab8a551aec1f3f607ea2a482212",
"index.html": "f494738c8493dcff233175d4aa611839",
"/": "f494738c8493dcff233175d4aa611839",
"main.dart.js": "2b331121964a394c1761ae34fa121fac",
"404.html": "f494738c8493dcff233175d4aa611839",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9ea14516d7408fa3bec72d6b351b4a88",
"assets/NOTICES": "930cd8261c065285786d59e9049c3c04",
"assets/FontManifest.json": "5f79ac56d64767f6b6355e2d8ac63f39",
"assets/AssetManifest.bin.json": "ce14a39698308b6ed58e9ef1d8697642",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "29b94d53ac6c5b70d7194b99422aa35e",
"assets/fonts/MaterialIcons-Regular.otf": "cad2ba8b9edcd6eaf26f66f8f56262bd",
"assets/assets/question_info/schools-washoe.toml": "342d29fd8b3064f3cd41849530051690",
"assets/assets/question_info/bus-stops-washoe.toml": "f21125ff3b1ed7e412db5c177c9b348b",
"assets/assets/question_info/public-parks.toml": "a070a568925aa70c8323e0cf481e3fb8",
"assets/assets/question_info/pedestrian-crash-washoe.toml": "77e96a3fe2fb6285fe37778a342c10e8",
"assets/assets/question_info/comfort-level.toml": "f8cb2d70bc852c94396123952240d7ae",
"assets/assets/question_info/bus-stops-google-earth.toml": "1297f342501d79abbcb10c44da7fbd4c",
"assets/assets/question_info/walkability.toml": "25d62c2cad9f6c778fe3a5803ce3fb97",
"assets/assets/question_info/maps-mini.toml": "193f916ba435f063ea0ba9fb87f385bd",
"assets/assets/question_info/shade.toml": "dad94b26fec22654e5e532ce5aa74eda",
"assets/assets/question_info/bike-lanes-rtc.toml": "a2132dfa10398851be665e4211f1b8ba",
"assets/assets/question_info/bike-lanes-washoe.toml": "7636b8b80a1a2cc0f962f1b463fd462d",
"assets/assets/question_info/schools-las-vegas.toml": "107a58d0a8f7545c2e0883b2042bd436",
"assets/assets/question_info/biking-rate-washoe.toml": "ec5023ddeefb64b32d73041e652bb82b",
"assets/assets/question_info/public-parks-washoe.toml": "735ef682054b06c7b4fc09043d6da78f",
"assets/assets/question_info/land-use-diversity.toml": "eb2a586c5cfcf98f020f4ec1924485e5",
"assets/assets/question_info/usage.csv": "687348e21ecad14356d98efcdbb6c8f5",
"assets/assets/question_info/biking-rate.toml": "2912b2d4b281fe736e0bd73e0e0c7c41",
"assets/assets/question_info/bus-stops-rtc.toml": "585df319af9c9199806b6c2d808256e2",
"assets/assets/question_info/comfort-level-washoe.toml": "561dbe1319555de2a7788cfcd3ea51b2",
"assets/assets/question_info/walking-rate.toml": "d4b959dfaa04d8f937923575e4bc3175",
"assets/assets/question_info/underserved.toml": "9ebc1ef6d1c6e3590688f5330f074e38",
"assets/assets/question_info/bus-stops-las-vegas.toml": "6c8bd7396f942c50d8382eaf4b6b047c",
"assets/assets/question_info/public-parks-las-vegas.toml": "46bdd2ba145b267479a2b15082e1573c",
"assets/assets/question_info/bicycle-crash-washoe.toml": "766067df8205d2eb66907d2e351aec23",
"assets/assets/question_info/shade-washoe.toml": "64b03f913b3eebf617f06ed34f4e0c7a",
"assets/assets/question_info/pedestrian-crash.toml": "d2c67a1c1515ff271202404dcd8b6c3f",
"assets/assets/question_info/bike-lanes-henderson.toml": "a2132dfa10398851be665e4211f1b8ba",
"assets/assets/question_info/schools.toml": "75f5853bbe8bb86dbd3745f797548a5f",
"assets/assets/question_info/bicycle-crash.toml": "1edd7d94f3957ea9d3216671befbdfab",
"assets/assets/question_info/hu-jpa.toml": "c2c39af367172ed3e315e6adf7e5ef87",
"assets/assets/question_info/walking-rate-washoe.toml": "b3544e64e2180c4473999ce8fc470e1c",
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
