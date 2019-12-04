using System;
using System.Text;
using System.Xml;
using IronBlock;
using IronBlock.Blocks;

namespace BlocklyService
{
    class BlocklyService
    {
        static void Main(string[] args)
        {
            var parser = new Parser();

            // add the standard blocks to the parser
            parser.AddStandardBlocks();
            // parse the xml file to create a workspace
            string _byteOrderMarkUtf8 = Encoding.UTF8.GetString(Encoding.UTF8.GetPreamble());
            XmlDocument xml = new XmlDocument();
            xml.Load("C:\\Users\\aathiyarath\\Downloads\\5.xml");
            var data = xml.InnerXml;
            var workspace = parser.Parse(data);
            workspace.Evaluate();
            Console.ReadLine();
            // run the workspace
        }
    }

    
}

            
        