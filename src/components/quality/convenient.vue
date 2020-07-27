<template>
  <div>
    <ul>
      <li>
        <div class="top">
          <div class="top-left">
            <img
              src="https://cube.elemecdn.com/d/96/893d83b49141686a0ff58231d26f9JPEG.JPEG"
              alt=""
            />
            <div class="store-name">innewgogo·轻食沙拉(九方店)</div>
            <div class="store-tag">
              <van-tag color="#A45B1C" plain>配送飞快</van-tag>
            </div>
          </div>
          <div class="top-right"><span>评分4.5</span>|<span>月售652</span></div>
        </div>
        <div class="bottom">
          <ol>
            <li>
              <img
                src="https://cube.elemecdn.com/b/60/f1604d1a5c35d7d6e61bd7d074a71jpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
                alt=""
              />
              <div class="food-title">香烤鸡肉杂粮谷物碗（热）</div>
              <div class="food-material">
                主要原料:鸡肉
              </div>
              <div class="food-price">
                ￥26.8<span><s> ￥38</s></span>
              </div>
              <div class="food-add">
                <van-icon name="add" />
              </div>
            </li>
          </ol>
        </div>
      </li>
      <li>
        <div class="top">
          <div class="top-left">
            <img
              src="https://cube.elemecdn.com/b/ae/ed7b1cffca7cfcb2ff98a6ccaad31png.png?x-oss-process=image/format,webp/resize,w_80,h_80,m_fixed"
              alt=""
            />
            <div class="store-name">寿司制造</div>
            <div class="store-tag">
              <van-tag color="#A45B1C" plain>配送飞快</van-tag>
            </div>
          </div>
          <div class="top-right"><span>评分4.6</span>|<span>月售691</span></div>
        </div>
        <div class="bottom">
          <ol>
            <li>
              <img
                src="https://cube.elemecdn.com/6/80/ac80a43e62e813955f620a9fa5f7ejpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
                alt=""
              />
              <div class="food-title">一人餐/全熟食</div>
              <div class="food-material">
                主要原料:大米,草鱼
              </div>
              <div class="food-price">
                ￥20
              </div>
              <div class="food-add">
                <van-icon name="add" />
              </div>
            </li>
            <li v-if="flag4">
              <img
                src="https://cube.elemecdn.com/a/ac/661ea3c5d9717651b45444dffbb71jpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
                alt=""
              />
              <div class="food-title">超级鳗鱼饭套餐</div>
              <div class="food-material">
                主要原料:鳗鱼
              </div>
              <div class="food-price">
                ￥32<span><s> ￥38</s></span>
              </div>
              <div class="food-add">
                <van-icon name="add" />
              </div>
            </li>
            <li v-if="flag4">
              <img
                src="https://cube.elemecdn.com/9/d9/d9f59cb9d5c5f4787d37409ebe47ejpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
                alt=""
              />
              <div class="food-title">超值单人套餐。</div>
              <div class="food-material">
                主要原料:鸭肉
              </div>
              <div class="food-price">
                ￥20
              </div>
              <div class="food-add">
                <van-icon name="add" />
              </div>
            </li>
          </ol>
          <!-- 展开 -->
          <p @click="flag4 = !flag4" v-if="flag4 == false">
            展开更多套餐<span>2个</span
            ><span><van-icon name="arrow-down"/></span>
          </p>
          <p @click="flag4 = !flag4" v-if="flag4 == true">
            收起<span><van-icon name="arrow-up"/></span>
          </p>
        </div>
      </li>
      <li>
        <div class="top">
          <div class="top-left">
            <img
              src="https://cube.elemecdn.com/9/fb/f92861e93d4ad181a2504516d6d83jpeg.jpeg?x-oss-process=image/format,webp/resize,w_80,h_80,m_fixed"
              alt=""
            />
            <div class="store-name">宁都辣霸(娱乐城店)</div>
            <div class="store-tag">
              <van-tag color="#A45B1C" plain>配送飞快</van-tag>
            </div>
          </div>
          <div class="top-right">
            <span>评分4.5</span>|<span>月售1271</span>
          </div>
        </div>
        <div class="bottom">
          <ol>
            <li>
              <img
                src="https://cube.elemecdn.com/3/37/b11e04c7661ab9c83c0fcc047d94djpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
                alt=""
              />
              <div class="food-title">宁都小炒鱼+米饭</div>
              <div class="food-material">
                主要原料:大米,草鱼
              </div>
              <div class="food-price">
                ￥10.81<span><s> ￥23</s></span>
              </div>
              <div class="food-add">
                <van-icon name="add" />
              </div>
            </li>
            <li v-if="flag1">
              <img
                src="https://cube.elemecdn.com/b/21/e9c472bb194aac81e9c0d01963d1cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
                alt=""
              />
              <div class="food-title">酸菜炒庆片+米饭</div>
              <div class="food-material">
                主要原料:鸭肉
              </div>
              <div class="food-price">
                ￥11.75<span><s> ￥25</s></span>
              </div>
              <div class="food-add">
                <van-icon name="add" />
              </div>
            </li>
            <li v-if="flag1">
              <img
                src="https://cube.elemecdn.com/0/a8/a7800e639d2eada61fc20f9502602jpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
                alt=""
              />
              <div class="food-title">香辣口水鸭+米饭</div>
              <div class="food-material">
                主要原料:鸭肉
              </div>
              <div class="food-price">
                ￥12.96<span><s> ￥21.6</s></span>
              </div>
              <div class="food-add">
                <van-icon name="add" />
              </div>
            </li>
          </ol>
          <!-- 展开 -->
          <p @click="flag1 = !flag1" v-if="flag1 == false">
            展开更多套餐<span>2个</span
            ><span><van-icon name="arrow-down"/></span>
          </p>
          <p @click="flag1 = !flag1" v-if="flag1 == true">
            收起<span><van-icon name="arrow-up"/></span>
          </p>
        </div>
      </li>
      <li>
        <div class="top">
          <div class="top-left">
            <img
              src="https://cube.elemecdn.com/c/f9/6035bf3c551717c04ddbbca8f97d8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_80,h_80,m_fixed"
              alt=""
            />
            <div class="store-name">兴当麦基(宝能城汉堡披萨店)</div>
            <div class="store-tag">
              <van-tag color="#A45B1C" plain>配送飞快</van-tag>
            </div>
          </div>
          <div class="top-right"><span>评分4.6</span>|<span>月售947</span></div>
        </div>
        <div class="bottom">
          <ol>
            <li>
              <img
                src="https://cube.elemecdn.com/6/63/ba0704c35ed20bb5b44f231563b3ejpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
                alt=""
              />
              <div class="food-title">香辣鸡腿堡+鸡肉卷+可乐</div>
              <div class="food-material">
                主要原料:鸡肉
              </div>
              <div class="food-price">
                ￥15.8<span><s> ￥29.8</s></span>
              </div>
              <div class="food-add">
                <van-icon name="add" />
              </div>
            </li>
            <li v-if="flag2">
              <img
                src="https://cube.elemecdn.com/b/31/adbdda2ea97366398f4c10898d210jpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
                alt=""
              />
              <div class="food-title">蝴蝶腿+辣翅+香辣鸡腿堡+可乐</div>
              <div class="food-material">
                主要原料:鸡肉
              </div>
              <div class="food-price">
                ￥21.8<span><s> ￥28.8</s></span>
              </div>
              <div class="food-add">
                <van-icon name="add" />
              </div>
            </li>
            <li v-if="flag2">
              <img
                src="https://cube.elemecdn.com/1/d5/e2a76e145d927c7e0830fff3fe0b9jpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"
                alt=""
              />
              <div class="food-title">蜜汁手扒鸡</div>
              <div class="food-material">
                主要原料:鸡肉
              </div>
              <div class="food-price">
                ￥17.8<span><s> ￥20.8</s></span>
              </div>
              <div class="food-add">
                <van-icon name="add" />
              </div>
            </li>
          </ol>
          <!-- 展开 -->
          <p @click="flag2 = !flag2" v-if="flag2 == false">
            展开更多套餐<span>2个</span
            ><span><van-icon name="arrow-down"/></span>
          </p>
          <p @click="flag2 = !flag2" v-if="flag2 == true">
            收起<span><van-icon name="arrow-up"/></span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag1: false,
      flag2: false,
      flag4: false
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  overflow: hidden;
  margin: 0px auto;
  margin-bottom: 50px;
  list-style: none;
  background-color: #fff;
  & > li {
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 10px;
    .top {
      height: 60px;
      .top-left {
        float: left;
        img {
          margin-top: 10px;
          margin-left: 10px;
          width: 40px;
          float: left;
        }
        .store-name {
          float: left;
          margin-left: 10px;
          font-size: 16px;
          margin-top: 5px;
        }
        .store-tag {
          margin-left: 60px;
          margin-top: 30px;
        }
      }
      .top-right {
        float: right;
        margin-right: 10px;
        margin-top: 10px;
        font-size: 10px;
        color: #999;
        & > span {
          margin-left: 5px;
          margin-right: 5px;
        }
      }
    }
    .bottom {
      width: 100%;
      ol {
        width: 94%;
        margin-left: 3%;
        margin-right: 3%;
        li {
          margin-top: 20px;
          img {
            width: 110px;
            float: left;
          }
          .food-title {
            font-size: 16px;
            margin-top: -5px;
            margin-left: 118px;
          }
          .food-material {
            font-size: 12px;
            color: #999;
            margin-left: 118px;
            margin-top: 5px;
          }
          .food-price {
            margin-left: 118px;
            margin-top: 44px;
            color: #b91f20;
            font-size: 18px;
            span {
              color: #666;
              font-size: 12px;
              margin-left: 5px;
            }
          }
          .food-add {
            float: right;
            font-size: 30px;
            margin-top: -36px;
          }
        }
      }
      p {
        margin-left: 144px;
        margin-top: 5px;
        font-size: 13px;
        color: #999;
        & > span {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
