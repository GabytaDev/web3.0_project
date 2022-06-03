//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Transactions {
   
    uint256 transactionCount; 
// evento transfer (tipo address --> variable from....., tipo uint--> variable amount...) 
    event Transfer (address from, address receiver, uint amount, string message, uint256 timestap, string keyword);

    //similar a un objeto
    struct TransferStruct {
     //tipo --> nombre de la propiedad   
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestap;
        string keyword;
    }
   // la variable transactions es un array de estructura de transferencias
    TransferStruct[]transactions;

    // funcion public para q todos puedan acceder a ella

    //agregar a la blockchain 
    function addToBlockchain (address payable receiver, uint amount, string memory message, string memory keyword) public {
      //sumamos una transaccion y la enviamos al array con el push  
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
     //para hacer la transferencia emitimos el evento
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    //obtener todas las transaciones 
    function getAllTransactions () public view returns(TransferStruct[]memory) {
     //retorna las transacciones actualizadas en el array
     return transactions;  
    }

    //obtener cuentas de transaciones
    function getTransactionCount () public view returns(uint256) {
     //retorna las cuentas de transacciones actualizadas 
     return transactionCount;  
    }
     
}
