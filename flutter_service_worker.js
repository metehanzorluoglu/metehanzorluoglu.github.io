'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d5c56ac62ac3a42b8de654d60459d391",
"version.json": "37dbbab8a551aec1f3f607ea2a482212",
"index.html": "426c4f12ee14178a223e919dbde1e49c",
"/": "426c4f12ee14178a223e919dbde1e49c",
"main.dart.js": "3e043572b7ea528da233df5890f10979",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9ea14516d7408fa3bec72d6b351b4a88",
".git/ORIG_HEAD": "b90383d6064948209ef67808e39c8507",
".git/config": "aaa74ac56c386f66f1700b5f034e32b9",
".git/objects/61/06430cf664cc569a5237aede6b534538ea0cc5": "d59f19b0f3914c01ccbe687c32dafea1",
".git/objects/66/d7731046664e49e9e4d25487111187faf1f66a": "1324a7c22a32319510601461cbc802b6",
".git/objects/3e/decb4443488c3e986631575f7c403e7725992e": "e34d1a54b0b336ce4fd5e1525b2b497c",
".git/objects/50/1a0a2c7e705181e178a2ac10f548a2fa4233dc": "76877971ceeba2215cae3ae20bf70d02",
".git/objects/50/7849d1a17c77867a3986452fc11f760c90ac88": "dfd6099f3f706c50f84854c610530195",
".git/objects/50/fb005fc9631098b48e429727b2349ea3b26f92": "8ecc022e49094927ef7ffe36ef1b8d91",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/3b/3b0d447824edf78d22b771e531ea9c4daf74e4": "860597b08b28f4012e819b568882bc84",
".git/objects/3b/76ad2d16566704cd661e4a820833f69bef10aa": "e2569f69eb230c99f3beaf9881448b8d",
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
".git/objects/60/18d57453d1e4726491be3816606bcd377e6000": "3aede2dc3ddc7d6e0d0415202be1099f",
".git/objects/34/f50313de4ec08b242948686706a51c542d7a59": "6a22986a4b0ffb92e28c69413349f1b8",
".git/objects/5a/a3e775a1fb7e8bdfbe27d5b4f9d9817d757c92": "94e985e4ac9837409df2e4b93e969c49",
".git/objects/5f/4dbcd2122cde9bef44b264d96d3ec051de983d": "80ef1d049e456b8c89bfdf241011fc0a",
".git/objects/33/6b6c6e63b4859e96079db735866f98f78d64e6": "d421214c3685b26e3ff64c1d5e99124d",
".git/objects/33/556910e62812dfc87c32b8481d063e6fcc3fcf": "51163f96c1842fefcf2d3ab8552c70a0",
".git/objects/9c/cc21a6f3196cb2175a53ea6a8e00e44b13a033": "42aebab1d52482317cfb002a1bf91895",
".git/objects/9c/f04d065c51a3340316f5fff05757c26d87ff59": "6ac25a5c3f0ab66864eb5a2bea36dd6d",
".git/objects/a3/059d6f6baf82245dca524f182380541b489cab": "7c7f93016173a76b7f5cf7f348affcbb",
".git/objects/b5/5d280fcf43fd160d6e6a99247b19bf6560510f": "f370259d0c1b47cb57ebb354cc0d4924",
".git/objects/b5/80003761f9ba0ea7f1cc2d117eacbb408936fc": "ac920a04d12fb95d82c27678ea94277a",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/bb/606bb8523be5948dbf60219851cce7f8e69498": "01b7989db4e964ddc8c8050b19b1b98f",
".git/objects/be/31769913406446f9395a9f056acec8cc799d6e": "a4668e7c6b06ae0ba730f0899b833a0f",
".git/objects/b3/5ccf3fa2da876b7f8afd94e2a0ed37133bb813": "6fe576481ea3b0443304511c4c3fd09b",
".git/objects/da/c6c7f09838ed5b7fa104397d17023de1c62799": "1b04707fde8c9259f60e8e4b550e15ec",
".git/objects/d1/9e81eecfd64ad11d98d8d3ce1573f5d161ac3b": "4d0493c351bba0cbcfb8b385f75d41b3",
".git/objects/d1/d341922d1a3d1f8256c83f7cd87fd00173a676": "44e4c1e6bade15cb7396793f5d8e8931",
".git/objects/d6/355e8eeb7f6d15b61f746d7f9f41d07a33efbc": "633179d9d1b98207c40eafc12934e2bd",
".git/objects/ae/88b6012fef856908787e9748921d8676ef160d": "ad647336961e9364d8a7e1a24f6a8f46",
".git/objects/e2/aea2d5eac47264c41c7288fc8848e2f556a5d2": "38580bf62e965a40a92cad0d173fa44e",
".git/objects/f4/1478e9bf714c30103f2354612cf358db737671": "88942369cdcb27579d1f66a5eac1a7a8",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/fc/c71381835911546bc6e248081ccd1317898d4f": "741c32e58827cb08567ae148decd3780",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/be7ee480fe76de39d2b857aa4fbd48bd8d6a21": "395f4f0c62ceabbb6e060fc7bc75182c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/fc34e90f5a5b29b93bdb32c96e60816361f869": "6cf6e2253831f19f411a82f6e0073c37",
".git/objects/ca/c4a9ff1973f7f36c79aa914e60127d2cfaf16a": "6aa1904696dd2610b70182d6f28f8c16",
".git/objects/e4/0506b492d29462c085573ae998750b9c72806a": "c162189309cfaee88df3d31bbf4fb270",
".git/objects/e4/7053343c9a3cd7738a3e47b2ac835bdff13a47": "fe470f58a63dd20d378b17cde3352f1a",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/49c568c44de760ad419dbe7da0073588d131dc": "6a08b468e3d9c1ff0e93c52ffc9cc3fb",
".git/objects/c1/20982898bf4189d3f33c7741c81962dd8cdcdf": "bad3bf9983a227fadef97c94793dd653",
".git/objects/ec/7f7784bfd79780de1d6c5032e4193ec4d7fe33": "021edc4dac24e29cdf3d3195af6ec2fd",
".git/objects/4e/dac156d13b2d53f1101ca416790f73992f50b8": "9a3e3bc733d0a464e84968871ebc6a16",
".git/objects/4e/bdb8979e2df7838d86b027067246c1d05a3370": "2d00b9d5ebe3a2a9e5431267e073b48c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/f406e75bf817e0475b172c348dcc95ec5f8be6": "4fcf0dff63ee8124f54edf4b86d8dd14",
".git/objects/11/ff40f3d8679df3a7a824da3dd5b44d7ec1832f": "17a01f9c81d908b3dd9ca70be367c318",
".git/objects/7d/fde86fc60d24c3f91bc8382155cf7dc80ffd61": "da314cb2fc138d0bc3879ca43d4c3565",
".git/objects/29/9dec8cb68ed27fe739442783cffd1c35e34904": "bf61dd30f45c0fd1bea8e73b9879ad89",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/45/a85ec8715a0b49e462d37830c7e23c209ab5c3": "dcf682e4afb75435d27e51f054acfdb6",
".git/objects/1a/d2c65f2c43e0746121eef4d09b4c402d2c4957": "757f84f5d09f72cb17ce86bdf1480b85",
".git/objects/28/db792d6ba83a12499b6e43d1d6fc9335e0b452": "436dc1457853c9e0171b20438f96779d",
".git/objects/28/480196f1c4173e38aa8308d4da46dca7aae80b": "c93885be826fd9eea5e2342b23e801a0",
".git/objects/7b/6b145b250e1486890eb9f28bcaa660a35c1c1c": "5c53c4923c3bc427bbdce2b75d7ca85c",
".git/objects/8a/d189a8aff7e488ad27d02624a6936c96beb229": "e4ffdd3db82f0ae23c2e32c0de87bc10",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/56385a2eb0c61c9e0a3d6d6c998e1beaab4b9c": "4101a33d576dd472fbb3a2eec3848b17",
".git/objects/10/d2f059df49af695194ae2236584f0f5c0b1cef": "ada3d06f34927568c06442fe9e30b289",
".git/objects/10/681197eaac3c5bc371bbee714f99e9c5efe2f1": "30c9e5c7c134b26a247b024a89ab446b",
".git/objects/19/ecc2f2fa7b74aae851d9b83be2c716d4824f3e": "588cad4fee3c1ce9d30ec155efe2d455",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/75/8c9c1fbfe831a3ab9d3b0bd829c16c26f67bd7": "efb0d4f7afeaaa4df2645c53b5c6d666",
".git/objects/86/b282f96a8fd8ac33acc56f2f3e3491f0e5dcd3": "6a181f22fafcb5af7f78731fbb1f8f92",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/44/ad26c812e5b9ed4087b7beeec1c4296cc792bc": "753fec06bd593692f36ded558b6f44b5",
".git/objects/2f/ce39b9ddf39b62daa760b27a2e52a6adc06054": "6a435b8c92fdbadd114492067b586c8a",
".git/objects/2f/347d12025f11f638cd52b184e4c241c081a753": "0cb5874b9a3934fb8ac2eb5b3f5db780",
".git/objects/43/7c8a127f7c754769ed1ef98877bc7a6ab38285": "6d7f1b52164084f5d1abebd4ec5d837d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0936bcdddabd72c22f13dddbdad624247177b3": "ba052709bacd49b062202dd8dc2ef1f7",
".git/objects/9f/21bfaaeede2ce590c70c5da40d7faf8f55590e": "debad64e6f2d490f0bd2a9ae72e0dc6a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/9d6a2af536dab8acec11d851d205ee82ff8f6f": "528736166e45cde556f37675e88d8994",
".git/objects/38/616b918388090042f870f07d696bfd0ea586de": "ac0265825d41b3aa0397ace14cb94b10",
".git/objects/36/ba6465548f61ea175c82887375b9671d35b820": "7c9a6efc9f5a92432f7b02505e97aa3e",
".git/objects/36/c81b3d25f90320125a6d8631702212473a394f": "20c86aef1d7c6608dbe67a6273f49513",
".git/objects/36/e9f0c86a4064d1d5f5f402beab0f0f315854a5": "fe548ac402bebe2428841aa54413a0f8",
".git/objects/36/0372f1df4f661786f07400beb2cf3c82b43d8a": "5023d96c34c5a1b08153643a7fa2e977",
".git/objects/5c/3f832cbd9ae11e36e291add88d0a0f1dca6bf7": "3cd4c0cc29b3c3bd63730aeefb1ee8ae",
".git/objects/5d/6e879bcc08d31db2741fce15ba388fd8ef7a61": "158135f264ba69c265304c8514e8e0c3",
".git/objects/5d/fe1a45250dc0eebbe2d9642257d5a2933b6eb3": "104ca005fdc612f37a520d556e934772",
".git/objects/65/70765e5a282799a5204e5ce1295a1ba849d260": "4fffe6ae1697e790e9dd2dc0dd8e2752",
".git/objects/62/887a2d3b45e9078a9beb02d51d996377f63fc6": "dd205c93bfafa1a3946af5fcc985bac5",
".git/objects/62/8ff41eda70d987f140e3be51fa7fac0c33d2ba": "f516b7adcd69cd487df73119e4c9f650",
".git/objects/96/70585d2cf1de2df148ecf0ae1d1a6bd5c46f0c": "7c29de211e4903b299fed1110aed18d1",
".git/objects/96/5ae7d96f2a299b43745166e073e3e1123c7dfe": "ef105f3d971945a999c47f292cfefce0",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/54/3c9f4de62a4b9c5fe711901b60463520887af6": "1a84dda584274d4f2d63d26f19d42afd",
".git/objects/98/aa53ecbee6b99cada46f59ca1fc91428be03de": "d45a0c77846461dd71d6a2a9f42c692f",
".git/objects/53/720957d06a721d87c9fb284729f7dc5787df44": "9012b2620ff9c2fe285e2db78e905cad",
".git/objects/30/213110fc8c8149c2256bc53ff89115de4baba0": "a724b1368f2f74dbad38720fecd86c0d",
".git/objects/5b/068217c4711d20f871ab57d8a74a447210a9c3": "f4cb058149fa2c81ef737e32414d673b",
".git/objects/08/68c0af711e5a21b4f85e98442c5c7150dd25e9": "14cc384771efddcf3a1057d76a27f01e",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6d/7d9dbc61b85033694dfe5ec5dda8c24d6fbfeb": "ea1ba1b0022016f6c3475c89d9ca4807",
".git/objects/6d/ab6859b73857e9f08e29bcb9c409e83894f7db": "9aaf452d5d54d3a3064fc088592abdc4",
".git/objects/39/512e9d84d7cdb14dc64258d7b6ec472b5be828": "0289b4dc64ce7e02686a39a65affa2de",
".git/objects/0f/0cc33fd5587e99f54f1063038d7225ca848329": "36540d4a3188bb22bca94e1c4df9cd1f",
".git/objects/64/dbf90df11e8102b8d45bbf6a355596bfdb92e9": "2ae2f970fd982358b97e04dd7fd20e88",
".git/objects/90/6dd28bc868f1a2bf7bfdc7bc1c95d76a459269": "907931ce0f4431d81b5486959a95d309",
".git/objects/d3/2a599283858e551340e9a483a8a7ded33dc6c3": "5d9ff1c30b5175739fa44051e62a864f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/42165391e848f5dcff138f3d7b9c8efc571eca": "af85c0d9c8e97a70340e69e49fe01476",
".git/objects/ba/32baab1e29589f74c9e7f6867a4d0e35b2db25": "720c7fc1a74f05d292e4834c2b1c45b6",
".git/objects/ba/c3a8b1005bb35be190f01b36cc889372175736": "23f77cffb45fab0b70ce874d8f0ef661",
".git/objects/b8/c8d94d25f77f718652d6437c644230d78245bb": "c04729a4ce9330daa0921962ab5a294a",
".git/objects/b1/3850cbeb0d341fd63f102cb854217273cb1e1a": "3356197457e54c95a353702fbe387d71",
".git/objects/dd/23cd92d9920255dfdfc5e496fe6b3c5c5c30fe": "1ef378c8106db2a283a1754b4be618d5",
".git/objects/a9/95a72c0851fac238712e744f6d6c32a8cbb7bc": "0d4b613949ee8a0d25167f53f03e34f9",
".git/objects/d5/98b9ac85a75f58c07c4bd4862dd3d1dac161f4": "28256b94a47c19f8c296690643e24ead",
".git/objects/d2/baec898579a9c4bb64720b7934f3582bcdec1e": "cf4304f4cc3000c1cddc5e47b59fd774",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/1afa48fc52aec75031c81913ff29fd321a2fe5": "9d2383ea31e08aac20ffe88b0f184d12",
".git/objects/a8/c349db88d930f3dc45927b0c8167286846433a": "178bd69755b16e65a058bd1e17c8eafd",
".git/objects/b9/5a0503bbc9a131213f863b542dddf0c5f8793c": "6a29e3cec8bd18b94d8d78c37337cfe5",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/669bd1391c58bea5b45dd0ed0ae0328466ea5a": "c3738b1907d38b2fcd304fe9b1666adb",
".git/objects/a1/e958273a7fb61c7ce3e98765e6de1c26e3e4dd": "45ba71de46ca9ef8536dbaf517780644",
".git/objects/c3/d0822bbe3f5c0b5f69e1cece31121e4f2d9aca": "bee520ae0999be24560bd3abe43c1523",
".git/objects/c4/dddf25ed8e303aa587b3ac0cf315ece8a4e332": "6efef02b48f49fecef147d6524e7b782",
".git/objects/e6/88a0abfb7f3c8d82038bb32c59d63d4e5f8218": "8bb3186df6643acab2175e75fa0d7850",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f0/414222f7c8643a8d03bb8a315ebb93508d0d0f": "bcf37d923602620a4e8bd100ee251bfe",
".git/objects/f7/7e673037b83aed28fc8e4af62d3936d248ed86": "982a6c948ea8f648c1cd74191c4790b4",
".git/objects/e8/c6f990c0d3f9690ef872ea653d60b4aaa19df0": "c52db0caa93b62245eaf2bfdded68329",
".git/objects/fa/d4bacaef53f31cda20e0f06172cb20e0028a76": "9c667ad4b6dd99b671e8b7348fcd9a15",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/b7eca3247451b310a339c8d73efb0669294419": "9e5dac4c789251906af985125eb36ac6",
".git/objects/e7/79fda5f04c6540e19810b7f9ed10f60f45b3b2": "626ca51d91a8bd3e8229e2fd9461d1b2",
".git/objects/cb/a199cb2545d3ccf874bfaf056f6af453ebf2c6": "7f0822ab5ec1ab065e9801d7eee11a58",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/2c/3506f14b8decff61246b2c16747bb4329845a4": "520bcbb59c89f404d2bcd4bd7fac3da8",
".git/objects/2d/df0a08ca2517426666713a632f5721d8db27d5": "e2588535439bd7e311c333b8ce69d732",
".git/objects/41/d168ed22e0a9c51066593a679c0ec2e0e7bae0": "83e8575d58e3752711eb36a57ec6a268",
".git/objects/77/2e4e94ee5554eb10c0c2cf5ac3521422f1168f": "3ff3aeda9f2ee9d1cb489a6e93a849b5",
".git/objects/77/f226371e81cc14bd4686076c7959d8b6031492": "3e96b17332c040a15ff9a68bd3158a10",
".git/objects/48/1c69ae50101dd96d5d8fb17824ad380dbc5075": "e5a6403789043e7b806c26a5616af4d0",
".git/objects/1e/8b81886ee935efec8c003764bbf749cb9e9d0a": "c49add0c34c53cfa54879d38bc98a4d3",
".git/objects/4a/02b9e32f8d84923563dfd4b05ff7cde422a6b7": "c016c5954f027cb3cf1df4ff5848a8e9",
".git/objects/24/b6868ffbbf69d5866fa21d9e7b74afbac5a24b": "38d71225ada69ba83db92d360f7e079f",
".git/objects/23/b8c94be3ad097236474a0cf981807de68f4774": "a7304f9b6c1c83f933e0346460bad464",
".git/objects/8d/0f20302211d28472ff0c6c358e379aab097f7e": "b893cc40cec38e9c3b396aecdeff91d5",
".git/objects/12/43b66af750258751548b23ea71af93b4f13360": "0b242675e102020bc13b381899858ce5",
".git/objects/12/e3320dad7312f1fc751c5606d3919cba3e06f6": "55e35dfdc1e6a4811146d20ba5b866f5",
".git/objects/85/0a6ec214a69cea8980ad20e6df0606a2351021": "8b6856a25469d448a528aaa9ea02e901",
".git/objects/85/065ad0e914de86f0d50187e97ee19621eccf49": "e7abb19831e08a3e76b2cf4e469f38cf",
".git/objects/85/90d4df023e61b79e53a2c715d0772bc8e78549": "82fa68dfbc41f54da707b7e62a48f2a2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/1d/dbf6f18005850552ee37ba8e9a1da70a7d97c4": "41cc3ed2310fb3248c1f66fbae721ffe",
".git/objects/40/f528f97b0f876551d04c30f18992ee8c22e1ad": "0fd7c89717649ad43ac4063ff1ec5c42",
".git/objects/47/300ba3160574f01ad6943343d1f34b9288782d": "a3f3044ee071bcbd026f2edece480a5f",
".git/objects/78/c6c74455f28ff5837cabe5f88057331d7be185": "76491caf3b3a442adfd512c9bf77ac38",
".git/objects/78/481f0c0b1612b874f17259744c550f39187ff6": "9cf85ac8f0ffe243198383a58e52b244",
".git/objects/13/3c05cceb91f9e374c05c9a5a30b2ec69998be0": "db5bb53d65f056c63dbe31127dc65f03",
".git/objects/7f/cb5850909cecba8015f18f1fa80cc7342a47ea": "7f7b253b0f5fecf1b2234e61e16c57fa",
".git/objects/7a/b898219809100b5cb8f0df5526b5214891218d": "39fd19c3188cc5f71c0297a2dad485a8",
".git/objects/14/9ca37afb3eaa0b4f6ff69de41eb86f58a275f9": "b234cae7abe3c8c70bfbd4eed18e12bd",
".git/objects/8e/5478b494038ab55770ef29dd80a3128f395e5f": "7fc12dcb7bfe65d0a800dc9990703b64",
".git/objects/25/0d2ac0c78bd3101f465f2a07a6aaf38b4f0ff8": "a0dc14eccf2f311f92905b1fbca83c72",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a680cfad7ba9e474304bf55a853fa691",
".git/logs/refs/heads/main": "9cf25c3092e6f6d6d9645bbda3f29d06",
".git/logs/refs/remotes/origin/HEAD": "f0eb927ce30e2d2ced74986a48f86679",
".git/logs/refs/remotes/origin/main": "4c3e1857211bc7778c891c4c0258030d",
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
".git/refs/heads/main": "b90383d6064948209ef67808e39c8507",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b90383d6064948209ef67808e39c8507",
".git/gk/config": "6cb884f5164e400e91a6f2391cbb43d6",
".git/index": "5dc3454fce801d2bb6a7b0059ea28f3a",
".git/COMMIT_EDITMSG": "1db9313c688979dbee6568db82de6b1c",
".git/FETCH_HEAD": "65922f63a67f4441424dc2a1a2c9123c",
"assets/NOTICES": "930cd8261c065285786d59e9049c3c04",
"assets/FontManifest.json": "5f79ac56d64767f6b6355e2d8ac63f39",
"assets/AssetManifest.bin.json": "21f8117df9784513ae4a38cf1c1644f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "0ccb7259945d1aa1c9fd0573ee7e27c4",
"assets/fonts/MaterialIcons-Regular.otf": "b5e991bd5cb05ee18db86f1d9facc552",
"assets/assets/question_info/schools-washoe.toml": "8a4cdf77819ff651ff1216a2bed60042",
"assets/assets/question_info/bus-stops-washoe.toml": "7023699405b4541f0b364f07179f9aac",
"assets/assets/question_info/public-parks.toml": "442afc34eecfa0c4a2831887da8b7ae6",
"assets/assets/question_info/pedestrian-crash-washoe.toml": "7495ff9a8cfbf57292d26561d73bd342",
"assets/assets/question_info/comfort-level.toml": "83b0b8977625885645ee54c171905267",
"assets/assets/question_info/bus-stops-google-earth.toml": "1297f342501d79abbcb10c44da7fbd4c",
"assets/assets/question_info/walkability.toml": "a7acd50983fa8389ba7ca5bccf040d9b",
"assets/assets/question_info/maps-mini.toml": "cdd55afef78e550e5ce0bc09b1ad845c",
"assets/assets/question_info/bike-lanes-rtc.toml": "4de0615d8292627598bec0bd71d5be38",
"assets/assets/question_info/bike-lanes-washoe.toml": "88d3ef1407b9dc18ab570bf070286ea0",
"assets/assets/question_info/schools-las-vegas.toml": "107a58d0a8f7545c2e0883b2042bd436",
"assets/assets/question_info/biking-rate-washoe.toml": "2bac824bd050ba9208ce3b6619ef8ff4",
"assets/assets/question_info/public-parks-washoe.toml": "24b797a18bf9356934ec0caeea3ac56a",
"assets/assets/question_info/land-use-diversity.toml": "b91a1127a65645f22dbc2893749bbbf2",
"assets/assets/question_info/usage.csv": "687348e21ecad14356d98efcdbb6c8f5",
"assets/assets/question_info/biking-rate.toml": "1112a777fd0190e592ef408ea46445da",
"assets/assets/question_info/bus-stops-rtc.toml": "8d365fbd31f3f2b2427df7f6b8045182",
"assets/assets/question_info/walking-rate.toml": "813f18a95d33a989956847fea3d89ea9",
"assets/assets/question_info/underserved.toml": "9ebc1ef6d1c6e3590688f5330f074e38",
"assets/assets/question_info/bus-stops-las-vegas.toml": "717fa33934cb5b81a6dca51240e43ccf",
"assets/assets/question_info/public-parks-las-vegas.toml": "46bdd2ba145b267479a2b15082e1573c",
"assets/assets/question_info/bicycle-crash-washoe.toml": "7649de4f327635cc53133dddb78d0184",
"assets/assets/question_info/pedestrian-crash.toml": "97a08797cd0cc991cbd3e95749e54e7c",
"assets/assets/question_info/bike-lanes-henderson.toml": "12919d780a62aae2708d21b77868305c",
"assets/assets/question_info/schools.toml": "654605839ad45148db0fb117e673a2ad",
"assets/assets/question_info/bicycle-crash.toml": "1bc2fbf5e149019492eb324cd3e4bdb6",
"assets/assets/question_info/hu-jpa.toml": "d039b5aa46856e807c24c0e7b5af2ae8",
"assets/assets/question_info/walking-rate-washoe.toml": "8442941f9178b68a04d78f47177eed09",
"assets/assets/assessment_info/henderson.toml": "c3aa1a9ade49b685316555f4e6a3228e",
"assets/assets/assessment_info/mesquite.toml": "c7f5fa6b7aea9deb9b90c8d04ca5aceb",
"assets/assets/assessment_info/boulder.toml": "348fd2bb4156cd6d1bfb1d94956fb59d",
"assets/assets/assessment_info/north-las-vegas.toml": "1cf6de8fd9e3e95c65a42b5ca4c16286",
"assets/assets/assessment_info/clark-county.toml": "04aa094eb20ebea6c57e365aa2f79ec8",
"assets/assets/assessment_info/washoe.toml": "02c5b32bb4e07fed21b37d3fca065e17",
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
