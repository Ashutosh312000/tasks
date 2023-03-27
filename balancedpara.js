var isValid = function(s) {
    let st=[];
    for(let i=0;i<s.length;i++){

      if(s[i]=='(' || s[i]=='[' || s[i]=='{'){
        st.push(s[i]);
      }
      else{
        if(s[i]==')'){
          if(st.pop()!='('){
            return false;
          }
        }
        else if(s[i]==']'){
          if(st.pop()!='['){
            return false;
          }
        }
        else if(s[i]=='}'){
          if(st.pop()!='{'){
            return false;
          }
        }
      }
    }
    if(st.length!=0){
      return false;
    }
    
    return true;
};
