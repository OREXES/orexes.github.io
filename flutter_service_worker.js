'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c306e9b507d9a7204f1c47ca649b4772",
".git/config": "4c211444472b2de3c705123b971aba25",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0f127d0d014615eafe8a8098b4beed4d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f249cb73d64982c0e92586e145d45179",
".git/logs/refs/heads/main": "f4a099bb19dcf7fbcc3f350b4e1c7ef2",
".git/logs/refs/heads/master": "6db60ccb7d76c9cabc1a8da8c97af50b",
".git/logs/refs/remotes/origin/main": "ad01ee9e96a4ac1de2fdb6f02e9890f8",
".git/objects/02/54f30ae9a588c0f04bd3c4543867f66fb6b3ae": "fcc9485577aa54abf89d53585ee4729a",
".git/objects/14/d23b6234a75fb3162db5b976c44a07d0b37a63": "fdf07253c0aa7a31c13ae734e97f0d56",
".git/objects/14/d396364a4d174d127ed3b9e6db02bca2ee06f0": "e0a25067823bf1ae7854e01fa4d9aca6",
".git/objects/16/73e8bacc1f4b2afbeef5c3da24cc99d95cd64a": "cb0b66d5b30dcd5538c577207f9101d7",
".git/objects/16/beae85abd98dc2f64ae1358113ac89ac49b91a": "81864408e57867f6a52e3d689bbfbd10",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/6d60929b1ddc6418978bfbe09cd361efcce22c": "e683cd20490c55994eb4075b91612982",
".git/objects/22/db43513aadad04853713464e6555d93d8d46bb": "fd728bab3be1a1cbc0a235222861321c",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/8a0c941747bc286715f2c11fcdecce3e313456": "f590b3d5f32651728ba9ee39d355b91f",
".git/objects/2b/04b916b0ed0fe8a3fd038c0434c812092fe0bd": "14b36f48b7d41c1bd758b011ee6a10e7",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2f/4c219d362434a94e2035fbd56d502d23ff152c": "b6fd9d4b6e38059ff619eca6547843db",
".git/objects/33/2e1c5c1fa81951833c6f0bbda072aa81465a17": "d55719db564df16ba67e213bd959d08e",
".git/objects/35/0b07f0a55592936f82b59408c6efdbf0bca3ab": "a1da95115f62f89ea5280a49bdbec09f",
".git/objects/39/98e1762acf21ea1c844f373fa77a326c20d35a": "747fea837dfe41484416ca34d6125abd",
".git/objects/3c/a5b463225d1b76cb3c3c02a7106a6a85f9e6b4": "4f8fc0556b380ed30aebeeb37de4adfd",
".git/objects/3e/70ca5e19bf9e94ed04c457b61d5629a1a76282": "fb06e947990f4e3c4f1fb08ee884c98c",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/b68fd72148493d8aaf6ab198638d3ddadf4861": "513d6c51077c1ca18a9645e07efe6a63",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/50/e6b87ad6edde2bc759ff5aafcc1985bdb4fc6c": "a7ea1e33a9bf2842dc47afc0e3a9b42f",
".git/objects/53/7b12e0abc860b2a4467b30cf8ebbe27cffee61": "684d48bea177f12bfc3989cd70f8d767",
".git/objects/5e/de19055d88f91d300128cd0cbbbdbe05478f4f": "931ef3aea0b3bc6acb15f160d61a2540",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/65/b00b7ecb90fcef3ffb4f71f005ff69893e22e2": "0409b449d0416b3817d32debfaa4d3cd",
".git/objects/6a/e40962a648365a49e366306349b2e032d72089": "5bdb2c14504736eb3558bcfcbaf302b3",
".git/objects/6f/4f554cac05e21e3101d08341a9429c568666ec": "4934c4708e35fef8870d804595d8e089",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/71/3614556b7fb142652eae9fdaceddfb468faa5f": "d526e94aa3f1352a677fa692618f68f1",
".git/objects/71/68b4fa369854715fac3c33d54dab57690b8242": "38d304e03c63f04ab851d938e081c591",
".git/objects/75/86beb9ecba5b1f3467e7d24877b3916716dfdd": "4a0f0a562055904fb9b93d14ac788f55",
".git/objects/79/7403f9eeb613b18055e689c760515de2c5a5b0": "85b0f9435350d81e548fbecfff4428da",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/87/be1fa2eeaeebac5f177af3a281f35832cd9303": "d28795a105404db9a9df9a524e95f311",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/3a432ee20308670ddae688e461855e23a8cecc": "620326bd05aa85489de4782e0bab1646",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/0a0089e586a66a9e6fa6315b5f665968b8044f": "5c7423b98a5c23c0b6eaed92ffb9a070",
".git/objects/9a/c1639872e7c96d06f96f5541bc523fd4dea987": "d05d603333dfb83664318a1f2a4f9261",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/9e/851421025388d2813a21b16893163b0f610598": "9a8146468f0bfb41fd5f2a62f6a12142",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/c9b3fe87cc01662e1fb52ac726571b5102f579": "62f85ca1d8374c05ec2ecaa942cc09dc",
".git/objects/aa/43d6805426d5f9b0918a03b3c6a43ce189fe27": "e99b81904a8997f919f43249d855aaf0",
".git/objects/ad/3c5ce11f0616b7122b46d51f2f402c95f44168": "6d5eb4a928ce1105b17d03407f32883d",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e879e9ee0b9c108993f27e8ab33a2d8e605bc4": "72516ab74842a5faa3dd8cb374c783b4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/65077e005d9adaa01d4fbc796ee7e1230f1c59": "f9c98e377ff1a52087320dafa605265d",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c7/22e200b659c0e04d6c4e1fb2fd27bed430328a": "efa0c849d30572ae0d9d1a9a0becea90",
".git/objects/c8/29019c318fc828655c84e797fd4349afd71e84": "e774a71ae4f22a6f66bc7f15de4b0c67",
".git/objects/c9/d906aaefb7a4ba254e6ba3b74ed91bfbf6b0be": "1a46dfc94fc3e391742181d301adf764",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/dc1e69e4f666dd9e4701e021ce9f91cb3b56ce": "b1f53d055473b0d4e08d207f5043c179",
".git/objects/d3/34f08b214ca71f8aca4e5d805d2e52d1436307": "d699981c2c3c2670711881754e3af08a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/5d16acf7f642cec6198495f5280149b2ca0dd9": "2f75a1eed6f4ad53eba26e1b1a16cf25",
".git/objects/dd/cf85c6e753e7e73bc9521bc9a17d24e2994b62": "699c7474e28be05bf5965aba64addd12",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/f5037677b34c184efe152dbb58475c8084fb3a": "345563ddc43c6ec11a0b9f1b873bcd46",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/062c3cbdbcd49bb50d84eee491ea91a8bf925d": "a7119b0b3bb12d71372d8d01e85aa242",
".git/objects/f6/e1136a5155985956856db268b9db0f840269ea": "f8ac4fceb2b592f4d66c705646011ec4",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/fd/1410015a7e5848d61dc13b9b54b30c4dab1960": "50110a6c3ebda0056cefeecceb5fa0df",
".git/refs/heads/main": "2d2ee0b252704129f765c9ed379f5a31",
".git/refs/heads/master": "3dfeda7a2aea0619cea86f4f167f6686",
".git/refs/remotes/origin/main": "2d2ee0b252704129f765c9ed379f5a31",
"assets/AssetManifest.json": "5b910d1dc3ae810af59b2ad2b9e85020",
"assets/assets/background_image.png": "600d505324ec1e07450844c06d96d01b",
"assets/assets/foerderung.png": "1946044e85fd46f77c760314376fc739",
"assets/assets/hsfulda.png": "de269e5d9eafc76e11184712e96954fe",
"assets/assets/idunion.png": "a9110d2b934d6ced4f41e6fce5fce88b",
"assets/assets/ox_logo.svg": "612d560e6829711e564af21efe3ace1b",
"assets/assets/ox_logo_clean.svg": "5013db6ff93270659c5237d34749e12c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "75c37b2aa17179d1ceca73057e78acd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "f1cb1720034a8f3ee9e9cb76f935e336",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b5513e37d6bb41562b0db0632039b1b3",
"/": "b5513e37d6bb41562b0db0632039b1b3",
"main.dart.js": "84cc26a970e8a1cf0063ff79175c7f7b",
"manifest.json": "3263e56bebcccfd7021deb77f8e89739",
"version.json": "8d70a6cad62221c882223f223a7cfa73"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
