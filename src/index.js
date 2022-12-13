const fs = require('fs/promises')
const { resolve } = require('path')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name.
	
		await fs.writeFile(fileName,fileContent)
		
	console.log("file created");
				
			
	
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name



		
		const data= await fs.readFile(fileName, {encoding:"utf-8"})
		console.log(data)
	

	

	


}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name

	 await	fs.appendFile(fileName,fileContent, {encoding:"utf-8"})
	console.log("file updated");
  
}

const myFileDeleter =  async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName)
	
		console.log("FILE DELETED");
		
		
	

	
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

  myFileWriter("file.txt","hello babe")

 myFileUpdater("file.txt","world")

 myFileReader("file.txt")
  myFileDeleter("file.txt")







  l