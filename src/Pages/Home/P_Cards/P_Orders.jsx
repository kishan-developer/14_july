import React from 'react'

function P_Orders() {
  return (
    <div className="bg-blue-300 h-auto w-auto">
        <div className="childs">
            {/* showing multiple card in this parent div */}
            {
                data.map(()=> (
                    <div className="cards">
                        <img src="" alt="" />
                        <p>titel</p>
                        <p>caterogy</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default P_Orders;