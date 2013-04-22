var workersDic = {
  {{name1}}: {{src1}},
  {{name2}}: {{src2}}
};

var language = classname.slice(0, classname.length - 'Worker'.length).toLowerCase();
var workerSrc = workersDic[language];
var blob;
try { 
  window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
  blob = new BlobBuilder();
  blob.append(workerSrc);
  blob = blob.getBlob();
} catch(e) {
  blob = new Blob([workerSrc]);
}
var blobUrl = (window.URL || window.webkitURL).createObjectURL(blob);

this.$worker = new Worker(blobUrl);
