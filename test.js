const axios = require('axios')

let url = 'https://refund2.taobao.com/dispute/adjust/adjustSellerList.json';

let cookie = null;
cookie = 'enc=i1wUf9yatGHfFu4LcC3k7Usj1GtWvswUQ9S%2BeC2UOOMAoymCunDexFgS9uGuTkP3hVe08XlhlbkoNr94Ro9%2B2w%3D%3D; thw=cn; t=e0814076181b219d5d1756bd8d0a0f6d; xlly_s=1; _samesite_flag_=true; cookie2=1ec54e9f58189ed332934a80c226f5c4; _tb_token_=fb36b737eeeff; ucn=center; _bl_uid=Rkk89odL7Ubzavf91xbsea550F2I; everywhere_tool_welcome=true;                                                                                                                                                                                                                                                                                                                                              unb=2209184663123; sn=tb559056599%3A%E4%B8%80%E4%B8%80; csg=21ec7415; skt=c022b7914e3e0f53; _cc_=VT5L2FSpdA%3D%3D; _m_h5_tk=65dbbfdfb8478a67db76f968071459a3_1620026616053; _m_h5_tk_enc=163135f4ce6ebc63ff11ca1d65c25bc3; cna=EuO+FwqCWi4CARuaSA8lZweY; uc1=cookie21=W5iHLLyFfoaZ&cookie14=Uoe2zXovdg6zuA%3D%3D;   l=eBOhvIkgqfEVJvg6BO5wKurza77O6QAf1tFzaNbMiIncC6hPsAJjgcdQDHcNppxRR8XcTyYB4KmWqAwtfFe7Wy4fVdQy3H5eknreCOf..; isg=BKmpg-jP7Vfwf-ykuDkrYI_xuFMDdp2oqZwVykucWRF9Esokk8R7eiTE0LYkwDXg; tfstk=cy71BevQ7tQFEIqq71NEbEpWQC8Pay06T59h1ghAmM8xhz6HpsqSzLG51sDKJ3dC.';
cookie = 'enc=i1wUf9yatGHfFu4LcC3k7Usj1GtWvswUQ9S%2BeC2UOOMAoymCunDexFgS9uGuTkP3hVe08XlhlbkoNr94Ro9%2B2w%3D%3D; thw=cn; t=e0814076181b219d5d1756bd8d0a0f6d; xlly_s=1; _samesite_flag_=true; cookie2=1ec54e9f58189ed332934a80c226f5c4; _tb_token_=fb36b737eeeff; ucn=center; _bl_uid=Rkk89odL7Ubzavf91xbsea550F2I; everywhere_tool_welcome=true; lLtC1_=1; tk_trace=oTRxOWSBNwn9dPyorMJE%2FoPdY8zfvmw%2Fq5v1W97YCoD%2FjFr2hkRJsOFkAwGXfgkDfy4dd%2BZ3DorW1%2Fxl679iXydZ96l6c9ivo3bmLemXxEy3zc8EO8JCLJxohi9EaLzCB0nj1tcdRefWPyP9LAjZo9BeMSBa3ZXLYWgyrq0NWiZlZZbh1cUgfXdQRpW6xIe9IAEC1IjzxzdhSdC%2FcTcQEJUl4x%2BMddZpL%2FfpGgghy4oP4AF8esf6EUSyS%2Bot6XSNse8Fe2ieMhK3jHmcTDHu3TG274%2BAOw%3D%3D; unb=2209184663123; sn=tb559056599%3A%E4%B8%80%E4%B8%80; csg=7e2aca2c; skt=a333d1113577b8b2; _cc_=W5iHLLyFfA%3D%3D; _m_h5_tk=65c6a5142bd820ad30a39f88de333577_1620043670384; _m_h5_tk_enc=0edb938ea4726d99c309763ee710cf0a; cna=EuO+FwqCWi4CARuaSA8lZweY; uc1=cookie21=UtASsssmfufd&cookie14=Uoe2zXos8d7%2Bvw%3D%3D; l=eBOhvIkgqfEVJO7WBO5aourza77t0dAX1IVzaNbMiIncC641_-dtlVdQDHqnRp-RJ8XVTlTD4KmWqAwTje3Q8PafVdQy3H5ekn-6peth.; isg=BFZW9C2mKq7-byNN81jMCbTApwpY95oxQs0aY8CzVT2Cg_0dJod-QGe1Gx9vc5JJ; tfstk=cF0cBOM6Q86QF2qoAEajM5DeiB0GCICzHAkjzVy2zmYjxEjbMo5c5gSEbCtuEx0Of'
cookie = 'enc=i1wUf9yatGHfFu4LcC3k7Usj1GtWvswUQ9S%2BeC2UOOMAoymCunDexFgS9uGuTkP3hVe08XlhlbkoNr94Ro9%2B2w%3D%3D; thw=cn; t=e0814076181b219d5d1756bd8d0a0f6d; xlly_s=1; _samesite_flag_=true; cookie2=1ec54e9f58189ed332934a80c226f5c4; _tb_token_=fb36b737eeeff; ucn=center; _bl_uid=Rkk89odL7Ubzavf91xbsea550F2I; everywhere_tool_welcome=true; lLtC1_=1; tk_trace=oTRxOWSBNwn9dPyorMJE%2FoPdY8zfvmw%2Fq5v1W97YCoD%2FjFr2hkRJsOFkAwGXfgkDfy4dd%2BZ3DorW1%2Fxl679iXydZ96l6c9ivo3bmLemXxEy3zc8EO8JCLJxohi9EaLzCB0nj1tcdRefWPyP9LAjZo9BeMSBa3ZXLYWgyrq0NWiZlZZbh1cUgfXdQRpW6xIe9IAEC1IjzxzdhSdC%2FcTcQEJUl4x%2BMddZpL%2FfpGgghy4oP4AF8esf6EUSyS%2Bot6XSNse8Fe2ieMhK3jHmcTDHu3TG274%2BAOw%3D%3D; unb=2209184663123; sn=tb559056599%3A%E4%B8%80%E4%B8%80; csg=7e2aca2c; skt=a333d1113577b8b2; _cc_=W5iHLLyFfA%3D%3D; _m_h5_tk=65c6a5142bd820ad30a39f88de333577_1620043670384; _m_h5_tk_enc=0edb938ea4726d99c309763ee710cf0a; cna=EuO+FwqCWi4CARuaSA8lZweY; uc1=cookie21=UtASsssmfufd&cookie14=Uoe2zXos8d7%2Bvw%3D%3D; l=eBOhvIkgqfEVJ9BXBO5Zhurza77t1pRjCIVzaNbMiIncC6vOp-dtlVdQDHqNdCKRJ8XAGf8D4KmWqAw9icK770ISnt9vPYGD3-D2v;     isg=BJaWLm1m6u67j-MNMxgMSfQA50qYN9pxgo3aIwDxZn1CwyNdZscWgCl1W18vwdKJ; tfstk=cHfdBjOtxP3K1STOu9egNCZe2tTRCp294vtmwy__eeNudYJMB11cfsfYYGzBlDdTW'
cookie = 'enc=i1wUf9yatGHfFu4LcC3k7Usj1GtWvswUQ9S%2BeC2UOOMAoymCunDexFgS9uGuTkP3hVe08XlhlbkoNr94Ro9%2B2w%3D%3D; thw=cn; t=e0814076181b219d5d1756bd8d0a0f6d; xlly_s=1; _samesite_flag_=true; cookie2=1ec54e9f58189ed332934a80c226f5c4; _tb_token_=fb36b737eeeff; ucn=center; _bl_uid=Rkk89odL7Ubzavf91xbsea550F2I; everywhere_tool_welcome=true; lLtC1_=1; tk_trace=oTRxOWSBNwn9dPyorMJE%2FoPdY8zfvmw%2Fq5v1W97YCoD%2FjFr2hkRJsOFkAwGXfgkDfy4dd%2BZ3DorW1%2Fxl679iXydZ96l6c9ivo3bmLemXxEy3zc8EO8JCLJxohi9EaLzCB0nj1tcdRefWPyP9LAjZo9BeMSBa3ZXLYWgyrq0NWiZlZZbh1cUgfXdQRpW6xIe9IAEC1IjzxzdhSdC%2FcTcQEJUl4x%2BMddZpL%2FfpGgghy4oP4AF8esf6EUSyS%2Bot6XSNse8Fe2ieMhK3jHmcTDHu3TG274%2BAOw%3D%3D; unb=2209184663123; sn=tb559056599%3A%E4%B8%80%E4%B8%80; csg=7e2aca2c; skt=a333d1113577b8b2; _cc_=W5iHLLyFfA%3D%3D; _m_h5_tk=65c6a5142bd820ad30a39f88de333577_1620043670384; _m_h5_tk_enc=0edb938ea4726d99c309763ee710cf0a; cna=EuO+FwqCWi4CARuaSA8lZweY; uc1=cookie21=UtASsssmfufd&cookie14=Uoe2zXos8d7%2Bvw%3D%3D; l=eBOhvIkgqfEVJWOjBO5ahurza77TgpOjhIVzaNbMiIncC6VPK-dtlVdQDHqZ1CxRJ8XAGDLD4KmWqAw9Fqx770ISnt9vPYGD37k2Y;     isg=BGpq1ZmK_qr3P08BJ-T4jciku9YM2-41Tqm2L_QsD7keJxzh0msURH6Rt1Mf4mbN; tfstk=cMXlBP_Q8Eg6lOAc18952HbaqlYlCOm2yw75398z3_2Wqm4J2Q5DdjlNTkNDoaXKD'
axios.request({
    url: url,
    method: 'post',
    headers: {
        cookie: cookie,
    },
    data: {
        _tb_token: 'fb36b737eeeff1',
    }
}).then((error, value) => {
    console.log(error.data)
})


let d = null;
d = {
    "resultData": {
        "choice": "NO_USE_DOUBLE",
        "reload": true,
        "linkage": {
            "input": ["sellerRefuseReasonContainer_1", "sellerRefuseTextArea_32", "fillMessageContainer_1@1", "fillMessageContainer_1@2", "sellerRefusePhotoUploader_40", "sellerRefuseButtonContainer_46"],
            "request": ["sellerRefuseReasonContainer_1", "exchangeMessageContainer_1", "fillMessageContainer_1@3", "sellerRefuseButtonContainer_46"],
            "common": {
                "queryParams": "H4sIAAAAAAAAALVXyW4kxxH9lz4LRO7LnMzhLBpgForkaGBjACIyM5JdYHVVq6p6hpyBvkD2xQffdJCvBuyTffH3SIL+wlFLL+wmB7r40EDnEpERLyJeRH2e5QYW+LFurk+B\/rUvFsty9ujzbFlCl+tmcXG7xH4dS2jb13R19mgW68VRB3WA+oj+LusKq+4o3VawKOLRAjvY2e7\/lXhz1GBeVSlDRHF0uqv7q9mym\/SentBqeKjIt7ReRlon\/FDEzWl723a4WK\/Cqi0qbFta0+oDNm1RV7SQR4zWi\/aK\/v\/y059\/+\/Hvv\/7jX4O2aueluklFBeQt\/56MgCv8v\/i61js+QRpbLEtszuhOi0+KdrnqcHCzjXT481\/+9vM\/\/\/PLD3\/99b8\/\/vbTv8ny3hForrEbnZwcOH\/68uXTs7Onz96eP33y4vz07cXTfY\/KOkLZ3\/00vzx5PaMderA5JnCvqvu8hLIIEOCO9ctVIJk+AAW5tuPqok5YHp0NV79ZYXP7BDogCyB32JwP72YoW\/xqNi+6d0WDJYWpx+Jb8byB283psl6ulid11ZHSFxVhMWbhkIHTUS6axXSffMjYxfnzuk6k7XZPImGGVdmd1CuycjDo0WcSiQ+uT3tLPn9Pe7BclrejO3tKF3CzdhOqruhIghG40HZn2K2aarDlZA3MmyVWF0WPKV0q2uOrBvGbVRGvRx2zR12zwv7kT\/NiAb3jDcRuA0fRnvZeH6cPUEW85\/iP+eZ41c3rpviEO9uvoKjeNGlMq\/6ZzcnJHOM1pgvsQRwfn2B6VpRlb2o72JrqJ9vtjXyDFSk976DpJq8IqwAUguMesLtQrWF8ehPnUF3hHpB1tT16XZ\/hEopm81CFmAZTz69Xm80z\/G5FqZPWUsObT4ZCmW5Ae1vFs8HIbYoMRjzr82TPgrb347Ruu9NmoJQhRMPF3rmXELA8KYserh0Ax3Oq4HPK4dhNCblzpZ3XH8\/HIjmti6rb5MKdG+960F7VDX756ujonTt7FsV5Xbd4oOneWxvfHjdFusL9SyOvFNXVMWXwgYLRkB7a45QaKt+DK6uG8qObTh8Xn6YMJLL4gNPu63r682IrF+quqxfPihtMj4mkrkdgdxQ3uCiq9JaY52R8ojeDzHyFlPk771cX9SrOT7qbnhop8JTLLVHM\/XRy93CSWDZ9GqbHq9ve8OUBoxycv+7zFNr5lsDGG\/3+zq26e0PZft\/F7aUhbkMSHhyNDDZW25bwTkoK6RlCW1d7Zhbj2RDu4yoNi209lPVV0XZFbO8Fhi5cIy4J3j2lASvMRfct9YW0VYZTLYqR\/Q50lfTU0BD2a28K8vEOu3R1ByX5OsBAsmNnHDjz\/hi2q+WybibivajPO6qCrWm7jfUB+Z0bE5Dk2owzrmd92vXcOfLLjPfpUSSEs1WJ56uwKLptB4FQlNQJLnDRj0n9Y\/lFleudFtMsfk8WHqB3Qx12gc0w7\/TTTr0a\/isqmuLTOJ70QHXQXr9cAz29eoBmf2ns9lu7qLKo5h96HUJFUxmUBwdEnB1NVve7lDetcIeCr+jeRHG\/S6afBNqif+T8Y0FZvM81U+S\/rhf4vO72xoGxXA6sTuNw1YeYM6+tVNwLqbkV3pgB0YGwhnPlrFbCGeG44tYY4QnAAW8+dNE7Y8g4SfVybJzqXtfD3zsRGHva1whDbxo7b7\/zrK67uzsnzWoR2t2d06aOPaXCnXuvKHR31mMu7W5RQrQ9iJO2YdiZWkx7TpkABHmfW5\/fz14ifMBJxUVRju3vkr+fPXo\/M0EImgZ0ys7Y4J1NnGVlMyRmDHfu\/eyr96R5iGwfYJo+sJlkPTOexaSTAqZVMiEZVEIwmWMUKeMguw4NFc1F0ZV4Kf4wSufohOLZZjSZdEhktGFS4DwZJ9iD0mKQDjzL6JGlIJ2OmoHjDhhEqxhqpcIgjanoXm3LcNd2k0DYEAWLkmXPuWIhc+mF0sFpZ\/0oPzHgAzrAZp4Iq+C1csxZ67XICoRPPrEAcdCRacg6lJ8wsNGLaFOUXnuQ0gEkCMIabUSMgO5LGsRkQ0KHIINT1rhM9MYoniah1pZ2vmiDHOOgNYCWOnBngtJZhOics0pHlQVHNWgo6FOsD8LGcuA6MsaDAMZU0CxrabJLzgmPVpi8LzVaq0VkGBSVpmE2ZHBJhsAIAQgaUbFBqsR8kGoRFVodjM8BEISDpAIoyhzLgmF6dHPT\/Z7Qx1pRXko2yCrmlAJHfgUSjJRxZCLXJvskNMoxVSq8qrti4L7e4hdk+aWafGUgKdBCU54JF7yxMgoXDTKdmDRKfUHB6LZQKSipvCJkhLMmiaCYd0mYqGgfHlRgJguMM4qBj5Ir5Z3hRmmICoJXiYkgzBcUTOWSkjFWY\/aGDwGP3iqKHTcy8hwnC4iID2rca+0tpZLmThL4Bo1PVmEWNmfj9EbwrP6oBpKdwJ\/ilghyloCK3UQRJYGveeJDfTgqt13xd0U3f0fl9pF+B+UaiVdQRZ11BKkQBQidlbSUcTZH\/5Ceyz46vbxF60XmIocEygWKIsVf9PFg0rkRwHprPqlpL7mb4Cdmp46RUCqhQ04ConHBMh+M42iDvFdasHWpaCm8ChZDzAKIXzlkqSxX3kJwzN4vvabJSOkOwHPOzIPyIRPJmJz7\/DUYM9wvvU5dJwkd4maq79zXgI3RG8cStw4UnwruQHqddh4MS1RkOnpHbSEG64LWTCZHbIE6DdLLTQfbBk2OqFN+JZmYFslGnZDLFK30iXPMmQpxrLzv1o3sNG4VKDfyo1DBCOWTJPm+pwcGRhIiyIOh6hsUrIe5bdzWyGsuhY6ENOfAJHBHVgvCguJPIIT4gPgaeofZKcYSkSKT0QRkCpNJVEHcKx7lA+Jr7BP1AzCe8KKGhBKUQOqTQQdB7Byje0B8DT5zxlNrQIuA3FOr68nYC0NkzQ1Zdr\/4OmWdY5AyV1pah95SMyeiBW+0TlQGQT0kPXUVctnyQAOBkcZLmSgTKGuCtzFllsaybYqr+QFRk7XUxbz0oKMAKrlIZeMsxQwhezVZTYPRvqCgds5tREbNv887kzhRju6bO3Bvw0Zwus8wIwCYlH2kYFhEaSQzVOJG9OPEcH\/3K+Dxir5Fq50UMyMzRmOp0dGblgCOVFmOJyJ8H4OUaoJ5V8\/pvO7qt8uy7se9S8XWNa69o1h5FFogukyB1ipT65BUpv5Ay\/hNsg8CTSMmM2uFQwTraaoikrCC2jtxqJ9oelfNBd50xw3CpRQTzyXmIiVbtjSS2OQD4UGFwikbmFWHdlwUy\/ZSjtXGqEmhtkBTDNFapqxDp71SXEjllB6FPz7A0EzZJDUVF\/M2K25oBOTIaSZCoj7naCD4nj5zclMv6ONXTEPr\/wDTaiMBlBYAAA==",
                "compress": true,
                "validateParams": "H4sIAAAAAAAAALWPu04CQRSG32VqM\/HS0cKakBCyWaA2w+xZnDC3zBnQlfAEamNhR4GtiVba+DxAeAvOcjEbe7v\/mzn5z\/lmrAjCwJ0L41RQwrbxmjVmzGsRCxdMv\/RQsdQCsUujrMGkMzwKNxSOU\/TOgo08L60wSnIDUdSeq6ThngcoJjYvhIRLnta7z5iPx960SbRfpIqS2EviHKZK\/v5iiRHMiYYTVBYQiYmmEFA5S3DFz4kNjiivl0\/bxdvm\/XPfZmubXMiVFWR7MacjxAj+xfXUe1hBjQhaQ8hoBqGl0E8i7DVR0ufq+XX18b1+fNn8LLbLL7q8EhFhDPEgeRToJZ1OkmXJ9aCXtNq9dNBP\/hppJ4WuZh9ub5pdNp\/vAAe6UqbsAQAA",
                "submitParams": "H4sIAAAAAAAAALVSwW7UMBD9F5+rqJTb3mg2FSuVVdhtz2jiTBartify2IVQ8QXAhQO3HsoVCU5w4Xvaqn\/BJNm2WcSV27zn5zfzxr5QTQCHbyiclSAVL1xr1exCtRZiQ8GddC32WFtgXopUzZQml0WgCiiTsiWPPmZ158EZnTmMMKH7yuLbLGCTfN2AxoOsnHrvqTZufctc0NDINJ3gVguu8dzoh1PuOKK7R1Vi45FZsKBzDGzIC3ia7Qt2vJH65urj3eXX228\/Bjc\/6UShNh4k7ZP3MgRs8L9kvfcdW4gjo7UYVqJhnBtuU8QhJms5vP705fr7r5sPn29\/X95d\/ZTJ+yAQzjCOIbcB1sXxcbFaFUen62K+WJenJ8XfiSxpsL323etX+VIJIw3DM1nuxv8rJVhTQQU707epkjv9AxiJNonqqEabrQbpOlXOxDlEkBEM5+QbE+SNGrCMY9dFrWb74waWJOPtqUgRbE7Jx+HEI9bPEWoMahZDwpE5Ioq7TB6Sq3jKlIG0fIFD2NG9kJXtYJEM63+kXibkKP9l6yb7aQK5w9QdbIk\/OZ9sDhwDAAA="
            },
            "signature": "9d905ea8ce018db567aec5ea9fddd9cd"
        },
        "hierarchy": {
            "root": "root_1", "structure": {
                "wangwangContainer_1": ["nickRowWithWangwang_44"],
                "leftContainer_1": ["contentContainer_1", "LeaveMessageTileLabel_1", "editMessageContainer_1", "negotiationInfoItem_4@1", "negotiationInfoItem_4@2", "negotiationInfoItem_6@1", "negotiationInfoItem_6@2"],
                "editMessageContainer_1": ["fillMessageContainer_1@1", "fillMessageContainer_1@2", "fillMessageContainer_1@3"],
                "nickContainer_1": ["nickRow4OrderDetail_1"],
                "rightContainer_1": ["disputeInfoTitle_2@1", "disputeInfoTitle_2@2", "itemInfo_1@1", "itemInfo_1@2", "nickRowWithWangwangContainer_1", "orderDetailRows_18@1", "orderDetailRows_20@1", "orderDetailRows_22@1", "orderDetailRows_24@1", "orderDetailRows_26@1", "logisticsDetail_30", "refundDetailRows_8@1", "refundDetailRows_8@2", "refundDetailRows_10@1", "refundDetailRows_12@1", "refundDetailRows_14@1", "refundDetailRows_16@1"],
                "rootContainer_1": ["leftContainer_1", "rightContainer_1"],
                "contentContainer_1": ["sellerRefuseTips_38", "sellerRefuseReasonContainer_1", "sellerRefuseTextArea_32", "sellerRefusePhotoUploader_40", "sellerRefuseButtonContainer_46"],
                "root_1": ["processBarContainer_34", "rootContainer_1", "questionsPcContainer_48", "exchangeMessageContainer_1"],
                "nickRowWithWangwangContainer_1": ["nickContainer_1", "wangwangContainer_1"]
            }
        },
        "endpoint": { "mode": "PC", "osVersion": "PC", "protocolVersion": "2.0", "ultronage": "true" },
        "data": {
            "rightContainer_1": {
                "ref": "3170f1b",
                "bizName": "container",
                "id": "1",
                "tag": "rightContainer",
                "type": "container",
                "fields": {
                    "padding": "0 20px",
                    "borderLeft": "1px solid #ccc",
                    "width": "240px",
                    "externalClass": "grid_s"
                },
                "btn": "container"
            },
            "rootContainer_1": {
                "ref": "0619b56",
                "bizName": "rootContainer",
                "id": "1",
                "tag": "rootContainer",
                "type": "container",
                "fields": {
                    "borderLeft": "1px solid #ccc",
                    "margin": "10px 0 0 0",
                    "borderRight": "1px solid #ccc",
                    "externalClass": "mod-grid-c2b",
                    "borderTop": "1px solid #ccc",
                    "borderBottom": "1px solid #ccc"
                },
                "btn": "container"
            },
            "nickRow4OrderDetail_1": {
                "ref": "4dfcd8a",
                "bizName": "orderDetailRow",
                "id": "1",
                "tag": "nickRow4OrderDetail",
                "type": "orderDetailRow",
                "fields": { "title": "买家", "valueOptions": [{ "text": "tb959663340" }] },
                "btn": "orderDetailRow"
            },
            "root_1": { "ref": "b686f86", "id": "1", "tag": "root", "type": "biz", "fields": { "rootId": 1 } },
            "itemInfo_1@1": {
                "ref": "0f24a4a",
                "bizName": "itemInfo",
                "id": "1@1",
                "tag": "itemInfo",
                "type": "itemInfo",
                "fields": {
                    "picUrl": "\/\/img.alicdn.com\/bao\/uploaded\/i1\/2200716611804\/O1CN01kAUvzB1PCH9V2qZwk_!!2200716611804-0-tblite.jpg",
                    "amount": "2",
                    "backgroundColor": "#FFFFFF",
                    "size": "small",
                    "price": "3.52",
                    "title": "多功能纸巾盒抽纸盒茶几客厅遥控器收纳盒家用餐巾纸抽盒简约可爱",
                    "skuInfo": "颜色分类:斜四格棕色格格"
                },
                "btn": "itemInfo"
            },
            "sellerRefuseReasonContainer_1": {
                "ref": "dae93e0",
                "bizName": "reasonSelect",
                "id": "1",
                "tag": "sellerRefuseReasonContainer",
                "type": "select",
                "fields": {
                    "isRequired": "true",
                    "displayType": "large-margin",
                    "selectedId": "1015",
                    "options": [{
                        "name": "买家已签收，请修改为我要退货退款",
                        "value": "1002",
                        "id": "1002"
                    }, { "name": "已联系快递\/物流尽快派送", "value": "1015", "id": "1015" }, {
                        "name": "其他",
                        "value": "1005",
                        "id": "1005"
                    }, { "name": "运费未协商一致", "value": "1014", "id": "1014" }, {
                        "name": "退款类型选错，请修改为我要退货退款",
                        "value": "20216001",
                        "id": "20216001"
                    }, {
                        "name": "商品已发出，退回后才能退款",
                        "value": "20284001",
                        "id": "20284001"
                    }, { "name": "商品退回后才能退款，请修改为我要退货退款", "value": "1003", "id": "1003" }],
                    "placeholder": "请选择拒绝原因",
                    "title": "拒绝原因"
                },
                "btn": "select",
                "validate": { "msg": ["请选择拒绝原因"], "regex": ["^[\\S]+$"], "fields": ["selectedId"] }
            },
            "itemInfo_1@2": {
                "ref": "0f24a4a",
                "bizName": "blockSeparateLine",
                "id": "1@2",
                "tag": "itemInfo",
                "type": "separateLine",
                "fields": { "lineType": "blockSeparator" },
                "btn": "separateLine"
            },
            "sellerRefuseTips_38": {
                "ref": "f8dcc25",
                "bizName": "tips",
                "id": "38",
                "tag": "sellerRefuseTips",
                "type": "tips",
                "fields": { "tipType": "warn", "text": "您拒绝申请后，买家可能会申请天猫客服介入处理，如果天猫客服核实是您的责任，将会影响您的售后综合服务指标。" },
                "btn": "tips"
            },
            "exchangeMessageContainer_1": {
                "ref": "a4fabd9",
                "bizName": "message",
                "id": "1",
                "tag": "exchangeMessageContainer",
                "type": "message",
                "fields": { "dateCheck": "1620050554918", "newWindow": "", "postMessage": "test" },
                "btn": "message",
                "status": "hidden"
            },
            "fillMessageContainer_1@1": {
                "ref": "c5e56ff",
                "bizName": "messageTextarea",
                "id": "1@1",
                "tag": "fillMessageContainer",
                "type": "textarea",
                "fields": {
                    "isRequired": "true",
                    "placeholder": "",
                    "title": "",
                    "value": "",
                    "required": true,
                    "maxLen": "200"
                },
                "btn": "textarea"
            },
            "fillMessageContainer_1@2": {
                "ref": "c5e56ff",
                "bizName": "messagePhotoUploader",
                "id": "1@2",
                "tag": "fillMessageContainer",
                "type": "photoUploader",
                "fields": {
                    "subTitle": "(最多10张)",
                    "bizCode": "refund_platform",
                    "title": "上传凭证",
                    "maxItem": "10",
                    "userId": "2200716611804",
                    "maxLen": "50"
                },
                "btn": "photoUploader"
            },
            "sellerRefusePhotoUploader_40": {
                "ref": "e30c511",
                "bizName": "photoUploader",
                "id": "40",
                "tag": "sellerRefusePhotoUploader",
                "type": "photoUploader",
                "fields": {
                    "subTitle": "(最多10张)",
                    "bizCode": "refund_platform",
                    "title": "上传凭证",
                    "maxItem": "10",
                    "userId": "2200716611804",
                    "maxLen": "50",
                    "modTitle": "上传凭证"
                },
                "btn": "photoUploader"
            },
            "disputeInfoTitle_2@2": {
                "ref": "ef66940",
                "bizName": "separateLine",
                "id": "2@2",
                "tag": "disputeInfoTitle",
                "type": "separateLine",
                "fields": { "css": { "textSize": "2" }, "lineType": "lineSeparator" },
                "btn": "separateLine"
            },
            "fillMessageContainer_1@3": {
                "ref": "c5e56ff",
                "bizName": "submitMessage",
                "id": "1@3",
                "tag": "fillMessageContainer",
                "type": "fullButtonList",
                "fields": {
                    "options": [{
                        "title": "提交",
                        "isClicked": "false",
                        "btnId": "PULISH_MESSAGE_BTN",
                        "optionType": "async",
                        "style": "highlight"
                    }]
                },
                "btn": "fullButtonList"
            },
            "disputeInfoTitle_2@1": {
                "ref": "ef66940",
                "bizName": "disputeInfo",
                "id": "2@1",
                "tag": "disputeInfoTitle",
                "type": "label",
                "fields": { "title": "退款详情" },
                "btn": "label"
            },
            "orderDetailRows_18@1": {
                "ref": "8da796f",
                "bizName": "orderDetailRow",
                "id": "18@1",
                "tag": "orderDetailRows",
                "type": "orderDetailRow",
                "fields": {
                    "title": "订单编号",
                    "valueOptions": [{
                        "linkUrl": "\/\/trade.tmall.com\/detail\/orderDetail.htm?bizOrderId=1487542862814176629",
                        "text": "1487542862814176629"
                    }]
                },
                "btn": "orderDetailRow"
            },
            "processBarContainer_34": {
                "ref": "fbefb51",
                "bizName": "processBar",
                "id": "34",
                "tag": "processBarContainer",
                "type": "processBar",
                "fields": {
                    "steps": [{ "title": "买家申请仅退款", "iconUrl": "", "type": "done" }, {
                        "title": "卖家处理退款申请",
                        "iconUrl": "",
                        "type": "doing"
                    }, { "title": "退款完毕", "iconUrl": "", "type": "todo" }]
                },
                "btn": "processBar"
            },
            "nickRowWithWangwangContainer_1": {
                "ref": "c25ef5b",
                "bizName": "container",
                "id": "1",
                "tag": "nickRowWithWangwangContainer",
                "type": "container",
                "fields": { "externalClass": "mod-grid-c2b" },
                "btn": "container"
            },
            "negotiationInfoItem_4@1": {
                "ref": "4cb18aa",
                "bizName": "negotiationInfo",
                "id": "4@1",
                "tag": "negotiationInfoItem",
                "type": "negotiationInfo",
                "fields": {
                    "identity": "user",
                    "name": "tb559056599:一一",
                    "avator": "\/\/wsapi.jianghu.taobao.com\/avatar\/get_avatar.do?userId=2209184663123&width=40&height=40&type=sns",
                    "time": "2021-05-03 21:26:15",
                    "info": "商家拒绝退款\n拒绝说明：\n拒绝原因：其他"
                },
                "btn": "negotiationInfo"
            },
            "negotiationInfoItem_4@2": {
                "ref": "4cb18aa",
                "bizName": "separateLine",
                "id": "4@2",
                "tag": "negotiationInfoItem",
                "type": "separateLine",
                "fields": { "lineType": "lineSeparator" },
                "btn": "separateLine"
            },
            "negotiationInfoItem_6@1": {
                "ref": "4cb18aa",
                "bizName": "negotiationInfo",
                "id": "6@1",
                "tag": "negotiationInfoItem",
                "type": "negotiationInfo",
                "fields": {
                    "identity": "buyer",
                    "name": "tb959663340",
                    "avator": "\/\/wsapi.jianghu.taobao.com\/avatar\/get_avatar.do?userId=4119172966&width=40&height=40&type=sns",
                    "time": "2021-04-15 23:07:28",
                    "info": "买家(tb959663340)于2021-4-15 23:07:28创建了退款申请\n退款类型: 仅退款\n退款金额: ￥7.04\n退款原因: 快递\/物流一直未送到\n退款描述: 几个月了，收不到货，申请退款又不退款！\n"
                },
                "btn": "negotiationInfo"
            },
            "sellerRefuseTextArea_32": {
                "ref": "912dbad",
                "bizName": "textarea",
                "id": "32",
                "tag": "sellerRefuseTextArea",
                "type": "textarea",
                "fields": { "isRequired": "true", "placeholder": "请填入拒绝说明", "title": "拒绝说明", "maxLen": "200" },
                "btn": "textarea"
            },
            "leftContainer_1": {
                "ref": "215b63f",
                "bizName": "container",
                "id": "1",
                "tag": "leftContainer",
                "type": "container",
                "fields": { "padding": "20px 20px 0 20px", "margin": "0px 240px 20px 0px", "externalClass": "grid_m" },
                "btn": "container"
            },
            "LeaveMessageTileLabel_1": {
                "ref": "4e6c3bb",
                "bizName": "separateLine",
                "id": "1",
                "tag": "LeaveMessageTileLabel",
                "type": "separateLine",
                "fields": { "lineType": "lineSeparator" },
                "btn": "separateLine"
            },
            "negotiationInfoItem_6@2": {
                "ref": "4cb18aa",
                "bizName": "separateLine",
                "id": "6@2",
                "tag": "negotiationInfoItem",
                "type": "separateLine",
                "fields": { "lineType": "lineSeparator" },
                "btn": "separateLine"
            },
            "editMessageContainer_1": {
                "ref": "faba36e",
                "bizName": "editMessage",
                "id": "1",
                "tag": "editMessageContainer",
                "type": "editMessage",
                "fields": { "curStatus": "init", "message": "", "title": "我要留言" },
                "btn": "editMessage"
            },
            "nickContainer_1": {
                "ref": "34ee6f8",
                "bizName": "nickContainer",
                "id": "1",
                "tag": "nickContainer",
                "type": "container",
                "fields": { "externalClass": "grid_m" },
                "btn": "container"
            },
            "nickRowWithWangwang_44": {
                "ref": "ff074e7",
                "bizName": "wangwang",
                "id": "44",
                "tag": "nickRowWithWangwang",
                "type": "wangwang",
                "fields": { "nickName": "tb959663340", "style": "small" },
                "btn": "wangwang"
            },
            "questionsPcContainer_48": {
                "ref": "0e3dbd4",
                "bizName": "questions",
                "id": "48",
                "tag": "questionsPcContainer",
                "type": "questions",
                "fields": {
                    "title": "常见问题",
                    "descriptions": [{
                        "answer": "需核实买家申请的退款类型（仅退款或则退货退款）并和买家确认退款的原因，同时关注退款超时时间，在和买家协商过程中尽量把自己的解决方案清晰的反馈给买家，若买卖双方无法协商，您可点击“拒绝退款”协议，将自己的意见反馈至退款详情页面，要求客服介入处理。",
                        "question": "买家一直申请退款或者售后怎么办？",
                        "url": "\/\/service.taobao.com\/support\/knowledge-5703130.htm"
                    }, {
                        "answer": "建议第一时间联系买家协商处理，若双方协商一致，请按照双方的协商内容操作即可，同时保留好相关协商记录。若双方无法协商，您可操作拒绝退款协议，提供物流红章证明。",
                        "question": "收到买家退货破损、使用，影响2次销售怎么办？",
                        "url": "\/\/service.taobao.com\/support\/knowledge-5074628.htm"
                    }]
                },
                "btn": "questions"
            },
            "refundDetailRows_10@1": {
                "ref": "f48d7c9",
                "bizName": "refundDetailRow",
                "id": "10@1",
                "tag": "refundDetailRows",
                "type": "orderDetailRow",
                "fields": { "title": "退款金额", "valueOptions": [{ "text": "￥7.04" }] },
                "btn": "orderDetailRow"
            },
            "refundDetailRows_12@1": {
                "ref": "f48d7c9",
                "bizName": "refundDetailRow",
                "id": "12@1",
                "tag": "refundDetailRows",
                "type": "orderDetailRow",
                "fields": { "title": "原因", "valueOptions": [{ "text": "快递\/物流一直未送到" }] },
                "btn": "orderDetailRow"
            },
            "refundDetailRows_14@1": {
                "ref": "f48d7c9",
                "bizName": "refundDetailRow",
                "id": "14@1",
                "tag": "refundDetailRows",
                "type": "orderDetailRow",
                "fields": { "title": "要求", "valueOptions": [{ "text": "仅退款" }] },
                "btn": "orderDetailRow"
            },
            "refundDetailRows_16@1": {
                "ref": "f48d7c9",
                "bizName": "refundDetailRow",
                "id": "16@1",
                "tag": "refundDetailRows",
                "type": "orderDetailRow",
                "fields": { "title": "说明", "valueOptions": [{ "text": "几个月了，收不到货，申请退款又不退款！" }] },
                "btn": "orderDetailRow"
            },
            "orderDetailRows_20@1": {
                "ref": "8da796f",
                "bizName": "orderDetailRow",
                "id": "20@1",
                "tag": "orderDetailRows",
                "type": "orderDetailRow",
                "fields": { "title": "成交时间", "valueOptions": [{ "text": "2021-01-03 19:23:38" }] },
                "btn": "orderDetailRow"
            },
            "wangwangContainer_1": {
                "ref": "75a4a96",
                "bizName": "wangwangcontainer",
                "id": "1",
                "tag": "wangwangContainer",
                "type": "container",
                "fields": { "width": "30px", "externalClass": "grid_s" },
                "btn": "container"
            },
            "sellerRefuseButtonContainer_46": {
                "ref": "9fb1ba7",
                "bizName": "fullButtonList",
                "id": "46",
                "tag": "sellerRefuseButtonContainer",
                "type": "fullButtonList",
                "fields": {
                    "dateCheck": "1620050554809",
                    "displayType": "large-margin",
                    "options": [{
                        "title": "拒绝申请",
                        "isClicked": "false",
                        "btnId": "REFUND_OR_RETURN_SELLER_REFUSE_APPLY",
                        "optionType": "submit",
                        "iconUrl": "",
                        "style": "highlight",
                        "value": ""
                    }, {
                        "title": "取消并返回",
                        "isClicked": "false",
                        "btnId": "POPUP_CANCEL_BTN",
                        "optionType": "link",
                        "style": "normal",
                        "value": "\/dispute\/detail.htm?bizOrderId=1487542862814176629&disputeId=109573419235172966&type=1"
                    }]
                },
                "btn": "fullButtonList"
            },
            "refundDetailRows_8@1": {
                "ref": "f48d7c9",
                "bizName": "topSeparateLine",
                "id": "8@1",
                "tag": "refundDetailRows",
                "type": "separateLine",
                "fields": { "lineType": "lineSeparator" },
                "btn": "separateLine"
            },
            "orderDetailRows_26@1": {
                "ref": "8da796f",
                "bizName": "orderDetailRow",
                "id": "26@1",
                "tag": "orderDetailRows",
                "type": "orderDetailRow",
                "fields": { "title": "商品总价", "valueOptions": [{ "text": "￥7.04" }] },
                "btn": "orderDetailRow"
            },
            "refundDetailRows_8@2": {
                "ref": "f48d7c9",
                "bizName": "refundDetailRow",
                "id": "8@2",
                "tag": "refundDetailRows",
                "type": "orderDetailRow",
                "fields": { "title": "退款编号", "valueOptions": [{ "text": "109573419235172966" }] },
                "btn": "orderDetailRow"
            },
            "contentContainer_1": {
                "ref": "b62b4f5",
                "bizName": "contentContainer",
                "id": "1",
                "tag": "contentContainer",
                "type": "container",
                "fields": { "externalClass": "mod-grid-c2b" },
                "btn": "container"
            },
            "orderDetailRows_22@1": {
                "ref": "8da796f",
                "bizName": "orderDetailRow",
                "id": "22@1",
                "tag": "orderDetailRows",
                "type": "orderDetailRow",
                "fields": { "title": "单价", "valueOptions": [{ "text": "￥3.52*2(数量)" }] },
                "btn": "orderDetailRow"
            },
            "logisticsDetail_30": {
                "ref": "4fc7323",
                "id": "30",
                "tag": "logisticsDetail",
                "type": "logisticsDetail",
                "fields": {
                    "trackingNum": "965604038714872",
                    "companyName": "中国邮政",
                    "options": [{
                        "process": { "value": "等待揽收中" },
                        "time": "2021-01-10 07:18:55"
                    }, { "process": { "value": "商品已经下单" }, "time": "2021-01-03 19:23:38" }]
                },
                "btn": "logisticsDetail"
            },
            "orderDetailRows_24@1": {
                "ref": "8da796f",
                "bizName": "orderDetailRow",
                "id": "24@1",
                "tag": "orderDetailRows",
                "type": "orderDetailRow",
                "fields": { "title": "邮费", "valueOptions": [{ "text": "￥0.00" }] },
                "btn": "orderDetailRow"
            }
        }
    }, "success": true
}
