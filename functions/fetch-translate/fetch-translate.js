// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const trans_module=require('./translate');
const handler = async (event) => {
  const subject = event.queryStringParameters.res;

  try {
    
    const subject_1 = await trans_module.translateText(subject);
    
    //const data_2=subject_1.data.trans_result[0].dst;
    
    console.log(subject_1);
    console.log(12);
    console.log(subject_1.data);
  
      return {
        statusCode: 200,
        body: JSON.stringify(subject_1.data),
      }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
