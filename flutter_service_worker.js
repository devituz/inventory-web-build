'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a74f17031d063b8df9abf0ded22a470b",
".git/config": "f9746c7f67019bdf27191f81cc2955ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b21f5fc4049f08b078c40da377df8525",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b5d88c97954e1a42c3724044d4270df",
".git/logs/refs/heads/main": "be8531a0f22bd05f9e15243c56e1c7dd",
".git/logs/refs/remotes/origin/main": "06f3f907978b458c8801f90bd40a9d4f",
".git/logs/refs/remotes/origin/master": "01f3ff829acc1d843fcb12884dedf405",
".git/objects/02/7e3828fdc0c8a126e23e013304c9cddfc9f5a6": "cf1dc618d4479b0ab948e949437b5266",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/14/7f9ee149c83e240a4bdf9bc524b495c21e169d": "3a79f153b0b71ff6b3c9b52183df639e",
".git/objects/18/db263dbdc958f63f14c4904cb7e2124c766ecc": "f8de7758db8b931ae09f803f670ed09a",
".git/objects/1a/6f8b366868526c057111d4153579232ef4c645": "dbfc54a4b7963d2f1131d0b4c9b8ed48",
".git/objects/1c/c7c5c40921a0a67880871b8274e19c1ff6d49c": "c6463ddd213c0f15300fb188ccc55e0a",
".git/objects/1f/cb18ee93481ad9e1822c3bf1a28b96e2ffe601": "98d3b877432347f70434dce7f00d75ac",
".git/objects/21/09d97d3633cf4d6cdafd08687f61cfffe5d973": "2452c6e94095ced31a30c86650d986bc",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/22/1a4cda0ab6c10b3901348a3f6df7c255152a60": "64c8b2f42c628cbed8493e5bc793bb98",
".git/objects/23/f6b4847c067b9639525255cb09940b1bd95401": "73e1ef3716dcb9eb8dd65ecd9bbaba01",
".git/objects/29/9f212e73d13ae1c5a99e662ca0ae2ff3fe4c08": "a2a7d1f03640be34586df574a9f7e3e8",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2d/773725aa60dec4e1315b224721fd4433dd7c42": "0edabe72f84eb58062db8e77d0e9686a",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3b/dd02f56182c7659adceb5a524f6a184b519dd8": "6275598c929f9421e4af016dcab12f8d",
".git/objects/3c/64a8071346e981283f2de7eb72cc18e3e6beed": "e74e0f2cea4198a4e86e82e4856c25f9",
".git/objects/40/e3ca153bc63630598bb9048f96a0d6d7993810": "9c422306f63e0c7b084a53deea4f0f02",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/efe1ca82c15da3bc56132efdf15e8f43df205d": "d43c36402cfb3a310f9f151f4995597c",
".git/objects/45/4d12741d7cca6f129f6588e1535e1b12e3ea5c": "1eab142edc2963d2df172288fe2d60de",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/49/64c240a3e60f7ac5120bddbb10557d20c027b8": "436b7ccc405fd217900c7d36a6d6cc0f",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/4a/898c4788324435c8e56a483c0a9b5535a3b105": "d8b772e434528d9ce6d58023aaaf1fc1",
".git/objects/50/d8bf970f71ec8dd10c014cefd34b7844df5505": "8f64518b9f7cef37de36c38618157e1c",
".git/objects/51/1b670e174a74dc4a030551eabf64e78be930cb": "5ac2fe1a607d0a10e260ff054160dfc0",
".git/objects/53/07f876a72d0fc8a130748b10abdaf9664e0abc": "f69fd15b7f451ab93200c1d7d78f44bc",
".git/objects/54/349de32ab08f7465976427d9d11cbd0d9160e4": "b875d539480e61dbaed1364f7d34e171",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/59/80a15b285d7e96f768b8590e3b7dcbd228e659": "5473bcdb33b2ae6742032d2f710338e1",
".git/objects/5b/27624131a9abbbd1462215ed2c2af97350b9c7": "c134e06156fa83866ecc52be4897f6a4",
".git/objects/62/087386e3176bda1c399d9a36649e7bd76dda87": "20c3df7198d954d7edbcf1ce84a0d958",
".git/objects/63/9405d547070c415c956ed452b7e516cdf3ee4b": "6f5643a6ef8c9bd216cbd91378046b2b",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/c113215606eefd93091c71ca86c08523a98024": "ec4dcdc9890e217fa78a92d6a88efdff",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/86/7ad3236bd6272a876b511b0dc859278c00bb6a": "486d779cce679fb1ccf1b965d403b020",
".git/objects/8c/79eddf53adbb53ca30360b1a4d1a6efebc0c8b": "f7c4dfa770079dd9610a83ed9add9e6a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a4/9be493f1a08cfa1a15a0964beb334324fb29ba": "23ece49527a9d929dcaa4d6266303595",
".git/objects/a8/1b1ceeb9b55a5e217351b7ce34c09f4b97ac9f": "10d23c1c853518e5e1bef7658eaf3a4a",
".git/objects/a9/3be24c8629f2f54dda3ff0769f1461b55851e6": "0177cc6224dde6bf88979a1acb6aafda",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ae/9b97f741de35dfed09ceb9178cc0f88cd91244": "1adec803f6ac937032ca99bd16bf30f8",
".git/objects/b6/e1812e41e13f4ee6916ee13f53d102c8e183ca": "c7163efeb0bbca1749208649d0ff1770",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/bd/63a109f2fbf25983b2cda2f321ba0bbade75ba": "a09ee3edf52a8a4aaa97d901d4090c52",
".git/objects/c1/2d609632b8988806e6d6657501401460493dac": "82f81eb3975d91482b44ead9dc7dc7a2",
".git/objects/c8/910f3692902c933f97d024003e43356c47ba90": "62d5ad9b28364dc699b30eb75591d6ef",
".git/objects/ca/ac3bd3f68f44dd70d670067c6772cbdd644a7d": "92948144a98067c4f0246603e8e8ea1f",
".git/objects/cb/423979b2ae312325d443a399dea2427b652371": "8e036f071cfa2b8cf2c93a5bdfa36aa8",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/d2/9ca53e2fd42654b44ac6b49ed26247f53b1d1a": "edd1df34640c5e46132e0bb41be9aaee",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d7/ac0bf594534cf8775582e89d4c582653c11802": "34f0fb60def3c5051d3ad65b42573f28",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/f61e2b0b89515994b72555013b3f585770f565": "9141cf76ba5faca2de4d3438d143618d",
".git/objects/e2/4f393040dcbb5408f86f4a4df0346c5558ec0b": "fe8ff5680459663fdcc14660555f5470",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/f0/c3253bdc87e7412f3a6aff019f8d4b74ab7af3": "fe14e413bb2420f055e35020866ed971",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/f6/100ebcc77cff4fa967ca5202c5da00af26b242": "4345343b441bee8446c53acb9ca1f539",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/fb/f1d09d146210c85f43a256ca0a42ccce77396e": "b0a907883c081a5f726937f321f3b219",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/refs/heads/main": "7a85f33a30727da6ce712a78358b4c16",
".git/refs/remotes/origin/main": "7a85f33a30727da6ce712a78358b4c16",
".git/refs/remotes/origin/master": "cd41db88f4ff792c6dd71cb7dbe8b72d",
"assets/AssetManifest.bin": "d2b0e3d3f88f7be72a0113a922501642",
"assets/AssetManifest.bin.json": "c0cdb304bae086bfb6840b332bb71b0a",
"assets/AssetManifest.json": "8854ed05ede216bd18787ebe464280e9",
"assets/FontManifest.json": "5504c4e38aba3935ae8c644d8dd735ab",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/public/assets/404.png": "95cc666d424d4de73eb2d60e3baffc22",
"assets/lib/public/assets/university-logo.png": "1d7c834863a04f3476b54276751e3311",
"assets/lib/public/private-key/newuu-439507-259dc822020b.json": "6ce04e97f1621530f5256d5126defa84",
"assets/NOTICES": "7da45542c2169a031b5b28a7395d35f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "ba57b1821360ecd68cdaf40ec1499801",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"docker-compose.yml": "a31c8d7319f41d52d8b78744a125bd06",
"Dockerfile": "f8fa30388f2300eb89c129a655c644e0",
"favicon.png": "0d16d095e36452139a03b2f208175c28",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a79428257854802bbf5813e51220de69",
"icons/apple-touch-icon.png": "1de8f9540d29826359d28f0cc02217bd",
"icons/favicon.ico": "75477f2b7e0264fd399c5a0d0f396bb1",
"icons/icon-192-maskable.png": "2ce22aa07cbb9a86653432df44d354aa",
"icons/icon-512-maskable.png": "a9d9a1c898206f8401e7e5494547a15a",
"icons/Icon-512.png": "a9d9a1c898206f8401e7e5494547a15a",
"icons/Icon-maskable-192.png": "2ce22aa07cbb9a86653432df44d354aa",
"icons/Icon-maskable-512.png": "a9d9a1c898206f8401e7e5494547a15a",
"icons/README.txt": "75a4b40628d621e7140600213104e158",
"index.html": "8bfac900591d1a1d3aa33f366941f1fe",
"/": "8bfac900591d1a1d3aa33f366941f1fe",
"main.dart.js": "6db762512207363ead4a86bba1fe2e9d",
"manifest.json": "af840e6cc626236caa26f549f6bf33af",
"nginx.conf": "ae9680615d69358641d386753b97b1df",
"version.json": "1da2c9b74802870aafaf3da59468eb7b"};
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
