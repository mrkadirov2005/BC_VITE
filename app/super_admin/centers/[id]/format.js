export const formatCenterData=(centerData)=>{
    const all_extracted={}
    for(let i in centerData){
        if(typeof centerData[i]!="object"){
            all_extracted[`${i}`]=centerData[i]
        }else if(typeof centerData[i]=="object"){
            for( let k in centerData[i]){
                if(typeof centerData[i][k]!="object"){
                    all_extracted[`${k}`]=centerData[i][k]
                }
            }
        }

    }
    return all_extracted
    
}