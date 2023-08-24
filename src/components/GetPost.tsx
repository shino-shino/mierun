import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
const supabase = createClientComponentClient();
export async function GetPost(id:number) {
  try{
    const {data,error} =await supabase.from("post")
    .select()
    .eq('id',id);
      const post_js = JSON.stringify(data);
      console.log(post_js)  
      return JSON.parse(post_js);
  
  }catch(error){
    console.log(error)
  }
};
