import React from "react";
export default () => {
  return (
    <form className="mt-16 text-center" data-netlify="true">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact-content">
        Cuéntame de esa idea que quieres hacer realidad:
      </label>
      <div className="flex shadow rounded bg-white border p-2">
        <textarea
          className="flex-1 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name=""
          id="contact-content"
          placeholder="Contacta conmigo">

        </textarea>
        <button className="my-btn" type="submit">
          Enviar
        </button>
      </div>
      
    </form>
  );
}