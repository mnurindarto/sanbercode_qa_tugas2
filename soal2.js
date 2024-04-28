// Ini adalah JSON array 
var jsonArray = 
    [
        {
          "id": 100000057465,
          "storageId": 10000008207,
          "code": "A01-01-01-A",
          "productId": 110000081009,
          "productName": "FloBrand-DressBSPink",
          "productCode": "FBR00040101",
          "quantity": 76,
          "createdTime": "2021-12-21T13:54:48Z",
        },
        {
          "id": 100000057466,
          "storageId": 10000002181,
          "code": "A01-01-01-B",
          "productId": 110000081009,
          "productName": "FloBrand-DressBSPink",
          "productCode": "FBR00040101",
          "quantity": 71,
          "createdTime": "2021-12-21T13:54:48Z",
        },
        {
          "id": 100000065224,
          "storageId": 10000008884,
          "code": "Tgt00-A-A-01",
          "productId": 110000081009,
          "productName": "FloBrand-DressBSPink",
          "productCode": "FBR00040101",
          "quantity": 10,
          "createdTime": "2022-02-08T10:35:19Z",
        }
      ];

console.log("Total quantity dari beberapa storageId untuk productCode FBR00040101 (FloBrand-DressBSPink)");

// Menggunakan loop untuk mengakses nilai dalam array
for (var i = 0; i < jsonArray.length; i++) {
    var x = jsonArray[i];
    console.log("Storage ID", x.storageId, "Quantity", x.quantity); 
}

// Array yang akan dijumlahkan
var numbers = [76, 71, 10];

// Variabel untuk menyimpan hasil penjumlahan
var sum = 0;

// Loop untuk menjumlahkan elemen array
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Total quantity dari semua storageId untuk productCode FBR00040101 (FloBrand-DressBSPink) adalah", sum);