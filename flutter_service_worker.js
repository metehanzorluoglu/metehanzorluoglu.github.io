'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "82cbebde9a2f443bf74c52907b829025",
"version.json": "37dbbab8a551aec1f3f607ea2a482212",
"index.html": "426c4f12ee14178a223e919dbde1e49c",
"/": "426c4f12ee14178a223e919dbde1e49c",
"main.dart.js": "273f10e8ba4a07f9c2fc523d95e6c4ad",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9ea14516d7408fa3bec72d6b351b4a88",
"assets/NOTICES": "930cd8261c065285786d59e9049c3c04",
"assets/FontManifest.json": "5f79ac56d64767f6b6355e2d8ac63f39",
"assets/AssetManifest.bin.json": "21233a548f19a01c1821195e6c99d10a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "4a03b546ff70e859379aaa8a9bdbd71b",
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
"assets/assets/data/crashes_bicyclist.csv": "158e69348dcf1421e171083dcb0eec9b",
"assets/assets/data/nevada_adi_data.json": "6040e50053cc1f9122432b5bf6ebc5ad",
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
