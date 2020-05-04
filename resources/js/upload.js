
$('.addBtn').on('click',function () {
        let newTableRow=
                    "<tr>"+
                        "<td><input class=' fileInput form-control' type='file'></td>"+
                        "<td class='fileSize'>File Size </td>"+
                        "<td><button class='btn cancelBtn btn-danger  btn-sm'>Cancel</button></td>"+
                        "<td><button  class='btn upBtn btn-primary btn-sm'>Upload</button></td>"+
                        "<td class='fileUpMB'>Uploaded(MB)</td>"+
                        "<td class='fileUpPercentage'>Uploaded(%)</td>"+
                        "<td class='fileStatus'>Status</td>"+
                    "</tr>";

         $('.fileList').append(newTableRow);

         $('.fileInput').on('change',function () {
               let MyFile= $(this).prop('files');
               let MyFileSize=((MyFile[0].size)/(1024*1024)).toFixed(2);
               $(this).closest('tr').find('.fileSize').html(MyFileSize+ "MB")
         })


         $('.upBtn').on('click',function (event) {
             let MyFile=$(this).closest('tr').find('.fileInput').prop('files')
             let fileUpMB=$(this).closest('tr').find('.fileUpMB');
             let fileUpPercentage=$(this).closest('tr').find('.fileUpPercentage');
             let fileStatus=$(this).closest('tr').find('.fileStatus');
             let Upbtn=$(this);

             let fromData=new FormData();
             fromData.append('FileKey',MyFile[0])
             OnFileUpload(fromData,fileUpMB,fileUpPercentage,fileStatus,Upbtn);
             event.preventDefault();
             event.stopImmediatePropagation();
         })

         //Remove Row
         $('.cancelBtn').on('click',function () {
                    $(this).parents('tr').remove();
         })

})



function OnFileUpload(fromData,fileUpMB,fileUpPercentage,fileStatus,Upbtn) {
    fileStatus.html("Uploading...");
    Upbtn.prop('disabled',true)

    let url='/fileUp';
    let config={
        headers:{'content-type':'multipart/form-data'},
        onUploadProgress:function (progressEvent) {
           let UpMB= (progressEvent.loaded/(1024*1024)).toFixed(2) +" MB";
           let UpPer= ((progressEvent.loaded*100)/progressEvent.total).toFixed(2) +" %";
           fileUpMB.html(UpMB)
           fileUpPercentage.html(UpPer)
        }
    }
    axios.post(url,fromData,config)
        .then(function (response) {
            if(response.status==200){
                fileStatus.html('Success')
                Upbtn.prop('disabled',false)
            }
            else{
                fileStatus.html('Fail')
                Upbtn.prop('disabled',false)
            }

        }).catch(function (error) {
        fileStatus.html('Fail')
        Upbtn.prop('disabled',false)
    })

}
