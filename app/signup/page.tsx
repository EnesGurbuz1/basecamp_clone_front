"use client"
import React, { useState } from "react";
import axios from "axios";

const SignUp: React.FC = () => {
  // Form verileri için state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization_name: "",
    password: "",
  });

  // Input değişikliklerini işleyen fonksiyon.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submit işlemi
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/graphql",
        {
          query: `
            mutation ($createUserInput: CreateUserInput!) {
              createUser(createUserInput: $createUserInput) {
                name
                email
                organization_name
                password
              }
            }
          `,
          variables: {
            createUserInput: formData,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      // Şifre belirleme ekranını göster
      setShowPasswordForm(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Şifre belirleme ekranını göstermek için state
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <img
        src="../../image/basecamp_logo_icon.png"
        alt=""
        className="mx-auto h-28 w-auto"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-700">
        Try Basecamp for free
      </h2>
      <h3 className="mt-4 text-center text-lg font-extrabold text-slate-700">
        No credit card required • Cancel anytime
      </h3>
      {showPasswordForm ? (
        // Şifre belirleme ekranı
        // ŞİFRE KAYDI ŞUANKİ DURUMDA ALINMAMAKTA DURUMA GÖRE TEK FORMDA
        // HEM ŞİFRE HEM DE DİĞER BİLGİLERİ ALACAK ŞEKİLDE DÜZENLENEBİLİR
        // YA DA İKİ AYRI FORMDA ALINABİLİR (ONU DAHA ÇÖZEMEDİM)
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-lg bg-white p-8 shadow-lg rounded-lg text-slate-700">
          <h1 className="text-md font-bold text-center">
            Now pick a password and you’re all set
          </h1>
          <p className="mt-2 text-center text-gray-600">
            For your security, we require that passwords be at least 12
            characters.
          </p>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={formData.password}
              autoComplete="password"
              placeholder="Your Password"
              required
              className="h-14 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex w-full justify-center text-white px-3 py-2 text-md rounded-full leading-10 shadow-sm border border-black-100 bg-green-600"
            >
              Create new account
            </button>
          </div>
        </div>
      ) : (
        // Kayıt formu
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-lg bg-white p-8 shadow-lg rounded-lg text-slate-700">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <h1 className="text-md font-bold text-center">
                Just need a few things to get you going
              </h1>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={formData.name}
                  autoComplete="name"
                  placeholder="Your Name"
                  required
                  className="h-14 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                  autoComplete="email"
                  placeholder="Your email (e.g. julie.young@hey.com)"
                  required
                  className="h-14 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="organization_name"
                  name="organization_name"
                  type="text"
                  onChange={handleChange}
                  value={formData.organization_name}
                  autoComplete="organization"
                  placeholder="Your organization's name"
                  required
                  className="h-14 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex w-full justify-center text-white px-3 py-2 text-md rounded-full leading-10 shadow-sm border border-black-100 bg-green-600"
              >
                Last step: you’ll set a password →
              </button>
            </div>
          </form>
        </div>
      )}
      <div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Questions? Need a hand?{" "}
          <a href="#" className="font-medium text-blue-400 underline">
            Support can help.
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
