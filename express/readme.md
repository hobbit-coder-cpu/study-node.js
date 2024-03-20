## Express.js 를 사용하는 이유 
# Node.js의 API를 쉽게 사용할 수 있게 해줍니다. 
# 많은 사람들이 사용 
# Express.js를 기반으로 하는 다른 프레임 워크들도 만들어지고 있기 때문이 이 프레임워크 하나만 배우면 다른 Node.js 프레임워크도 빠르게 배울 수 있다. 

## res.json(object) vs res.send(object)
# 기능상은 거의 동일
# res.json(object) 내부 동작 
#   stringify -> send(string)
# res.send(object) 내부 동작
#   res.json(object) -> res.send(string)
# 내부에서 호출 차이가 있으므로 object를 보낼때는 res.json() 이용하는 것을 추천

## res.end() vs res.send()
# end 호출시 세션 종료
# 데이터르 제공하지 않고 응답을 종료할때 사용
# res.status(404).end()
# end로 종료하지 않아도 되는 때 
# res.json() 나 res.send()를 보내면 알아서 종료
# end 보낼시 Content-Type 와 ETag 정보가 없음.
# ETag는 리소스의 특정 버젼에 대한 식별자. 콘텐츠 변경되지 않은 경우 웹서버에서 전체 응답을 보낼 필요가 없으므로 캐시를 보다 효율적으로 사용하고 대역폭을 절약 
# send() 를 이용하는 것을 추천 

