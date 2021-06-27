const blogs = [
  {
    id: 1,
    name: "Why Flutter?",
    text: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex urna, feugiat eget egestas non, posuere a elit. Sed a ante turpis. In hac habitasse platea dictumst. Nullam sit amet est vel nulla tempus vestibulum at vitae risus. Duis a lacinia lorem. Cras ornare a libero at bibendum. Donec dictum mi ut nisi semper efficitur. Donec sit amet libero leo. Ut erat turpis, dictum nec lobortis eget, congue ut est. Aliquam convallis metus a nunc sodales auctor et id nisl. Cras et vestibulum leo. Mauris non egestas tellus, id placerat sem. In dui arcu, convallis vel lacinia eget, efficitur vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi hendrerit, est imperdiet tempus mollis, tortor elit venenatis odio, vitae pretium diam urna et turpis.`,
      `Duis commodo tristique tristique. Etiam condimentum facilisis augue et interdum. Donec efficitur tortor vel erat vulputate euismod. Praesent tincidunt dapibus lectus vel laoreet. Sed condimentum, orci viverra feugiat scelerisque, dolor sapien efficitur ligula, vel aliquam est elit ac libero. Aenean vehicula consectetur est. Morbi eu tortor euismod, finibus magna a, facilisis nisl. Donec ut finibus nibh. Proin volutpat convallis eros sed rhoncus. Etiam non dapibus ex, vitae fringilla felis. In faucibus ex odio, ut semper odio dapibus a. Pellentesque aliquet, libero ac commodo hendrerit, mi leo tristique sapien, vitae faucibus lacus tellus non ex.`,
      `Aenean semper sagittis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non ipsum scelerisque, sodales nisl sit amet, egestas quam. Vivamus vehicula, est ac blandit feugiat, nibh nunc bibendum arcu, ac porttitor nibh risus vel enim. Fusce scelerisque, massa in pretium dictum, tortor lectus volutpat erat, tristique facilisis magna tortor ullamcorper arcu. Nam gravida nibh id lacus interdum, vitae eleifend sapien commodo. Sed dictum egestas sem ac faucibus. Donec venenatis risus et lorem congue, at commodo purus maximus. Sed semper mi nisl, vitae bibendum metus tempus id.`,
      `Morbi erat urna, facilisis et porta ut, laoreet eu neque. Sed pretium porttitor est vitae convallis. Nullam euismod ultricies erat, id feugiat libero aliquam sit amet. Morbi pulvinar, mauris vel commodo finibus, nibh odio varius nisl, eu condimentum sapien lorem eget felis. Proin molestie in arcu sagittis vulputate. Maecenas interdum augue justo, quis venenatis tortor sagittis ut. Donec urna eros, sollicitudin ullamcorper libero in, tempor maximus tortor. Fusce sagittis ante urna, sed ornare nisi venenatis a. Sed bibendum mauris at commodo lacinia. Pellentesque pellentesque semper tortor id dictum. Vestibulum hendrerit et magna non vehicula. Duis vitae libero iaculis, faucibus urna eu, volutpat nisl.`,
      `Integer dapibus, tellus eu vulputate sagittis, massa orci dapibus eros, placerat congue elit ante placerat est. In quis commodo tortor, ac pulvinar elit. Suspendisse tincidunt tellus urna. Quisque nisl nulla, tempus non vestibulum ut, sodales a nisi. Praesent lacinia imperdiet justo, quis varius velit ullamcorper nec. Mauris sed sollicitudin risus. Pellentesque vel congue neque, id venenatis libero. Duis eu urna et dolor rhoncus rhoncus. Proin eu risus aliquam, bibendum dui quis, molestie ligula. Sed blandit lobortis maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida lacus sed porttitor facilisis. Integer accumsan magna massa, sit amet interdum eros condimentum sed. Pellentesque metus lacus, pellentesque vel ante vel, laoreet imperdiet ex. Nullam cursus, nunc eget lacinia imperdiet, sapien mauris ultrices mi, sit amet tristique dolor libero in leo. Donec a suscipit purus, eget commodo ex.`,
    ],
    img: "https://miro.medium.com/max/1200/0*s7vGN34hz5jJUYTm.png",
  },
  {
    id: 2,
    name: "Why Flutter?",
    text: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex urna, feugiat eget egestas non, posuere a elit. Sed a ante turpis. In hac habitasse platea dictumst. Nullam sit amet est vel nulla tempus vestibulum at vitae risus. Duis a lacinia lorem. Cras ornare a libero at bibendum. Donec dictum mi ut nisi semper efficitur. Donec sit amet libero leo. Ut erat turpis, dictum nec lobortis eget, congue ut est. Aliquam convallis metus a nunc sodales auctor et id nisl. Cras et vestibulum leo. Mauris non egestas tellus, id placerat sem. In dui arcu, convallis vel lacinia eget, efficitur vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi hendrerit, est imperdiet tempus mollis, tortor elit venenatis odio, vitae pretium diam urna et turpis.`,
      `Duis commodo tristique tristique. Etiam condimentum facilisis augue et interdum. Donec efficitur tortor vel erat vulputate euismod. Praesent tincidunt dapibus lectus vel laoreet. Sed condimentum, orci viverra feugiat scelerisque, dolor sapien efficitur ligula, vel aliquam est elit ac libero. Aenean vehicula consectetur est. Morbi eu tortor euismod, finibus magna a, facilisis nisl. Donec ut finibus nibh. Proin volutpat convallis eros sed rhoncus. Etiam non dapibus ex, vitae fringilla felis. In faucibus ex odio, ut semper odio dapibus a. Pellentesque aliquet, libero ac commodo hendrerit, mi leo tristique sapien, vitae faucibus lacus tellus non ex.`,
      `Aenean semper sagittis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non ipsum scelerisque, sodales nisl sit amet, egestas quam. Vivamus vehicula, est ac blandit feugiat, nibh nunc bibendum arcu, ac porttitor nibh risus vel enim. Fusce scelerisque, massa in pretium dictum, tortor lectus volutpat erat, tristique facilisis magna tortor ullamcorper arcu. Nam gravida nibh id lacus interdum, vitae eleifend sapien commodo. Sed dictum egestas sem ac faucibus. Donec venenatis risus et lorem congue, at commodo purus maximus. Sed semper mi nisl, vitae bibendum metus tempus id.`,
      `Morbi erat urna, facilisis et porta ut, laoreet eu neque. Sed pretium porttitor est vitae convallis. Nullam euismod ultricies erat, id feugiat libero aliquam sit amet. Morbi pulvinar, mauris vel commodo finibus, nibh odio varius nisl, eu condimentum sapien lorem eget felis. Proin molestie in arcu sagittis vulputate. Maecenas interdum augue justo, quis venenatis tortor sagittis ut. Donec urna eros, sollicitudin ullamcorper libero in, tempor maximus tortor. Fusce sagittis ante urna, sed ornare nisi venenatis a. Sed bibendum mauris at commodo lacinia. Pellentesque pellentesque semper tortor id dictum. Vestibulum hendrerit et magna non vehicula. Duis vitae libero iaculis, faucibus urna eu, volutpat nisl.`,
      `Integer dapibus, tellus eu vulputate sagittis, massa orci dapibus eros, placerat congue elit ante placerat est. In quis commodo tortor, ac pulvinar elit. Suspendisse tincidunt tellus urna. Quisque nisl nulla, tempus non vestibulum ut, sodales a nisi. Praesent lacinia imperdiet justo, quis varius velit ullamcorper nec. Mauris sed sollicitudin risus. Pellentesque vel congue neque, id venenatis libero. Duis eu urna et dolor rhoncus rhoncus. Proin eu risus aliquam, bibendum dui quis, molestie ligula. Sed blandit lobortis maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida lacus sed porttitor facilisis. Integer accumsan magna massa, sit amet interdum eros condimentum sed. Pellentesque metus lacus, pellentesque vel ante vel, laoreet imperdiet ex. Nullam cursus, nunc eget lacinia imperdiet, sapien mauris ultrices mi, sit amet tristique dolor libero in leo. Donec a suscipit purus, eget commodo ex.`,
    ],
    img: "https://miro.medium.com/max/1200/0*s7vGN34hz5jJUYTm.png",
  },
  {
    id: 3,
    name: "Why Flutter?",
    text: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex urna, feugiat eget egestas non, posuere a elit. Sed a ante turpis. In hac habitasse platea dictumst. Nullam sit amet est vel nulla tempus vestibulum at vitae risus. Duis a lacinia lorem. Cras ornare a libero at bibendum. Donec dictum mi ut nisi semper efficitur. Donec sit amet libero leo. Ut erat turpis, dictum nec lobortis eget, congue ut est. Aliquam convallis metus a nunc sodales auctor et id nisl. Cras et vestibulum leo. Mauris non egestas tellus, id placerat sem. In dui arcu, convallis vel lacinia eget, efficitur vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi hendrerit, est imperdiet tempus mollis, tortor elit venenatis odio, vitae pretium diam urna et turpis.`,
      `Duis commodo tristique tristique. Etiam condimentum facilisis augue et interdum. Donec efficitur tortor vel erat vulputate euismod. Praesent tincidunt dapibus lectus vel laoreet. Sed condimentum, orci viverra feugiat scelerisque, dolor sapien efficitur ligula, vel aliquam est elit ac libero. Aenean vehicula consectetur est. Morbi eu tortor euismod, finibus magna a, facilisis nisl. Donec ut finibus nibh. Proin volutpat convallis eros sed rhoncus. Etiam non dapibus ex, vitae fringilla felis. In faucibus ex odio, ut semper odio dapibus a. Pellentesque aliquet, libero ac commodo hendrerit, mi leo tristique sapien, vitae faucibus lacus tellus non ex.`,
      `Aenean semper sagittis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non ipsum scelerisque, sodales nisl sit amet, egestas quam. Vivamus vehicula, est ac blandit feugiat, nibh nunc bibendum arcu, ac porttitor nibh risus vel enim. Fusce scelerisque, massa in pretium dictum, tortor lectus volutpat erat, tristique facilisis magna tortor ullamcorper arcu. Nam gravida nibh id lacus interdum, vitae eleifend sapien commodo. Sed dictum egestas sem ac faucibus. Donec venenatis risus et lorem congue, at commodo purus maximus. Sed semper mi nisl, vitae bibendum metus tempus id.`,
      `Morbi erat urna, facilisis et porta ut, laoreet eu neque. Sed pretium porttitor est vitae convallis. Nullam euismod ultricies erat, id feugiat libero aliquam sit amet. Morbi pulvinar, mauris vel commodo finibus, nibh odio varius nisl, eu condimentum sapien lorem eget felis. Proin molestie in arcu sagittis vulputate. Maecenas interdum augue justo, quis venenatis tortor sagittis ut. Donec urna eros, sollicitudin ullamcorper libero in, tempor maximus tortor. Fusce sagittis ante urna, sed ornare nisi venenatis a. Sed bibendum mauris at commodo lacinia. Pellentesque pellentesque semper tortor id dictum. Vestibulum hendrerit et magna non vehicula. Duis vitae libero iaculis, faucibus urna eu, volutpat nisl.`,
      `Integer dapibus, tellus eu vulputate sagittis, massa orci dapibus eros, placerat congue elit ante placerat est. In quis commodo tortor, ac pulvinar elit. Suspendisse tincidunt tellus urna. Quisque nisl nulla, tempus non vestibulum ut, sodales a nisi. Praesent lacinia imperdiet justo, quis varius velit ullamcorper nec. Mauris sed sollicitudin risus. Pellentesque vel congue neque, id venenatis libero. Duis eu urna et dolor rhoncus rhoncus. Proin eu risus aliquam, bibendum dui quis, molestie ligula. Sed blandit lobortis maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida lacus sed porttitor facilisis. Integer accumsan magna massa, sit amet interdum eros condimentum sed. Pellentesque metus lacus, pellentesque vel ante vel, laoreet imperdiet ex. Nullam cursus, nunc eget lacinia imperdiet, sapien mauris ultrices mi, sit amet tristique dolor libero in leo. Donec a suscipit purus, eget commodo ex.`,
    ],
    img: "https://miro.medium.com/max/1200/0*s7vGN34hz5jJUYTm.png",
  },
  {
    id: 4,
    name: "Why Flutter?",
    text: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex urna, feugiat eget egestas non, posuere a elit. Sed a ante turpis. In hac habitasse platea dictumst. Nullam sit amet est vel nulla tempus vestibulum at vitae risus. Duis a lacinia lorem. Cras ornare a libero at bibendum. Donec dictum mi ut nisi semper efficitur. Donec sit amet libero leo. Ut erat turpis, dictum nec lobortis eget, congue ut est. Aliquam convallis metus a nunc sodales auctor et id nisl. Cras et vestibulum leo. Mauris non egestas tellus, id placerat sem. In dui arcu, convallis vel lacinia eget, efficitur vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi hendrerit, est imperdiet tempus mollis, tortor elit venenatis odio, vitae pretium diam urna et turpis.`,
      `Duis commodo tristique tristique. Etiam condimentum facilisis augue et interdum. Donec efficitur tortor vel erat vulputate euismod. Praesent tincidunt dapibus lectus vel laoreet. Sed condimentum, orci viverra feugiat scelerisque, dolor sapien efficitur ligula, vel aliquam est elit ac libero. Aenean vehicula consectetur est. Morbi eu tortor euismod, finibus magna a, facilisis nisl. Donec ut finibus nibh. Proin volutpat convallis eros sed rhoncus. Etiam non dapibus ex, vitae fringilla felis. In faucibus ex odio, ut semper odio dapibus a. Pellentesque aliquet, libero ac commodo hendrerit, mi leo tristique sapien, vitae faucibus lacus tellus non ex.`,
      `Aenean semper sagittis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non ipsum scelerisque, sodales nisl sit amet, egestas quam. Vivamus vehicula, est ac blandit feugiat, nibh nunc bibendum arcu, ac porttitor nibh risus vel enim. Fusce scelerisque, massa in pretium dictum, tortor lectus volutpat erat, tristique facilisis magna tortor ullamcorper arcu. Nam gravida nibh id lacus interdum, vitae eleifend sapien commodo. Sed dictum egestas sem ac faucibus. Donec venenatis risus et lorem congue, at commodo purus maximus. Sed semper mi nisl, vitae bibendum metus tempus id.`,
      `Morbi erat urna, facilisis et porta ut, laoreet eu neque. Sed pretium porttitor est vitae convallis. Nullam euismod ultricies erat, id feugiat libero aliquam sit amet. Morbi pulvinar, mauris vel commodo finibus, nibh odio varius nisl, eu condimentum sapien lorem eget felis. Proin molestie in arcu sagittis vulputate. Maecenas interdum augue justo, quis venenatis tortor sagittis ut. Donec urna eros, sollicitudin ullamcorper libero in, tempor maximus tortor. Fusce sagittis ante urna, sed ornare nisi venenatis a. Sed bibendum mauris at commodo lacinia. Pellentesque pellentesque semper tortor id dictum. Vestibulum hendrerit et magna non vehicula. Duis vitae libero iaculis, faucibus urna eu, volutpat nisl.`,
      `Integer dapibus, tellus eu vulputate sagittis, massa orci dapibus eros, placerat congue elit ante placerat est. In quis commodo tortor, ac pulvinar elit. Suspendisse tincidunt tellus urna. Quisque nisl nulla, tempus non vestibulum ut, sodales a nisi. Praesent lacinia imperdiet justo, quis varius velit ullamcorper nec. Mauris sed sollicitudin risus. Pellentesque vel congue neque, id venenatis libero. Duis eu urna et dolor rhoncus rhoncus. Proin eu risus aliquam, bibendum dui quis, molestie ligula. Sed blandit lobortis maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida lacus sed porttitor facilisis. Integer accumsan magna massa, sit amet interdum eros condimentum sed. Pellentesque metus lacus, pellentesque vel ante vel, laoreet imperdiet ex. Nullam cursus, nunc eget lacinia imperdiet, sapien mauris ultrices mi, sit amet tristique dolor libero in leo. Donec a suscipit purus, eget commodo ex.`,
    ],
    img: "https://miro.medium.com/max/1200/0*s7vGN34hz5jJUYTm.png",
  },
  {
    id: 5,
    name: "Why Flutter and why do you?",
    text: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex urna, feugiat eget egestas non, posuere a elit. Sed a ante turpis. In hac habitasse platea dictumst. Nullam sit amet est vel nulla tempus vestibulum at vitae risus. Duis a lacinia lorem. Cras ornare a libero at bibendum. Donec dictum mi ut nisi semper efficitur. Donec sit amet libero leo. Ut erat turpis, dictum nec lobortis eget, congue ut est. Aliquam convallis metus a nunc sodales auctor et id nisl. Cras et vestibulum leo. Mauris non egestas tellus, id placerat sem. In dui arcu, convallis vel lacinia eget, efficitur vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi hendrerit, est imperdiet tempus mollis, tortor elit venenatis odio, vitae pretium diam urna et turpis.`,
      `Duis commodo tristique tristique. Etiam condimentum facilisis augue et interdum. Donec efficitur tortor vel erat vulputate euismod. Praesent tincidunt dapibus lectus vel laoreet. Sed condimentum, orci viverra feugiat scelerisque, dolor sapien efficitur ligula, vel aliquam est elit ac libero. Aenean vehicula consectetur est. Morbi eu tortor euismod, finibus magna a, facilisis nisl. Donec ut finibus nibh. Proin volutpat convallis eros sed rhoncus. Etiam non dapibus ex, vitae fringilla felis. In faucibus ex odio, ut semper odio dapibus a. Pellentesque aliquet, libero ac commodo hendrerit, mi leo tristique sapien, vitae faucibus lacus tellus non ex.`,
      `Aenean semper sagittis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non ipsum scelerisque, sodales nisl sit amet, egestas quam. Vivamus vehicula, est ac blandit feugiat, nibh nunc bibendum arcu, ac porttitor nibh risus vel enim. Fusce scelerisque, massa in pretium dictum, tortor lectus volutpat erat, tristique facilisis magna tortor ullamcorper arcu. Nam gravida nibh id lacus interdum, vitae eleifend sapien commodo. Sed dictum egestas sem ac faucibus. Donec venenatis risus et lorem congue, at commodo purus maximus. Sed semper mi nisl, vitae bibendum metus tempus id.`,
      `Morbi erat urna, facilisis et porta ut, laoreet eu neque. Sed pretium porttitor est vitae convallis. Nullam euismod ultricies erat, id feugiat libero aliquam sit amet. Morbi pulvinar, mauris vel commodo finibus, nibh odio varius nisl, eu condimentum sapien lorem eget felis. Proin molestie in arcu sagittis vulputate. Maecenas interdum augue justo, quis venenatis tortor sagittis ut. Donec urna eros, sollicitudin ullamcorper libero in, tempor maximus tortor. Fusce sagittis ante urna, sed ornare nisi venenatis a. Sed bibendum mauris at commodo lacinia. Pellentesque pellentesque semper tortor id dictum. Vestibulum hendrerit et magna non vehicula. Duis vitae libero iaculis, faucibus urna eu, volutpat nisl.`,
      `Integer dapibus, tellus eu vulputate sagittis, massa orci dapibus eros, placerat congue elit ante placerat est. In quis commodo tortor, ac pulvinar elit. Suspendisse tincidunt tellus urna. Quisque nisl nulla, tempus non vestibulum ut, sodales a nisi. Praesent lacinia imperdiet justo, quis varius velit ullamcorper nec. Mauris sed sollicitudin risus. Pellentesque vel congue neque, id venenatis libero. Duis eu urna et dolor rhoncus rhoncus. Proin eu risus aliquam, bibendum dui quis, molestie ligula. Sed blandit lobortis maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida lacus sed porttitor facilisis. Integer accumsan magna massa, sit amet interdum eros condimentum sed. Pellentesque metus lacus, pellentesque vel ante vel, laoreet imperdiet ex. Nullam cursus, nunc eget lacinia imperdiet, sapien mauris ultrices mi, sit amet tristique dolor libero in leo. Donec a suscipit purus, eget commodo ex.`,
    ],
    img: "https://miro.medium.com/max/1200/0*s7vGN34hz5jJUYTm.png",
  },
];

export default blogs;
