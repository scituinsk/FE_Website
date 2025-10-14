import { Award, Heart, Target, Users } from "lucide-react";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const ValuesSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
          <p className="text-lg text-slate-600">Nilai-nilai fundamental yang menjadi landasan setiap aktivitas dan pengambilan keputusan di SCIT</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-xl mb-4">Collaboration</CardTitle>
            <CardDescription>Bekerja sama dalam tim untuk mencapai tujuan bersama</CardDescription>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-xl mb-4">Excellence</CardTitle>
            <CardDescription>Selalu berusaha memberikan yang terbaik dalam setiap karya</CardDescription>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-xl mb-4">Integrity</CardTitle>
            <CardDescription>Memegang teguh nilai-nilai moral dan etika dalam berkarya</CardDescription>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-xl mb-4">Innovation</CardTitle>
            <CardDescription>Menciptakan solusi kreatif untuk tantangan masa depan</CardDescription>
          </Card>
        </div>
      </div>
    </section>
  );
};
