import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Buttonv3 } from "@/components/ui/buttonV3";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const easeV = [0.43, 0.13, 0.23, 0.96];
  return (
    <div>
      <div className="relative overflow-hidden py-12 lg:py-16">
        {/* Gradients */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, ease: easeV }}
                src="/img/logo/dpatternicon.png"
                className="h-12 w-12 m-auto"
                alt=""
              />
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, ease: easeV }}
                className="mt-5 max-w-2xl"
              >
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Visualize Design Patterns
                </h1>
              </motion.div>
              {/* End Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, ease: easeV }}
                className="mt-5 max-w-3xl"
              >
                <p className="text-xl text-muted-foreground">
                  Explore interactive design patterns, visualized with a sleek
                  and intuitive interface. Dive deep into their corresponding
                  code implementations and elevate your development skills.
                </p>
              </motion.div>
              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, ease: easeV }}
                className="mt-8 gap-3 flex justify-center"
              >
                <Link to="/patterns/factory">
                  <Buttonv3 size="lg">Browse Patterns</Buttonv3>
                </Link>
                <Link to="/patterns/introduction">
                  <Button size={"lg"} variant={"outline"}>
                    Learn more
                  </Button>
                </Link>
              </motion.div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
