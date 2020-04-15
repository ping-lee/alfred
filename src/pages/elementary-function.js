import React from 'react';
import Layout from '../components/Layout';
import MathInline from '../components/MathInline';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import { rhythm, scale } from '../utils/typography';

class ElementFun extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <article>
          <header>
            <h1 style={{ color: 'var(--textTitle)' }}>初等函数</h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: 'block',
                marginBottom: rhythm(1),
                marginTop: rhythm(-4 / 5),
              }}
            >
              2020年4月14日 • ☕️ 5 min read
            </p>
          </header>
          <div>
            <p>
              初等函数（基本函數）是由常函数、幂函数、指数函数、对数函数、三角函数和反三角函数经过有限次的有理运算（加、减、乘、除、有限次乘方、有限次开方）及有限次函数复合所产生、并且在定义域上能用一个方程式表示的函数。
            </p>
            <p>
              一般来说，分段函数不是初等函数，因为在这些分段函数的定义域上不能用一个解析式表示。
            </p>
            <ul>
              <li>幂函数</li>
              <li>指数函数</li>
              <li>对数函数</li>
              <li>三角函数</li>
              <li>反三角函数</li>
            </ul>
            <h3>幂函数</h3>
            <p>
              一般地，形如
              <MathInline isInline="true" text="y = x^α" />
              (α为有理数）的函数，即以底数为自变量，幂为因变量，指数为常数的函数称为幂函数。例如函数
              <MathInline isInline="true" text="y = x^0" />、
              <MathInline isInline="true" text="y = x^1" />、
              <MathInline isInline="true" text="y = x^2" />、
              <MathInline isInline="true" text="y = x^{-1}" />。
            </p>
            <p>
              幂函数的图象一定会出现在第一象限内，一定不会出现在第四象限，至于是否出现在第二、三象限内，要看函数的奇偶性；幂函数的图象最多只能同时出现在两个象限内；如果幂函数图象与坐标轴相交，则交点一定是原点。
            </p>
            <p>
              当α>0时，幂函数
              <MathInline isInline="true" text="y = x^α" />
              有下列性质： 1、图像都经过点（1,1）（0,0）; 2、函数的图像在区间
              <MathInline isInline="true" text="[0,\infty]" />
              上是增函数；
              3、在第一象限内，α>1时，导数值逐渐增大；α=1时，导数为常数；时，导数值逐渐减小，趋近于0（函数值递增）
            </p>
            <h3>指数函数</h3>
            <h3>对数函数</h3>
            <h3>三角函数</h3>
            <h3>反三角函数</h3>
            <MathInline isInline="true" text="c = \pm \sqrt{a^2 + b^2}" />
            形如公式形如公式形如公式形如公式形如公式形如公式形如公式形如公式形如公式形如公式形如公式
            <MathInline text="c = \pm \sqrt{a^2 + b^2}" />
          </div>
          <footer>
            <p>
              <a href="" target="_blank" rel="noopener noreferrer">
                在知乎上讨论
              </a>
              {` • `}
              <a href="" target="_blank" rel="noopener noreferrer">
                在GitHub上编辑
              </a>
            </p>
          </footer>
        </article>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ElementFunSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default ElementFun;
