export function About() {
  return (
    <main>
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About BizWaziri</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Transforming businesses across Kenya with proven strategies and expert guidance.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At BizWaziri, we believe every business has the potential for greatness. 
                Our mission is to unlock that potential through strategic transformation, 
                process optimization, and sustainable growth strategies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With years of experience in business consulting and transformation, 
                we've helped numerous companies overcome challenges and achieve 
                remarkable success in their respective industries.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p>To be the leading business transformation partner for companies across East Africa.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                  <p>Integrity, Excellence, Innovation, and Results-driven approach.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}