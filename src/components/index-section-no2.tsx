import { Box, Container, Tab, Tabs, Typography, Stack } from '@mui/material';
import dedent from 'dedent';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { match } from 'ts-pattern';
import PythonLogo from '../assets/python-logo.png';
import NodeLogo from '../assets/node-logo.png';
import DartLogo from '../assets/dart-logo.png';
import GoLogo from '../assets/go-logo.png';

type Lang = 'python' | 'nodejs' | 'dart' | 'go';

export function IndexSectionNo2() {
  const [currLang, setCurrLang] = useState<Lang>('python');
  const codes: Record<Lang, string> = {
    python: dedent`
      import truevoice

      truevoice.configure(api_key=os.environ["TRUEVOICE_API_KEY"])

      audio_path = 'path/to/audio.wav'
      with open(audio_path, 'rb') as audio_file:
          audio_base64 = truevoice.utils.encode_audio_to_base64(audio_file.read())

      model = truevoice.GenerativeModel(model_name="truevoice-1.5-flash")

      response = model.generate_content(["Was this audio generated by AI?", audio_base64])

      print(response.text)
    `,
    nodejs: dedent`
      const truevoice = require('truevoice');

      const apiKey = process.env.TRUEVOICE_API_KEY;

      truevoice.configure({ apiKey });

      const audioBase64 = encodeAudioToBase64(path.resolve('path/to/audio.wav'));

      const model = new truevoice.GenerativeModel({ modelName: "truevoice-1.5-flash" });

      model.generateContent(["Was this audio generated by AI?", audioBase64])
        .then(response => {
          console.log(response.text);
        })
    `,
    dart: dedent`
    import 'package:truevoice/truevoice.dart';

    void main() async {
      final apiKey = Platform.environment['TRUEVOICE_API_KEY'];

      final audioFile = File('path/to/audio.wav');

      final audioBytes = await audioFile.readAsBytes();
      final audioBase64 = base64Encode(audioBytes);

      final model = TrueVoiceClient(apiKey).newGenerativeModel('truevoice-1.5-flash');

      final response = await model.generateContent('Was this audio generated by AI?', audioBase64);
      print('Response: \${response.text}');
    }
    `,
    go: dedent`
    import ("github.com/truevoice/sdk")

    func main() {
        apiKey := os.Getenv("TRUEVOICE_API_KEY")

        audioPath := filepath.Join("path", "to", "audio.wav")
        audioData, err := ioutil.ReadFile(audioPath)
        audioBase64 := base64.StdEncoding.EncodeToString(audioData)

        client := sdk.NewClient(apiKey)
        model := client.NewGenerativeModel("truevoice-1.5-flash")

        response, err := model.GenerateContent("Was this audio generated by AI?", audioBase64)
        fmt.Println("Response:", response.Text)
    }
`,
  };

  const langs: Lang[] = ['python', 'nodejs', 'dart', 'go'];

  const realLang = match(currLang)
    .with('python', () => 'python')
    .with('nodejs', () => 'javascript')
    .with('dart', () => 'dart')
    .with('go', () => 'go')
    .exhaustive();

  const getLabel = (lang: Lang) =>
    match(lang)
      .with('python', () => 'Python')
      .with('nodejs', () => 'NodeJS')
      .with('dart', () => 'Dart(Flutter)')
      .with('go', () => 'Go')
      .exhaustive();

  const logo = match(currLang)
    .with('python', () => PythonLogo)
    .with('nodejs', () => NodeLogo)
    .with('dart', () => DartLogo)
    .with('go', () => GoLogo)
    .exhaustive();

  return (
    <Box bgcolor={'#121212'} height={'100vh'} display={'flex'} alignItems={'center'} minWidth={'1000px'}>
      <Container>
        <Typography fontWeight={700} fontSize={'52px'} lineHeight={'normal'} color="#a07bec">
          B2B.
        </Typography>
        <Typography fontWeight={700} fontSize={'40px'} lineHeight={'normal'} color={'white'}>
          SDK를 통한 빠른 서비스 연동
        </Typography>
        <Stack spacing={0.5} mt={4}>
          <Tabs value={currLang} onChange={(_, val) => setCurrLang(val)}>
            {langs.map((lang) => (
              <Tab key={lang} value={lang} label={getLabel(lang)} sx={{ color: '#fff', textTransform: 'capitalize' }} />
            ))}
          </Tabs>
          <Box sx={{ pre: { padding: '40px !important', fontSize: '16px', borderRadius: '20px', fontFamily: "'D2Coding', monospace" } }} position={'relative'}>
            <SyntaxHighlighter language={realLang} style={darcula}>
              {codes[currLang]}
            </SyntaxHighlighter>
            <Box position={'absolute'} top={0} right={0} sx={{ transform: 'translate(0px, -50%)' }}>
              <img src={logo} alt="" style={{ opacity: 0.5 }} width={280} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
