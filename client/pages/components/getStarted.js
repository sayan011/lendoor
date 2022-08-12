function GetStarted({ tokenAdded, addTokenFunction, walletNDLBalance }) {
  return (
    <section className="bg-blue text-gray-300 " id="getStarted ">
      <div className="px-4 py-10 mx-auto font-rubik sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2  mb-4">
          <div className="pt-2 lg:pt-7 ">
            {tokenAdded ? (
              ""
            ) : (
              <button
                type="button"
                onClick={addTokenFunction}
                className="flex flex-row justify-center items-center p-6 bg-[#2952e3]  rounded-full cursor-pointer hover:scale-105 mb-6"
              >
                <p className="text-white text-base font-semibold">
                  ADD STC TOKEN
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
