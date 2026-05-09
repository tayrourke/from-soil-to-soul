// Packaged-food Learn chapters + glossary data (built from IngredientsToAvoid_FoodReference_v3)
// Rebuild: node scripts/build-packaged-learn.mjs (requires /tmp/*.txt slices)

window.PACKAGED_INGREDIENT_GLOSSARY = [
  {
    "title": "Red 40 (Allura Red)",
    "tier": "avoid",
    "desc": "A petroleum-derived azo dye. Linked to hyperactivity and behavioral issues in children in multiple studies, including a landmark 2007 UK study that prompted EU warning labels. Contains benzidine, a known human carcinogen, as a contaminant. The FDA has reviewed Red 40 multiple times without restricting it.",
    "products": "Fruit punch, Gatorade, Jell-O, Doritos, maraschino cherries, candy, breakfast cereals, yogurt, medications",
    "aliases": "Allura Red AC, FD&amp;C Red No. 40, CI 16035, E129"
  },
  {
    "title": "Yellow 5 (Tartrazine)",
    "tier": "avoid",
    "desc": "A synthetic azo dye derived from petroleum. Associated with hyperactivity in children, allergic reactions in aspirin-sensitive individuals, hives, and inhibited zinc absorption. The EU requires a hyperactivity warning label; the US does not.",
    "products": "Mountain Dew, Gatorade, Kraft mac and cheese, candy corn, pickles, mustard, chips, cereals",
    "aliases": "FD&amp;C Yellow No. 5, Tartrazine, CI 19140, E102"
  },
  {
    "title": "Yellow 6 (Sunset Yellow)",
    "tier": "avoid",
    "desc": "Another petroleum-derived azo dye. Linked to hyperactivity and allergic reactions. Often contaminated with cancer-causing compounds including Sudan I, a known carcinogen. Banned or restricted in several countries. Requires the same EU hyperactivity warning label as Yellow 5.",
    "products": "Orange soda, Kraft mac and cheese, candy, baked goods, cereal, gelatin, medications",
    "aliases": "FD&amp;C Yellow No. 6, Sunset Yellow FCF, CI 15985, E110"
  },
  {
    "title": "Blue 1 (Brilliant Blue)",
    "tier": "avoid",
    "desc": "Synthetic dye derived from aromatic hydrocarbons. Animal studies show it can cross the blood-brain barrier. Some evidence of allergic reactions and behavioral effects. No nutritional purpose — it exists entirely for visual appeal in food that would otherwise look unappealing.",
    "products": "Blue Gatorade, Froot Loops, candy, ice cream, packaged frosting, sports drinks",
    "aliases": "FD&amp;C Blue No. 1, Brilliant Blue FCF, CI 42090, E133"
  },
  {
    "title": "Blue 2 (Indigo Carmine)",
    "tier": "avoid",
    "desc": "A synthetic dye with no nutritional benefit. Animal studies show increased rates of brain tumors at high doses. The EU requires warning labeling. If a food needs a synthetic dye to look appealing, that is a reliable red flag about everything else in the product.",
    "products": "Candy, pet food, baked goods, cherries in fruit cocktail, some beverages",
    "aliases": "FD&amp;C Blue No. 2, Indigotine, CI 73015, E132"
  },
  {
    "title": "Green 3 (Fast Green)",
    "tier": "avoid",
    "desc": "One of the less commonly used synthetic dyes but still present in processed products. Animal studies have raised concerns about tumor development. The EU has not approved it for food use. Its presence is a reliable indicator of heavy industrial processing.",
    "products": "Canned peas and vegetables, mint-flavored products, candy",
    "aliases": "FD&amp;C Green No. 3, Fast Green FCF, CI 42053, E143"
  },
  {
    "title": "BHA (Butylated Hydroxyanisole)",
    "tier": "avoid",
    "desc": "A synthetic antioxidant that prevents fat oxidation. The National Toxicology Program lists BHA as 'reasonably anticipated to be a human carcinogen.' A known endocrine disruptor, interfering with estrogen and androgen signaling. California lists it as a known carcinogen under Prop 65. The EU restricts it; the US permits it without restriction.",
    "products": "Chips, crackers, instant mashed potatoes, cereal, chewing gum, beer, butter, shortening",
    "aliases": "Butylated hydroxyanisole, antioxidant BHA, E320"
  },
  {
    "title": "BHT (Butylated Hydroxytoluene)",
    "tier": "avoid",
    "desc": "Closely related to BHA; also a synthetic antioxidant. Studies show it can promote tumor growth when animals are pre-exposed to carcinogens. The IARC classifies it as possibly carcinogenic. Despite this, BHT remains on the FDA's GRAS list — a designation not revisited with modern endocrine disruption testing standards.",
    "products": "Vegetable oils, cereal, chips, butter, meat, chewing gum, packaged baked goods",
    "aliases": "Butylated hydroxytoluene, E321"
  },
  {
    "title": "Sodium Nitrite / Sodium Nitrate",
    "tier": "avoid",
    "desc": "Added to cured meats to prevent bacterial growth and maintain color. Under high-heat cooking, nitrites react with meat proteins to form nitrosamines — potent carcinogens. The WHO's IARC classifies processed meats as a Group 1 carcinogen (definitely causes cancer in humans). Critical loophole: 'celery powder' or 'celery juice' in 'uncured' meats produces the exact same nitrites. The 'uncured' label is a marketing distinction, not a safety one.",
    "products": "Hot dogs, bacon, deli meats, salami, pepperoni, sausages, jerky, smoked fish",
    "aliases": "Sodium nitrite, sodium nitrate, potassium nitrate, celery juice powder (produces same nitrites), E249, E250, E251, E252"
  },
  {
    "title": "Potassium Bromate",
    "tier": "avoid",
    "desc": "Used in bread making to strengthen dough and increase rise. The IARC classifies it as possibly carcinogenic. Banned in the EU, UK, Canada, China, Brazil, and India. The FDA asked bakers to stop voluntarily in 1991 — but has never banned it. California requires a cancer warning label on products containing it.",
    "products": "Commercial bread, bagels, rolls, some flour brands (labeled 'bromated flour'), pizza dough",
    "aliases": "Potassium bromate, bromated flour, E924"
  },
  {
    "title": "TBHQ (Tertiary Butylhydroquinone)",
    "tier": "avoid",
    "desc": "A synthetic preservative derived from butane. Studies show potential tumor promotion, immune function disruption, and DNA damage. A 2020 study found TBHQ may suppress immune response — including to flu vaccines and influenza viruses. The EU requires labeling; the US permits it with minimal scrutiny.",
    "products": "McDonald's chicken nuggets, Cheez-Its, Reese's Peanut Butter Cups, Pop-Tarts, many fast food items",
    "aliases": "TBHQ, tert-Butylhydroquinone, E319"
  },
  {
    "title": "Propyl Gallate",
    "tier": "avoid",
    "desc": "A synthetic antioxidant almost always used alongside BHA and BHT. Animal studies show estrogenic activity (endocrine disruption) and tumor promotion. The National Toxicology Program has flagged it for carcinogenicity concerns. Exists solely to extend shelf life of already-compromised processed food.",
    "products": "Meat products, chicken soup base, shortening, vegetable oil, chewing gum",
    "aliases": "Propyl gallate, n-Propyl gallate, E310"
  },
  {
    "title": "Caramel Color (Class III &amp; IV)",
    "tier": "avoid",
    "desc": "Made by heating sugar with ammonia — producing 4-methylimidazole (4-MEI) as a byproduct. 4-MEI is listed as a possible human carcinogen by IARC and a known carcinogen under California's Prop 65. This Hard Avoid applies specifically to Class III (E150c) and IV (E150d) — the types used in colas and dark soft drinks. Labels rarely specify the class.",
    "products": "Coke, Pepsi, most dark colas, beer, whiskey, soy sauce, some gravies and baked goods",
    "aliases": "Caramel color, caramel coloring, E150c (Class III — flagged), E150d (Class IV — flagged)"
  },
  {
    "title": "Carrageenan",
    "tier": "avoid",
    "desc": "Derived from red seaweed but heavily processed into a form not equivalent to eating seaweed. Linked to intestinal inflammation, gut permeability, and ulcerative colitis-like lesions in animal and cell studies. Degraded carrageenan (poligeenan) is an established carcinogen — and food-grade carrageenan can contain degraded fractions. The EU banned it from infant formula.",
    "products": "Chocolate milk, infant formula (some brands), coconut milk, almond milk, deli meats, ice cream, heavy cream",
    "aliases": "Carrageenan, E407, Irish moss extract (sometimes)"
  },
  {
    "title": "Polysorbate 80",
    "tier": "avoid",
    "desc": "A synthetic emulsifier. Research published in Nature (2015) found it disrupts the gut microbiome and promotes low-grade intestinal inflammation even at doses below typical daily consumption. Associated with increased gut permeability, metabolic syndrome, and inflammatory bowel disease in animal models.",
    "products": "Ice cream, whipped toppings, salad dressings, baked goods, pickles, some vitamins",
    "aliases": "Polysorbate 80, Tween 80, E433"
  },
  {
    "title": "Carboxymethylcellulose (CMC)",
    "tier": "avoid",
    "desc": "A synthetic cellulose-derived emulsifier. The same 2015 Nature study that implicated polysorbate 80 showed CMC had nearly identical effects: disrupting the gut microbiome, increasing intestinal permeability, and promoting metabolic syndrome and colitis in mice. CMC thins the mucus layer of the gut — a protective barrier central to immune function.",
    "products": "Ice cream, salad dressing, non-dairy creamers, baked goods, sauces",
    "aliases": "Carboxymethylcellulose, CMC, cellulose gum, sodium carboxymethylcellulose, E466"
  },
  {
    "title": "Modified Food Starch",
    "tier": "avoid",
    "desc": "A starch chemically altered using reagents including acetic anhydride, succinic anhydride, or phosphorus oxychloride — the specific agents are not required to be disclosed. Almost always derived from GMO corn or wheat. The term 'modified' refers to chemical modification, not genetic — though it is frequently both.",
    "products": "Baby food, soups, sauces, salad dressings, processed cheese, instant pudding, canned goods",
    "aliases": "Modified food starch, modified starch, modified corn starch, E1400-E1450 series"
  },
  {
    "title": "Aspartame",
    "tier": "avoid",
    "desc": "An artificial sweetener broken down in the body into methanol, aspartate, and phenylalanine. Methanol metabolizes into formaldehyde and formic acid. In July 2023, the WHO's IARC classified aspartame as 'possibly carcinogenic to humans' (Group 2B), primarily based on studies linking it to hepatocellular carcinoma.",
    "products": "Diet Coke, Diet Pepsi, NutraSweet, Equal, sugar-free gum, sugar-free yogurt, protein bars, medications",
    "aliases": "Aspartame, Equal, NutraSweet, AminoSweet, E951, Canderel"
  },
  {
    "title": "Sucralose",
    "tier": "avoid",
    "desc": "Made by chlorinating sugar — replacing three hydroxyl groups with chlorine atoms. Research found sucralose reduced beneficial gut bacteria by up to 50% and raised intestinal pH. Sucralose-6-acetate, produced when sucralose is metabolized, is genotoxic (damages DNA). When heated in baking, sucralose degrades into chlorinated compounds.",
    "products": "Splenda, Gatorade Zero, protein shakes, sugar-free candy, baked goods, coffee creamers",
    "aliases": "Sucralose, Splenda, E955"
  },
  {
    "title": "Acesulfame Potassium (Ace-K)",
    "tier": "avoid",
    "desc": "A synthetic sweetener 200 times sweeter than sugar, with limited long-term safety data. Animal studies suggest potential effects on cognitive function, gut microbiome, and insulin response. Almost always combined with other sweeteners in 'diet' products. The original approval studies from 1988 predate modern endocrine disruption testing standards.",
    "products": "Coke Zero, Monster Zero, sugar-free Jell-O, Kool-Aid, baked goods, chewing gum",
    "aliases": "Acesulfame K, Ace-K, Sunett, Sweet One, E950"
  },
  {
    "title": "Artificial Flavors",
    "tier": "avoid",
    "desc": "An umbrella term for synthetic chemical compounds designed to mimic natural flavors. A single 'artificial flavor' listing can represent hundreds of individual compounds — none required to be disclosed. Includes diacetyl (linked to 'popcorn lung' in factory workers), benzaldehyde, ethyl acetate, and many others. Safety is self-regulated by the food industry's FEMA body, not the FDA. See the Flavor Deep-Dive section for full breakdown.",
    "products": "Virtually all ultra-processed food: candy, beverages, chips, baked goods, protein bars, cereals",
    "aliases": "Artificial flavor(s), artificial flavoring, natural and artificial flavors, artificial [specific] flavor"
  },
  {
    "title": "MSG (Monosodium Glutamate)",
    "tier": "avoid",
    "desc": "A sodium salt of glutamic acid manufactured via fermentation. Used routinely in rodent studies to deliberately induce obesity and hypothalamic damage. Ongoing research addresses excitotoxicity at high doses. The hidden names list for MSG is one of the longest in food additives — many processed foods contain it without the label ever saying 'MSG.'",
    "products": "Doritos, Campbell's soups, Pringles, fast food (KFC, McDonald's), restaurant food, seasoning packets, ramen",
    "aliases": "Monosodium glutamate, glutamic acid, hydrolyzed vegetable protein, autolyzed yeast extract, yeast extract, hydrolyzed soy protein, sodium caseinate, textured vegetable protein, natural flavors (sometimes), E621"
  },
  {
    "title": "Xanthan Gum",
    "tier": "avoid",
    "desc": "A polysaccharide produced by fermenting sugars with the bacterium Xanthomonas campestris. A 2024 study found gut bacteria in some individuals can break down xanthan gum in ways that promote a pro-inflammatory gut environment. The FDA has warned that xanthan gum in infant formula has been linked to necrotizing enterocolitis — a life-threatening intestinal condition in infants.",
    "products": "Gluten-free baked goods, salad dressings, sauces, ice cream, almond milk, protein shakes",
    "aliases": "Xanthan gum, E415"
  },
  {
    "title": "Guar Gum",
    "tier": "avoid",
    "desc": "Derived from guar beans; used as a thickener. In large amounts, causes gastrointestinal distress. The FDA banned a weight-loss supplement form due to intestinal obstruction risk. Its widespread use in processed food is a marker of NOVA Class 4 ultra-processing.",
    "products": "Yogurt, ice cream, baked goods, soups, sauces, gluten-free products, baby formula",
    "aliases": "Guar gum, guaran, E412"
  },
  {
    "title": "Azodicarbonamide (ADA)",
    "tier": "avoid",
    "desc": "Used to bleach and condition flour. The WHO has linked it to respiratory sensitization and occupational asthma. When bread is baked, ADA breaks down into semicarbazide and urethane — both potential carcinogens. Banned in Australia, Europe, and the UK. Singapore banned it with criminal penalties. Its primary industrial use is as a foaming agent in synthetic rubber.",
    "products": "Commercial bread, sandwich bread, hamburger buns, hot dog buns, some restaurant bread products",
    "aliases": "Azodicarbonamide, ADA, E927a"
  },
  {
    "title": "Phosphate Additives",
    "tier": "avoid",
    "desc": "A family of compounds added for moisture retention, anti-browning, and emulsification. Research shows that chronically elevated phosphate intake from additives disrupts the FGF23/Klotho hormonal axis — significant in cardiovascular health and aging. Phosphate from food additives is substantially more bioavailable than naturally occurring phosphate in whole foods.",
    "products": "Processed meat, fast food, baked goods, processed cheese, soda (as phosphoric acid), flavored water",
    "aliases": "Sodium phosphate, disodium phosphate, trisodium phosphate, phosphoric acid, E338-E341, E343, E450-E452"
  },
  {
    "title": "Titanium Dioxide",
    "tier": "avoid",
    "desc": "A white pigment used to make foods appear brighter and more opaque. In 2021, the European Food Safety Authority concluded it can no longer be considered safe as a food additive — nano-sized particles accumulate in the body and cannot be excluded as causing DNA damage (genotoxicity). The EU banned it from food in 2022. The FDA still permits it in the US.",
    "products": "Powdered donuts, white candy coating, salad dressing, chewing gum, some medications and supplements",
    "aliases": "Titanium dioxide, E171, CI 77891"
  },
  {
    "title": "Brominated Vegetable Oil (BVO)",
    "tier": "avoid",
    "desc": "Vegetable oil bonded with bromine to keep citrus flavorings suspended in beverages. Bromine accumulates in body tissue and is associated with memory loss, skin lesions, and nerve disorders. Banned from food use in India and Europe decades ago. In 2023 the FDA proposed to revoke its authorization — still in some regional US beverages.",
    "products": "Some citrus-flavored sodas, store-brand orange drinks, some regional soft drink formulas",
    "aliases": "Brominated vegetable oil, BVO, E443 (not approved in EU)"
  },
  {
    "title": "Partially Hydrogenated Oils (PHOs)",
    "tier": "avoid",
    "desc": "The primary source of artificial trans fats. The FDA banned PHOs with a compliance deadline of 2020 — but the loophole: products with under 0.5g trans fat per serving can still legally claim '0g trans fat' on the label. If you see 'partially hydrogenated' anywhere on an ingredient list, that product goes back on the shelf.",
    "products": "Some margarines, shortening, older packaged cookies and crackers, some microwave popcorn",
    "aliases": "Partially hydrogenated [any oil], hydrogenated vegetable oil (check full context)"
  },
  {
    "title": "Interesterified Oils",
    "tier": "avoid",
    "desc": "The food industry's primary replacement for PHOs after the trans fat ban. Interesterification rearranges fatty acid positions to create a solid fat without technically creating trans fats — so the label reads '0g trans fat.' Studies show interesterified fats may raise LDL, lower HDL, raise blood glucose, and lower insulin response — outcomes comparable to or worse than trans fats in some studies.",
    "products": "Newer margarine formulas, packaged baked goods, coffee creamers, some peanut butter alternatives",
    "aliases": "Interesterified oil, interesterified fat, fully hydrogenated oil blended with vegetable oil, stearic acid-rich oil"
  },
  {
    "title": "Propylene Glycol",
    "tier": "avoid",
    "desc": "A synthetic diol alcohol used as a humectant, solvent, and carrier for flavorings and colorings. Used in food and industrial applications including antifreeze formulations. Metabolized similarly to ethanol in the body. Accumulation at high doses has been associated with lactic acidosis, kidney toxicity, and CNS depression — particularly in infants and those with compromised liver function.",
    "products": "Salad dressing, cake frosting, flavored coffee drinks, artificial vanilla extract, packaged seasonings, ice cream",
    "aliases": "Propylene glycol, 1,2-propanediol, E1520"
  },
  {
    "title": "Caramel Color (Class I &amp; II)",
    "tier": "caution",
    "desc": "Unlike Class III and IV (in Hard Avoid), caramel color produced without ammonia does not generate 4-MEI. Class I (plain caramel) is the least processed and least concerning. The primary caution: labels rarely specify which class is used, making it impossible to know without contacting the manufacturer.",
    "products": "Beer, some whiskeys, vinegar, sauces, baked goods",
    "aliases": "Caramel color, caramel coloring, E150a (Class I), E150b (Class II)"
  },
  {
    "title": "Sodium Benzoate",
    "tier": "caution",
    "desc": "A synthetic preservative that inhibits mold and yeast. Critical concern: when sodium benzoate combines with ascorbic acid (vitamin C) in a product — very common in vitamin-C-fortified beverages — it forms benzene, a Group 1 human carcinogen. If a product contains both sodium benzoate AND ascorbic acid, treat it as a Hard Avoid. In products without ascorbic acid, the benzene formation mechanism does not apply.",
    "products": "Soda, fruit juice, pickles, salad dressings, condiments, syrups, some medications",
    "aliases": "Sodium benzoate, benzoic acid, E211, E210"
  },
  {
    "title": "Potassium Sorbate",
    "tier": "caution",
    "desc": "A potassium salt of sorbic acid used to inhibit mold and yeast. Less concerning than most synthetic preservatives — does not produce carcinogenic byproducts under normal food conditions. Some individuals report sensitivity; mild DNA-damaging effects noted in some in vitro studies. Its primary significance is as a marker of processed food that cannot maintain safety through natural preservation.",
    "products": "Cheese, yogurt, bread, wine, dried fruit, deli meats, pickles, fruit juice",
    "aliases": "Potassium sorbate, sorbic acid, E202, E200"
  },
  {
    "title": "Soy Lecithin",
    "tier": "caution",
    "desc": "An emulsifier extracted from soybean oil. Concerns: (1) almost always from GMO soybeans; (2) hexane solvent used in extraction may leave residues; (3) trace soy proteins may trigger reactions in soy-allergic individuals. Well-sourced sunflower lecithin is a cleaner alternative. Small amounts are unlikely to be significantly harmful for most people.",
    "products": "Chocolate, margarine, salad dressings, sauces, baked goods, protein bars, infant formula",
    "aliases": "Soy lecithin, sunflower lecithin (cleaner option), lecithin, E322"
  },
  {
    "title": "Maltodextrin",
    "tier": "caution",
    "desc": "A highly processed carbohydrate made by breaking down starch (usually GMO corn) into short glucose chains. Glycemic index of 85-105 — higher than table sugar. Can suppress beneficial gut bacteria and promote pathogenic bacteria growth. Widely used as a filler and carrier in products marketed as 'healthy.'",
    "products": "Protein powders, greens supplements, instant pudding, salad dressing, chips, candy, baby formula",
    "aliases": "Maltodextrin, glucose polymer, dextrin, E1400"
  },
  {
    "title": "Soy Protein Isolate",
    "tier": "caution",
    "desc": "A highly processed form of soy protein. Most commercial production uses hexane — a neurotoxic petrochemical solvent. Contains phytates (block mineral absorption) and concentrated phytoestrogens (isoflavones) at levels well beyond what whole soy foods provide. Particularly relevant for infants on soy-based formula.",
    "products": "Soy milk, veggie burgers, Beyond Meat, protein bars, protein powders, infant soy formula",
    "aliases": "Soy protein isolate, isolated soy protein, textured soy protein, soy protein concentrate"
  },
  {
    "title": "Erythritol",
    "tier": "caution",
    "desc": "A sugar alcohol with zero glycemic impact, commercially produced via industrial fermentation. A 2023 study in Nature Medicine found a significant association between high blood erythritol levels and increased risk of major cardiac events (heart attack, stroke). Research is ongoing and causation not confirmed, but the signal is concerning given how aggressively it is marketed as a 'safe' sweetener.",
    "products": "Lakanto, Truvia, Quest bars, Halo Top ice cream, keto products, protein bars",
    "aliases": "Erythritol, meso-erythritol, E968"
  },
  {
    "title": "Dextrose",
    "tier": "caution",
    "desc": "A simple sugar (glucose) derived from corn starch. Glycemic index of 100 — the same as pure glucose. Almost always from GMO corn. Contributes to rapid blood sugar spikes and frequently appears alongside other added sugars in the same product. Its presence in savory products (bread, cured meats, seasonings) is especially deceptive.",
    "products": "Bread, cured meats, energy drinks, sports gels, cookies, crackers, seasoning packets",
    "aliases": "Dextrose, glucose, corn sugar, grape sugar"
  },
  {
    "title": "Carob Bean Gum / Locust Bean Gum",
    "tier": "caution",
    "desc": "A natural thickener derived from carob tree seeds. Generally one of the safer food gums — minimally processed with some prebiotic-like properties. The caution: it appears alongside more problematic additives in dairy alternatives and processed foods, and some individuals with IBS report sensitivity to galactomannans.",
    "products": "Ice cream, dairy alternatives, sauces, baby formula, some cheeses",
    "aliases": "Locust bean gum, carob bean gum, carob gum, E410"
  },
  {
    "title": "Annatto",
    "tier": "caution",
    "desc": "A natural orange-yellow colorant derived from achiote tree seeds, used for centuries and generally well-tolerated. Some individuals — particularly those with salicylate sensitivity — report reactions including hives and, in children, behavioral effects similar to synthetic dyes. Worth investigating for anyone who has eliminated synthetic dyes and still experiences reactions.",
    "products": "Cheddar and American cheese, butter (some brands), smoked salmon, cereals, chips",
    "aliases": "Annatto, bixin, norbixin, annatto extract, E160b"
  },
  {
    "title": "Sulfites / Sulphites",
    "tier": "caution",
    "desc": "Sulfur-based compounds used to preserve color and prevent browning. For most people, dietary sulfites are metabolized without issue. For the estimated 1% of the population with sulfite sensitivity — disproportionately people with asthma — exposure can trigger severe reactions including anaphylaxis and bronchospasm. FDA requires labeling when sulfites exceed 10 ppm.",
    "products": "Dried fruit (especially apricots, raisins), wine, beer, pre-cut potatoes, shrimp, pickled foods",
    "aliases": "Sulfur dioxide, sodium sulfite, sodium bisulfite, sodium metabisulfite, potassium bisulfite, E220-E228"
  },
  {
    "title": "Aluminum-Based Additives",
    "tier": "caution",
    "desc": "Used as leavening agents in baking powder and anti-caking agents in salt and powdered foods. Concerns center on aluminum's neurotoxicity at high doses — it accumulates in the brain and has been found in elevated concentrations in Alzheimer's disease brain tissue, though causation remains debated. Aluminum-free baking powder is widely available and the preferred option.",
    "products": "Baking powder (conventional brands), table salt, processed cheese (Kraft Singles), pancake mixes",
    "aliases": "Sodium aluminum sulfate, sodium aluminum phosphate, aluminum sulfate, alum, E521, E520, E523"
  },
  {
    "title": "Silicon Dioxide",
    "tier": "caution",
    "desc": "An anti-caking agent — technically the same compound as sand and quartz. The caution is specifically around nano-sized silicon dioxide particles, which can penetrate the intestinal wall and accumulate in tissue. Long-term safety profile of nano silica is actively under study and not established.",
    "products": "Salt, powdered spices, protein powder, coffee creamer, dried herbs",
    "aliases": "Silicon dioxide, silica, E551"
  },
  {
    "title": "Carmine / Cochineal",
    "tier": "caution",
    "desc": "A red colorant derived from the dried bodies of cochineal insects. Generally safe but a significant allergen for some individuals, capable of causing severe anaphylactic reactions. Also an animal product — vegans and vegetarians may not realize it is non-plant-derived. The FDA now requires it to be declared by name on labels.",
    "products": "Strawberry yogurt (some Dannon and Noosa varieties), fruit juice, candy",
    "aliases": "Carmine, cochineal, carminic acid, natural red 4, E120"
  },
  {
    "title": "Trehalose",
    "tier": "caution",
    "desc": "A naturally occurring sugar found in mushrooms and honey, now cheaply produced commercially and used as a food additive. A 2018 study in Nature linked the rise of trehalose in the food supply to the emergence and virulence of epidemic C. difficile strains. Research is ongoing. Trehalose in naturally occurring foods is a non-issue; concentrated trehalose as a food additive is the specific concern.",
    "products": "Protein powders, sports drinks, ice cream, dried fruit coating, some pharmaceuticals",
    "aliases": "Trehalose, mycose"
  },
  {
    "title": "Natural flavors / natural flavoring",
    "tier": "avoid",
    "desc": "Any flavoring derived from a plant, animal, yeast, or fermentation source — but processing can use petrochemical solvents, and many compounds can hide under one label. “Natural” is a legal category, not a quality standard.",
    "products": "Beverages, chips, bars, cereals, dressings, seasoning packets",
    "aliases": "Natural flavor(s), natural flavoring"
  },
  {
    "title": "Natural and artificial flavors",
    "tier": "avoid",
    "desc": "Combines natural-derived and synthetic compounds under one umbrella with no individual disclosure — worst of both worlds for transparency.",
    "products": "Flavored waters, protein bars, cereal, chips, snacks, fast food",
    "aliases": "Natural and artificial flavor(s)"
  },
  {
    "title": "Natural [specific] flavor (e.g. “natural orange flavor”)",
    "tier": "avoid",
    "desc": "The named source may be a small fraction of the blend; the rest can include undisclosed solvents, carriers, and processing aids.",
    "products": "Flavored waters, juices, sodas, candies, snacks, flavored dairy",
    "aliases": "Natural ___ flavor"
  },
  {
    "title": "“Flavor” with no qualifier",
    "tier": "avoid",
    "desc": "In the US, “flavor” alone can mean natural or artificial — zero transparency about source or composition.",
    "products": "Private-label snacks, condiments, budget beverages",
    "aliases": "Flavor"
  },
  {
    "title": "Organic natural flavors",
    "tier": "caution",
    "desc": "Organic sources and tighter carrier rules — meaningfully cleaner — but the blend remains opaque.",
    "products": "Organic packaged foods, organic beverages",
    "aliases": "Organic natural flavor(s)"
  },
  {
    "title": "Organic [specific] flavor (e.g. “organic vanilla flavor”)",
    "tier": "caution",
    "desc": "Best transparency available within the flavor-additive system — still a formulated compound, not the same as real vanilla extract.",
    "products": "Organic snacks, organic beverages",
    "aliases": "Organic ___ flavor"
  },
  {
    "title": "Soybean oil",
    "tier": "avoid",
    "desc": "Hexane-extracted, heat-refined; very high omega-6 (~54% linoleic acid); ubiquitous in processed food and restaurant fryers.",
    "products": "Fried food, mayo, dressings, crackers, chips, margarine",
    "aliases": "Soybean oil, vegetable oil (often mostly soy)"
  },
  {
    "title": "Canola oil (conventional)",
    "tier": "avoid",
    "desc": "High-heat + hexane processing; trans-type residues and oxidation byproducts; unstable ALA; much “heart healthy” messaging was industry-influenced.",
    "products": "Packaged foods, dressings, baked goods, restaurant cooking",
    "aliases": "Canola oil, rapeseed oil"
  },
  {
    "title": "Corn oil (conventional)",
    "tier": "avoid",
    "desc": "~54–60% omega-6; almost always GMO; oxidizes badly at frying temperatures.",
    "products": "Commercial frying, chips, margarine",
    "aliases": "Corn oil"
  },
  {
    "title": "Cottonseed oil",
    "tier": "avoid",
    "desc": "From non-food cotton crop (different pesticide expectations); gossypol must be refined out; ~52% omega-6.",
    "products": "Some fryers, chips, baked goods",
    "aliases": "Cottonseed oil"
  },
  {
    "title": "Sunflower oil (conventional)",
    "tier": "avoid",
    "desc": "~65–70% omega-6; highly unstable when heated; linked to gut inflammation in research.",
    "products": "Chips, crackers, snacks, margarine",
    "aliases": "Sunflower oil"
  },
  {
    "title": "Safflower oil (conventional)",
    "tier": "avoid",
    "desc": "Among the highest omega-6 oils (~75%); very unstable for cooking.",
    "products": "Dressings, margarine, snacks",
    "aliases": "Safflower oil"
  },
  {
    "title": "Rice bran oil",
    "tier": "avoid",
    "desc": "Hexane-refined industrial oil marketed for smoke point; phytoestrogen (gamma-oryzanol) concerns at high intake.",
    "products": "Some “healthy” packaged foods, restaurants",
    "aliases": "Rice bran oil"
  },
  {
    "title": "“Vegetable oil” (generic blend)",
    "tier": "avoid",
    "desc": "Usually soy / canola / corn / sunflower in whatever ratio is cheapest — high omega-6 regardless.",
    "products": "Most packaged foods, fryers, sprays",
    "aliases": "Vegetable oil"
  },
  {
    "title": "Palm oil (conventional)",
    "tier": "avoid",
    "desc": "Rated here mainly for environmental/ethical supply-chain risk (deforestation). More heat-stable than seed oils, but still common in ultra-processed foods.",
    "products": "Cookies, crackers, chocolate coatings, noodles",
    "aliases": "Palm oil"
  },
  {
    "title": "High-oleic sunflower / safflower oil",
    "tier": "caution",
    "desc": "Much lower omega-6 than conventional — but still solvent-refined industrial oil in many “better” packaged foods.",
    "products": "Protein bars, crackers, “healthy” chips",
    "aliases": "High oleic sunflower oil, high oleic safflower oil"
  },
  {
    "title": "Refined coconut oil",
    "tier": "caution",
    "desc": "Bleached/deodorized — loses polyphenols; stable fat, but industrial process; often a “cleaner-sounding” oil in UPF.",
    "products": "Packaged snacks, popcorn, bars",
    "aliases": "Coconut oil (if not virgin / unrefined)"
  },
  {
    "title": "Refined avocado oil",
    "tier": "caution",
    "desc": "Not the same as cold-pressed; adulteration with cheaper oils has been documented — traceability matters.",
    "products": "Cooking sprays, some chips",
    "aliases": "Refined avocado oil"
  }
];

window.CHAPTERS_PACKAGED_APPEND = [{"id":"pkg-glossary","emoji":"📋","name":"Ingredients to Avoid Glossary","desc":"A–Z glossary of additives and label terms — hard avoids vs. use-with-caution, built for quick lookup.","heroColor":"#e8d4d4","heroEmoji":"📋","heroTagline":"Tabs + search — your pocket label decoder","content":"<div class=\"ch-prose\"><p>This glossary is a <strong>pocket label decoder</strong> for real shopping: hundreds of additives, oils, sweeteners, and “natural” pitfalls in one searchable list. Use <strong>All</strong> for an A–Z browse, <strong>Avoid</strong> for the hardest passes, or <strong>Use with caution</strong> when context matters.</p></div><div id=\"pkg-glossary-mount\"></div>"},{"id":"pkg-flavors","emoji":"🔬","name":"Dissecting the Different Types of 'Flavors'","desc":"Every flavor label type — graded from ideal to hard avoid.","heroColor":"#ddd8e8","heroEmoji":"🔬","heroTagline":"Natural vs. artificial — what the label can hide","content":"<div class=\"ch-prose\"><p>Flavor labeling is one of the most confusing — and deliberately opaque — areas of food regulation. Two products can both say 'natural flavor' on their label and contain completely different things. This section grades every flavor label type you will encounter so you can evaluate any label accurately regardless of how it's worded.</p></div><div class=\"ch-section-title\">The grading scale</div><div class=\"ch-prose\"><p>✅ Acceptable — minor caveats, generally a reasonable option</p><p>⚠️ Caution — context matters, individual sensitivity may apply</p><p>❌ Avoid — lacks transparency, likely contains undisclosed compounds</p><p>❌❌ Hard Avoid — no meaningful transparency, documented harm potential</p></div><div class=\"ch-section-title\">Flavor types (from the label)</div><div class=\"tier-card\"><div class=\"tier-header tier-hard\">❌❌ Natural and Artificial Flavors (combined)</div><div class=\"tier-body\"><strong>What it is:</strong> Both natural-derived and synthetic flavor compounds are used. The food industry's most flexible flavor label — can contain an almost unlimited range of chemical compounds under a two-word umbrella. No individual disclosure required.<br><br><strong>The concern:</strong> Worst of both worlds from a transparency standpoint. The 'natural' component provides cover for the artificial. Common in products trying to appear cleaner than they are. Treat as artificial flavors for practical purposes.<br><br><strong>Found in:</strong> Flavored waters, beverages, protein bars, cereal, chips, packaged snacks, fast food</div></div><div class=\"tier-card\"><div class=\"tier-header tier-avoid\">❌ Natural Flavors / Natural Flavoring</div><div class=\"tier-body\"><strong>What it is:</strong> Any flavoring derived from a plant, animal, yeast, or fermentation source — but the source can be processed using petrochemical solvents, and dozens of compounds can be blended into one entry without disclosure. Can include MSG-equivalent glutamates, castoreum (from beaver anal glands), insect-derived compounds, and solvent residues.<br><br><strong>The concern:</strong> The word 'natural' is a legal category, not a quality standard. Manufacturers use it to make ultra-processed food sound closer to real food. No transparency about processing, concentration, or individual compound safety.<br><br><strong>Found in:</strong> Almost every packaged food — beverages, chips, bars, cereals, dressings, seasoning packets</div></div><div class=\"tier-card\"><div class=\"tier-header tier-avoid\">❌ Natural [Specific] Flavor (e.g. 'Natural Orange Flavor')</div><div class=\"tier-body\"><strong>What it is:</strong> A natural flavor where the source is named. Sounds more transparent — but the named source may represent only a tiny fraction of the actual flavor compound mixture. The remainder can include dozens of undisclosed processing aids, solvents, and carrier compounds.<br><br><strong>The concern:</strong> The named source creates an illusion of simplicity and purity that the actual formulation does not deliver. 'Natural orange flavor' is not orange — it is an industrial flavor formulation derived in part from orange material.<br><br><strong>Found in:</strong> Flavored waters, juices, sodas, candies, snacks, flavored dairy products</div></div><div class=\"tier-card\"><div class=\"tier-header tier-avoid\">❌ 'Flavor' with No Qualifier</div><div class=\"tier-body\"><strong>What it is:</strong> Some labels simply list 'flavor' with no additional descriptor. In the US, 'flavor' without qualification can refer to either natural or artificial compounds. Manufacturers sometimes use this to avoid committing to either designation.<br><br><strong>The concern:</strong> No qualifier means no transparency at all. When you see 'flavor' alone on a US label, treat it as equivalent to artificial flavors — you have zero information about source, processing, or composition.<br><br><strong>Found in:</strong> Some packaged snacks, condiments, and beverages — particularly private-label or budget products</div></div><div class=\"tier-card\"><div class=\"tier-header tier-caution\">⚠️ Organic Natural Flavors</div><div class=\"tier-body\"><strong>What it is:</strong> Natural flavors where the source ingredients are certified organic — grown without synthetic pesticides or GMOs. USDA organic standard requires organic flavors come from organic sources when available. Processing aids and carrier solvents must also meet organic standards.<br><br><strong>The concern:</strong> Meaningfully better than conventional natural flavors — cleaner source material and tighter solvent/carrier restrictions. The fundamental opacity problem remains: you still cannot know what individual compounds are in the blend.<br><br><strong>Found in:</strong> Organic packaged foods, better-for-you snack brands, organic beverages</div></div><div class=\"tier-card\"><div class=\"tier-header tier-caution\">⚠️ Organic [Specific] Flavor (e.g. 'Organic Vanilla Flavor')</div><div class=\"tier-body\"><strong>What it is:</strong> An organic natural flavor where the source is named. Subject to the same USDA organic carrier and processing restrictions, with the additional transparency of naming the source. Still a formulated flavor compound, not a whole food extract.<br><br><strong>The concern:</strong> Named source + organic standard is the most transparency you can get within the flavor additive system. Still a formulated product, not the real ingredient. 'Organic vanilla flavor' is not the same as vanilla extract.<br><br><strong>Found in:</strong> Better-quality packaged food, organic snack brands, some beverages</div></div><div class=\"tier-card\"><div class=\"tier-header tier-ideal\">✅✅ Organic [Specific from Whole Food Source]</div><div class=\"tier-body\"><strong>What it is:</strong> A named organic source where the flavoring agent is the concentrated whole food ingredient itself — not a formulated compound. Cold-pressed citrus oils, organic vanilla extract, organic cocoa used for flavoring all qualify. This is what 'flavored with real ingredients' actually looks like on a label.<br><br><strong>The concern:</strong> Minimal. Source is whole food, processing is minimal, organic standard applies. Concentration levels can be high (essential oils are potent) but generally well-tolerated at food-use levels.<br><br><strong>Found in:</strong> High-quality chocolate, artisan baked goods, premium beverages, some better-for-you snack brands</div></div>"},{"id":"pkg-labels","emoji":"🏷️","name":"Decoding Misleading Label Claims","desc":"What marketing words legally mean — and what they still hide.","heroColor":"#d8e4dc","heroEmoji":"🏷️","heroTagline":"Front-of-package claims, decoded","content":"<div class=\"ch-prose\"><p>Front-of-package claims are written by marketing teams within narrow legal definitions.</p></div><div class=\"tier-card\"><div class=\"tier-header org\">“Natural”</div><div class=\"tier-body\"><p>The FDA has issued only informal guidance on “natural” — defining it as meaning nothing artificial or synthetic has been included or added that would not normally be expected. This is not a legal standard. The FDA has declined to formally define “natural” multiple times when petitioned.</p><p><strong>What it legally means:</strong> Virtually anything can be called “natural.” High-fructose corn syrup was labeled “natural” for years before a legal challenge. Sodium benzoate, carrageenan, and other concerning additives have been marketed as natural. The word carries no regulatory weight and communicates nothing meaningful about the product's quality or processing level.</p><p><strong>What it still doesn’t tell you:</strong> Farming method (organic vs conventional), pesticide residues, degree of processing (NOVA), sugar load, seed oils, or whether the food is “whole” in any meaningful sense.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Made with real fruit”</div><div class=\"tier-body\"><p>There is no defined minimum percentage of real fruit required. The “real fruit” can be in the form of fruit juice concentrate, dehydrated fruit puree, or fruit powder — all highly processed forms that behave more like added sugar than whole fruit.</p><p><strong>What it legally means:</strong> A product with 2% apple juice concentrate can legally say “made with real apples.” The claim says nothing about the quantity of fruit, its form, or whether the fruit's nutritional content survived processing. It is primarily a marketing statement.</p><p><strong>What it still doesn’t tell you:</strong> Total sugar, fiber content, other sweeteners, or whether the product is mostly refined starch and flavoring beyond that splash of fruit.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Multigrain”</div><div class=\"tier-body\"><p>Contains more than one type of grain. No requirement that any of the grains be whole grains. No minimum percentage of any grain required. No fiber requirement. The grains present can all be refined.</p><p><strong>What it legally means:</strong> Multigrain bread can be — and usually is — made primarily from refined white flour with small amounts of other refined grains added for label appeal. Unless the label says “whole grain” as the first ingredient, multigrain communicates nothing meaningful about the nutritional quality of the grain used.</p><p><strong>What it still doesn’t tell you:</strong> Whether any grain is whole, how much of each grain is present, or overall fiber and micronutrient density.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Whole grain”</div><div class=\"tier-body\"><p>The FDA defines whole grain as grain products where the bran, germ, and endosperm are present in the same proportions as the original grain kernel. The Whole Grains Council stamp requires only 8g of whole grain per serving — allowing a product to carry the stamp while still being predominantly refined grain.</p><p><strong>What it legally means:</strong> A product labeled “whole grain” may contain whole grain as its second or third ingredient after refined flour. The FDA does not require whole grain to be the primary ingredient. “Made with whole grain” requires even less — any detectable amount technically qualifies.</p><p><strong>What it still doesn’t tell you:</strong> Added sugars, sodium, industrial oils, natural flavors, emulsifiers, or how much of the product is still refined flour.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Low fat”</div><div class=\"tier-body\"><p>The FDA defines “low fat” as 3 grams of fat or less per serving. A factual claim about fat content only. Says nothing about sugar, sodium, artificial sweeteners, refined carbohydrates, or total caloric content.</p><p><strong>What it legally means:</strong> The low-fat era of the 1980s–1990s produced decades of research showing that low-fat processed food products replaced fat with sugar, refined carbohydrates, and artificial sweeteners — resulting in worse health outcomes. Low-fat salad dressing, low-fat yogurt, and low-fat snacks are among the most sugar- and additive-laden products in the store.</p><p><strong>What it still doesn’t tell you:</strong> Whether sugar, starch, gums, or sweeteners were added to compensate — or whether the product is minimally processed overall.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Fat-free”</div><div class=\"tier-body\"><p>Less than 0.5 grams of fat per serving. Same implications as “low fat” with even more severe fat removal, typically requiring more sugar, starch, and texture additives to compensate for the mouthfeel and palatability that fat provides.</p><p><strong>What it legally means:</strong> Fat is not the enemy. Fat-free products strip out fat-soluble vitamins (A, D, E, K) along with the fat itself. Fat-free dairy products, for example, remove the fat that is necessary for the absorption of vitamin D — which is often then added back as a synthetic fortification. The product is a lesser version of the original that has been chemically compensated for the removal of a whole food component.</p><p><strong>What it still doesn’t tell you:</strong> Ingredient quality beyond fat removal — including added sweeteners, protein sources, and stabilizers used to mimic texture.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Light” / “Lite”</div><div class=\"tier-body\"><p>The FDA allows “light” or “lite” to refer to reduced fat (at least 50% less fat), reduced calories (at least 1/3 fewer calories), reduced sodium (at least 50% less sodium), or lighter in color or flavor — the label must specify which characteristic is “light.”</p><p><strong>What it legally means:</strong> A “light” product can legally have more calories than a competing product that doesn't use the claim. “Light in color” or “light in flavor” allows the word with no nutritional implication whatsoever. Most consumers assume “light” means fewer calories — which it does not always mean.</p><p><strong>What it still doesn’t tell you:</strong> Which of those meanings applies unless you read the fine print — and what else is in the formula beyond the one “lightened” nutrient.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Contains probiotics”</div><div class=\"tier-body\"><p>There is no FDA standard of identity for “probiotics.” No minimum colony-forming unit (CFU) count is required. No specific strains are required. No survival-through-processing requirement exists. The claim can be made if any live bacterial culture is present, even if the amount is too small to have any physiological effect.</p><p><strong>What it legally means:</strong> A product can be pasteurized after fermentation (killing all live cultures), then add back a token amount of a probiotic strain, and still say “contains probiotics” on the label. The CFU count, the specific strains, and whether the bacteria survive to reach the gut are all questions the label does not answer.</p><p><strong>What it still doesn’t tell you:</strong> Whether the cultures are alive at consumption, clinically meaningful doses, or paired with prebiotic fiber — or whether the rest of the product is ultra-processed.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Good source of fiber”</div><div class=\"tier-body\"><p>The FDA defines “good source of fiber” as 10–19% of the daily value (2.5–4.75g per serving). “Excellent source” is 20%+ of daily value (4.75g+) per serving.</p><p><strong>What it legally means:</strong> The fiber can come entirely from isolated, extracted additives like inulin, chicory root extract, polydextrose, or soluble corn fiber — none of which behave like fiber in whole foods and some of which cause significant digestive distress at high doses. A product made of refined flour and sugar with inulin added back can legitimately claim to be a “good source of fiber.”</p><p><strong>What it still doesn’t tell you:</strong> Whether fiber comes from whole plants and intact grains — or only from isolated fibers added to an otherwise refined formula.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“No artificial colors”</div><div class=\"tier-body\"><p>No synthetic dyes (Red 40, Yellow 5, etc.) were used. Natural colorants (including annatto, carmine, caramel color, turmeric extract, beet juice) are permitted under this claim.</p><p><strong>What it legally means:</strong> A product with this claim can still contain caramel color Class III or IV (the 4-MEI-producing type), carmine (from insects, a significant allergen), or annatto (which some children react to). The claim accurately says there are no FD&amp;C synthetic dyes — it does not say the product is free from all concerning color additives.</p><p><strong>What it still doesn’t tell you:</strong> Whether other additives (flavors, preservatives, emulsifiers) are present — or whether “natural” colors are ones your family tolerates.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“No artificial preservatives”</div><div class=\"tier-body\"><p>No synthetic preservatives (BHA, BHT, sodium benzoate, etc.) were used. Natural preservatives (vitamin E / tocopherols, rosemary extract, citric acid, salt, sugar, vinegar) are permitted under this claim.</p><p><strong>What it legally means:</strong> A genuinely accurate claim — but it creates a halo effect that extends to the rest of the ingredient list. Consumers often assume this means the product is a whole-food product. It can still contain artificial colors, flavors, emulsifiers, sweeteners, and stabilizers. The claim applies to one category of additives only.</p><p><strong>What it still doesn’t tell you:</strong> Everything else on the ingredient list — especially flavors, sweeteners, and industrial oils.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Organic” (USDA certified)</div><div class=\"tier-body\"><p>Products labeled “100% organic” must contain only certified organic ingredients. Products labeled “organic” must contain at least 95% certified organic agricultural ingredients. “Made with organic ingredients” must contain at least 70% certified organic ingredients. Non-agricultural ingredients from the National List of Allowed Substances are permitted.</p><p><strong>What it legally means:</strong> USDA organic certification is genuinely meaningful — it prohibits synthetic pesticides, GMOs, synthetic fertilizers, and many additives. But it is not a guarantee of whole food quality. A USDA organic product can still be heavily processed (NOVA Class 4), contain natural flavors, high-oleic oils, and many additives on the approved list. Organic is a starting point, not an endpoint.</p><p><strong>What it still doesn’t tell you:</strong> Degree of processing, added sugars, seed oils, flavor systems, or sodium — read the full ingredient list.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Non-GMO”</div><div class=\"tier-body\"><p>The Non-GMO Project Verified seal indicates that a product's ingredients have been tested and verified to avoid genetically modified organisms. The FDA's “bioengineered” disclosure is a separate, weaker standard that only applies to foods with detectable GMO genetic material.</p><p><strong>What it legally means:</strong> Non-GMO is not equivalent to organic. Non-GMO crops can still be grown with conventional pesticides. Non-GMO canola oil is still hexane-extracted, high-temperature refined canola oil — the GMO status of the canola seed does not change the processing of the oil. Non-GMO is a meaningful distinction for reducing GMO exposure, but it says nothing about pesticide residues, processing methods, or overall food quality.</p><p><strong>What it still doesn’t tell you:</strong> Pesticide load, refining solvents, inflammatory oils, or sugar content.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Gluten-free”</div><div class=\"tier-body\"><p>The FDA defines “gluten-free” as containing less than 20 parts per million (ppm) of gluten. This threshold was established as the level safe for most people with celiac disease.</p><p><strong>What it legally means:</strong> Gluten-free has no nutritional implication beyond the absence of gluten. Gluten-free products are frequently made from highly refined starches (rice flour, tapioca starch, potato starch) with a worse glycemic profile than the wheat products they replace. They often contain more sugar, more fat, more thickeners, and more additives to compensate for the structure that gluten provides. “Gluten-free” has been captured by the processed food industry as a premium health claim that does not reflect nutritional quality.</p><p><strong>What it still doesn’t tell you:</strong> Whether the product is whole-food-based, low in sugar and seed oils, or appropriate for non-celiac goals beyond gluten avoidance.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">“Keto-friendly”</div><div class=\"tier-body\"><p>There is no FDA definition or regulatory standard for “keto-friendly.” It is an entirely unregulated marketing claim. Any manufacturer can apply it to any product regardless of actual macronutrient content.</p><p><strong>What it legally means:</strong> A product labeled “keto-friendly” can contain erythritol (with emerging cardiac risk data), sucralose, soy protein isolate, inulin, and a variety of ultra-processed ingredients. “Keto-friendly” means whatever the manufacturer wants it to mean. It communicates only that the manufacturer is targeting the keto consumer demographic.</p><p><strong>What it still doesn’t tell you:</strong> Net carbs, ingredient quality, seed oils, artificial sweeteners, or whether the food supports metabolic health beyond marketing.</p></div></div><div class=\"ch-section-title\">Organic: what the seal still doesn’t guarantee</div><div class=\"ch-prose\"><p>USDA organic is meaningful — but it is not a reason to stop reading ingredients. These are common gaps shoppers miss (expanded from the “organic loopholes” reference).</p></div><div class=\"tier-card\"><div class=\"tier-header org\">'100% Organic'</div><div class=\"tier-body\"><strong>Official meaning:</strong> All ingredients and processing aids must be certified organic. The most rigorous USDA organic designation. No exceptions for non-organic agricultural ingredients.<br><br><strong>The gap:</strong> The strictest designation — but '100% organic' processed food is still processed food. A 100% organic cookie is still a cookie with refined organic flour, organic sugar, and organic butter. The label speaks to sourcing, not nutritional quality or degree of processing.</div></div><div class=\"tier-card\"><div class=\"tier-header org\">'Organic' (USDA seal)</div><div class=\"tier-body\"><strong>Official meaning:</strong> Must contain at least 95% certified organic agricultural ingredients by weight. Up to 5% can be non-organic ingredients from the National List of Allowed and Prohibited Substances.<br><br><strong>The gap:</strong> The National List allows certain synthetic substances in organic products. Carrageenan was allowed in organic liquid products until 2018 (now prohibited in fluid dairy-like beverages but still in debate for other applications). Substances on the National List are reviewed every 5 years, subject to industry lobbying.</div></div><div class=\"tier-card\"><div class=\"tier-header org\">'Made with Organic [Ingredient]'</div><div class=\"tier-body\"><strong>Official meaning:</strong> Must contain at least 70% certified organic agricultural ingredients. Cannot display the USDA organic seal. The specific organic ingredients should be listed.<br><br><strong>The gap:</strong> Up to 30% of the product can be non-organic and can include conventional, potentially pesticide-laden, or GMO ingredients. Always read the full ingredient list regardless of this claim.</div></div><div class=\"tier-card\"><div class=\"tier-header org\">'Organic' on Single-Ingredient Raw Products</div><div class=\"tier-body\"><strong>Official meaning:</strong> For single-ingredient whole foods (organic apples, organic spinach, organic chicken), the USDA organic certification is most straightforward and most meaningful. It requires no synthetic pesticides, no GMOs, no synthetic fertilizers. For livestock, it requires organic feed and prohibits routine antibiotic use.<br><br><strong>The gap:</strong> Enforcement of organic certification varies significantly by certifying agent and country of origin. Imported organic products — particularly from countries with less rigorous inspection infrastructure — may not meet the same standards as US-certified organic. USDA organic from domestic producers with transparent practices is the most reliable.</div></div><div class=\"tier-card\"><div class=\"tier-header org\">'Organic' Processed Food with Natural Flavors</div><div class=\"tier-body\"><strong>Official meaning:</strong> Organic certified products can contain 'organic natural flavors' — and they may also contain conventional natural flavors if an organic version is not commercially available (a provision that is frequently invoked).<br><br><strong>The gap:</strong> A USDA organic product can contain conventional (non-organic) natural flavors under the 'commercially unavailable' exemption. The natural flavors may still contain undisclosed compounds, processing aids, and carrier solvents. 'Organic' does not mean 'transparent about flavor composition.'</div></div><div class=\"tier-card\"><div class=\"tier-header org\">Organic Livestock: 'Pasture Access'</div><div class=\"tier-body\"><strong>Official meaning:</strong> USDA organic rules require that ruminants (cattle, sheep, goats) have access to pasture for the grazing season and that pasture must provide at least 30% of their dry matter intake. Poultry must have access to the outdoors.<br><br><strong>The gap:</strong> The 'outdoor access' requirement for poultry is notoriously weak — a small door on the side of a 100,000-bird house constitutes 'access to the outdoors.' The 30% pasture intake requirement for ruminants is meaningful but not equivalent to regenerative or grass-fed/grass-finished standards. USDA organic livestock products are meaningfully better than conventional but not equivalent to pasture-raised or regenerative standards.</div></div><div class=\"tier-card\"><div class=\"tier-header org\">Non-Organic Ingredients on the National List</div><div class=\"tier-body\"><strong>Official meaning:</strong> The National Organic Program maintains a list of non-organic substances that may be used in organic products. This list is reviewed every 5 years through a process that includes industry submissions and public comment.<br><br><strong>The gap:</strong> Substances currently or historically on the National List that may surprise consumers include: carrageenan (still permitted in some contexts), certain synthetic leavening agents, non-organic hops in organic beer, non-organic casings for organic sausage, and various processing aids. The full current National List is publicly available at the USDA's NOP website.</div></div>"},{"id":"pkg-packaging","emoji":"📦","name":"Packaging Toxicants","desc":"Chemicals that migrate from containers into food — and practical swaps.","heroColor":"#e4dfd8","heroEmoji":"📦","heroTagline":"Not in the recipe — still in the meal","content":"<div class=\"ch-prose\"><p>Packaging is not on the ingredient list — but chemicals can still migrate into food.</p></div><div class=\"tier-card\"><div class=\"tier-header tier-avoid\">Bisphenols after “BPA-free” (BPS, BPF)</div><div class=\"tier-body\"><p><strong>What it is:</strong> Bisphenol S and Bisphenol F are the primary replacements used in “BPA-free” products. Emerging research shows BPS and BPF have similar or in some cases stronger estrogenic activity than BPA itself. A 2013 study found BPS caused the same type of endocrine disruption in animal models as BPA. Manufacturers moved to BPS/BPF in response to consumer pressure about BPA, but the structural similarity of these molecules means the underlying problem was not solved — only relabeled.</p><p><strong>Where it shows up:</strong> “BPA-free” plastic bottles and containers, thermal receipts (BPS replaced BPA in most receipt paper), some food packaging.</p><p><strong>Practical swaps:</strong> Treat “BPA-free” plastic as marketing, not a safety upgrade. Prefer glass and stainless for food storage and drinking. Decline paper receipts or choose digital; wash hands after handling thermal paper.</p></div></div><div class=\"tier-card\"><div class=\"tier-header tier-avoid\">PFAS (“forever chemicals”) in food packaging</div><div class=\"tier-body\"><p><strong>What it is:</strong> A class of more than 12,000 synthetic fluorinated compounds that do not break down in the environment or the human body. PFAS are used to create grease-resistant and water-resistant surfaces in food packaging. They accumulate in blood and tissues and are linked to thyroid disruption, immune suppression, delayed puberty in children, increased cancer risk (kidney, testicular, liver), and elevated cholesterol. The EPA has no enforceable limit on PFAS in food packaging.</p><p><strong>Where it shows up:</strong> Microwave popcorn bags (grease-resistant coating), fast food wrappers and boxes, pizza boxes, some paper plates/cups, some nonstick cookware coatings, some candy wrappers.</p><p><strong>Practical swaps:</strong> Skip microwave popcorn bags; make stovetop popcorn. Minimize contact time between greasy food and treated paper. Prefer stainless or cast iron over PTFE nonstick. Store food in glass or stainless. Seek brands that publish PFAS-free packaging commitments.</p></div></div><div class=\"tier-card\"><div class=\"tier-header tier-avoid\">Phthalates (plasticizers)</div><div class=\"tier-body\"><p><strong>What it is:</strong> A family of plasticizers used to make PVC plastic flexible and to carry fragrance in packaging inks and adhesives. Phthalates leach from plastic packaging into food — especially fatty foods, because phthalates are lipophilic (fat-loving). They are endocrine disruptors that interfere with testosterone synthesis and have been linked to reduced sperm count, altered reproductive development in males, gestational diabetes, and neurodevelopmental effects in children.</p><p><strong>Where it shows up:</strong> PVC cling wrap, plastic-lined packaging with inks and adhesives, fast food packaging, some squeeze bottles and tubes (tomato paste, nut butters).</p><p><strong>Practical swaps:</strong> Use wax paper, parchment, or beeswax wrap instead of PVC wrap. Decant fatty foods from plastic into glass. Avoid squeezing flexible plastic against oil-rich foods.</p></div></div><div class=\"tier-card\"><div class=\"tier-header tier-avoid\">Styrene / polystyrene</div><div class=\"tier-body\"><p><strong>What it is:</strong> The building block of polystyrene foam (Styrofoam) and some rigid plastics. Styrene is listed as a possible carcinogen by IARC (Group 2B) and is on the National Toxicology Program's list of substances reasonably anticipated to be human carcinogens. It leaches from polystyrene containers into food — especially hot food, fatty food, and acidic food. Several states have banned polystyrene food containers, including California (2022).</p><p><strong>Where it shows up:</strong> Foam cups and clamshells, polystyrene takeout containers, some disposable plates, hot cups at diners and coffee shops.</p><p><strong>Practical swaps:</strong> Avoid hot food and drinks in polystyrene. Bring a reusable cup. Transfer takeout to glass or ceramic before eating.</p></div></div><div class=\"tier-card\"><div class=\"tier-header tier-avoid\">Perchlorate (antistatic in dry-food packaging)</div><div class=\"tier-body\"><p><strong>What it is:</strong> A chemical used in the plastic packaging of dry food to prevent static buildup. Perchlorate is also a naturally occurring contaminant in water and some produce. It competes with iodine for uptake by the thyroid gland, suppressing thyroid hormone production. Infants and pregnant women are most vulnerable because thyroid function is critical to neurological development.</p><p><strong>Where it shows up:</strong> Dry foods (cereal, crackers, snacks) — antistatic agents in plastic liners can migrate into food on contact.</p><p><strong>Practical swaps:</strong> Treat as one cumulative exposure among many. Prioritize filtered water; reduce reliance on ultra-processed boxed snacks where possible.</p></div></div><div class=\"tier-card\"><div class=\"tier-header tier-avoid\">Mineral oil hydrocarbons (MOSH / MOAH)</div><div class=\"tier-body\"><p><strong>What it is:</strong> Mineral oil saturated hydrocarbons (MOSH) and aromatic hydrocarbons (MOAH) migrate from recycled cardboard packaging, printing inks, and adhesives into food. MOAH are of particular concern because some aromatic hydrocarbons are genotoxic and carcinogenic. The European Food Safety Authority has identified MOAH as a concern with no safe level. The US has no specific regulations on mineral oil migration from food packaging.</p><p><strong>Where it shows up:</strong> Dry foods in cardboard (cereal, pasta, flour, rice, crackers) — recycled cardboard can carry mineral oils from prior ink that migrate through inner bags.</p><p><strong>Practical swaps:</strong> Prefer brands with virgin board or verified barriers when you can. Decant dry goods into glass or stainless after opening.</p></div></div><div class=\"tier-card\"><div class=\"tier-header tier-avoid\">Vinyl chloride / PVC in food contact</div><div class=\"tier-body\"><p><strong>What it is:</strong> Vinyl chloride is the monomer used to make PVC (polyvinyl chloride) plastic. Vinyl chloride monomer is a known human carcinogen (IARC Group 1) — it causes hepatic angiosarcoma (a rare liver cancer). Residual vinyl chloride monomer in PVC packaging can migrate into food. PVC is the packaging plastic most associated with plasticizer leaching (phthalates) and vinyl chloride residue.</p><p><strong>Where it shows up:</strong> Deli PVC wrap, some bottles, PVC-lined caps (#3 resin), some processing equipment.</p><p><strong>Practical swaps:</strong> Avoid PVC (#3) for food. Ask for paper wrap at the deli. At home, use beeswax wrap or parchment instead of plastic wrap.</p></div></div>"},{"id":"pkg-fortify","emoji":"💊","name":"Synthetic Fortification Additives","desc":"Why the form of added nutrients matters — and what to prefer instead.","heroColor":"#e0e8f0","heroEmoji":"💊","heroTagline":"Fortified ≠ the same as food","content":"<div class=\"ch-prose\"><p>Food fortification — adding synthetic vitamins and minerals back to processed food — is often presented as a nutritional benefit. But the <strong>form</strong> of a nutrient matters enormously. Synthetic vitamins are not always equivalent to the same vitamins found in whole foods, and in some cases the synthetic form actively impairs the pathways it is meant to support. A cereal box's front-of-pack vitamin claims are not equivalent to the vitamins in an egg.</p></div><div class=\"tier-card\"><div class=\"tier-header org\">Vitamin B12</div><div class=\"tier-body\"><p><strong>Synthetic / fortified:</strong> Cyanocobalamin — synthetic form containing a cyanide molecule. Must be converted by the body to active forms (methylcobalamin or adenosylcobalamin). People with MTHFR gene variants, methylation issues, or kidney disease may not convert it efficiently. The cyanide group is released during conversion — at food doses it is a negligible amount, but it is not nothing. Cyanocobalamin is the cheapest form of B12 and is added to fortified cereals and plant-based milks. For people with methylation issues (MTHFR gene variants affect 40–60% of the population to some degree), cyanocobalamin supplementation may be less effective and may interfere with methylation pathways.</p><p><strong>Whole-food / preferred:</strong> Methylcobalamin or adenosylcobalamin — the bioactive forms found in pastured animal products, liver, eggs, and dairy. These are immediately usable by the body without conversion.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">Folate / folic acid</div><div class=\"tier-body\"><p><strong>Synthetic / fortified:</strong> Folic acid — the synthetic oxidized form added to enriched flour, fortified cereals, and prenatal vitamins. Not bioidentical to food folate. Requires conversion to the active form (5-MTHF) via an enzyme called MTHFR. People with common MTHFR variants cannot efficiently convert folic acid and may accumulate unmetabolized folic acid (UMFA) in the blood.</p><p><strong>Whole-food / preferred:</strong> 5-MTHF (methylfolate) — the bioactive form found in leafy greens (especially dark leafy greens), legumes, liver, and eggs. Also available as the supplement form “5-MTHF” or “methylfolate” on supplement labels.</p><p><strong>Why it matters:</strong> Unmetabolized folic acid from synthetic fortification has been associated in some research with promotion of pre-existing cancer cell growth, impaired immune function, and masking of B12 deficiency. Pregnant women with MTHFR variants are specifically advised by some practitioners to use methylfolate rather than folic acid. Mass flour fortification has benefited neural tube defect prevention — but population-level effects of UMFA accumulation remain an active research area.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">Iron</div><div class=\"tier-body\"><p><strong>Synthetic / fortified:</strong> Ferrous sulfate and ferric compounds — the inorganic iron forms used in fortification. Much less bioavailable than heme iron from animal sources. Ferrous sulfate in particular is associated with gastrointestinal side effects (constipation, nausea, cramping) and — at higher doses — with oxidative stress. Excess unabsorbed non-heme iron in the gut may feed pathogenic bacteria preferentially over beneficial bacteria.</p><p><strong>Whole-food / preferred:</strong> Heme iron from animal sources (liver, red meat, shellfish) — absorbed at roughly 15–35% efficiency vs. 2–20% for non-heme iron. In food form, iron absorption is self-regulated by the body based on iron status.</p><p><strong>Why it matters:</strong> Fortification iron in cereal products is delivered in forms that are poorly absorbed but still interact with the gut microbiome. Iron deficiency is real and serious — but the solution is iron-rich whole foods, not fortified cereal. Consuming fortified cereals does not deliver iron as effectively as the label's percentage of daily value implies.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">Vitamin D</div><div class=\"tier-body\"><p><strong>Synthetic / fortified:</strong> Vitamin D2 (ergocalciferol) — derived from plant sources via UV irradiation. Less potent and shorter-acting than vitamin D3. Also used: synthetic vitamin D3 (cholecalciferol) derived from lanolin — while the base molecule is the same as natural D3, the delivery vehicle (typically soybean oil in fortified milk) and the dose may not optimize absorption.</p><p><strong>Whole-food / preferred:</strong> Vitamin D3 from sunlight (endogenous synthesis), fatty fish, pastured egg yolks, liver, and lard from pasture-raised animals. Vitamin K2 (MK-4 and MK-7) is the critical co-factor for vitamin D to direct calcium to bones rather than soft tissue — whole food sources of D3 tend to naturally co-occur with K2.</p><p><strong>Why it matters:</strong> Fortified dairy with vitamin D2 or poorly absorbed synthetic D3 is not equivalent to sun exposure or whole food D3. Vitamin D supplementation without K2 may promote inappropriate calcium deposition. The vitamin D fortification system has not meaningfully solved widespread deficiency, suggesting vehicle and form matter more than regulators have acknowledged.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">Vitamin A</div><div class=\"tier-body\"><p><strong>Synthetic / fortified:</strong> Retinyl palmitate or retinyl acetate — synthetic retinol esters added to low-fat and fat-free dairy (because the fat removal process strips naturally occurring vitamin A) and to some fortified cereals and beverages. Also: beta-carotene from synthetic sources, listed as “vitamin A (beta-carotene)” — the body converts beta-carotene to retinol inefficiently and variably.</p><p><strong>Whole-food / preferred:</strong> Preformed vitamin A (retinol) in liver, egg yolks, butter, and full-fat dairy from pasture-raised animals. This form requires no conversion and is directly usable.</p><p><strong>Why it matters:</strong> Fat-free dairy is fortified with synthetic vitamin A to replace what was removed with the fat — but fat is required for vitamin A absorption. The synthetic vitamin A is added to a product that has had the fat removed, meaning the very vehicle for absorbing fat-soluble vitamins has been stripped away.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">Calcium</div><div class=\"tier-body\"><p><strong>Synthetic / fortified:</strong> Calcium carbonate (chalk), calcium phosphate, tricalcium phosphate, calcium citrate — the forms used in fortification of plant-based milks, orange juice, and supplement products. Calcium carbonate requires adequate stomach acid for absorption and is poorly absorbed in the absence of vitamin D and K2.</p><p><strong>Whole-food / preferred:</strong> Calcium from dairy (best absorbed), leafy greens (particularly kale, bok choy — not spinach, which is high in oxalates that bind calcium), sardines with bones, broth made from bones.</p><p><strong>Why it matters:</strong> Calcium-fortified plant-based milks (oat, almond, rice) provide calcium in a form that may not be bioequivalent to dairy calcium. The shake-before-use requirement for many plant milks is because the added calcium carbonate settles — it is not integrated into the food matrix the way calcium is in dairy. Studies on calcium from fortified plant milks show lower bioavailability than dairy calcium.</p></div></div><div class=\"tier-card\"><div class=\"tier-header org\">Zinc</div><div class=\"tier-body\"><p><strong>Synthetic / fortified:</strong> Zinc oxide — the most common form used in food fortification. Very poorly absorbed (approximately 50–60% bioavailability compared to zinc from meat). Also used: zinc sulfate, zinc gluconate.</p><p><strong>Whole-food / preferred:</strong> Zinc from animal products (oysters are the richest source, followed by red meat, poultry, shellfish). In plant foods, zinc is present but bound to phytates that inhibit absorption — fermentation (sourdough) and soaking reduce phytate content and improve zinc bioavailability.</p></div></div>"}];
